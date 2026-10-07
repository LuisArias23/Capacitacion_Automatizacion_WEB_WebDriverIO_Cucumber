import { generate } from 'multiple-cucumber-html-reporter';
import cucumberJson from 'wdio-cucumberjs-json-reporter';
// @ts-expect-error: no type definitions available
import allure from 'allure-commandline';
import fs from 'fs';

export const config: WebdriverIO.Config = {
  runner: "local",
  tsConfigPath: "./tsconfig.json",

  specs: [
    './src/**/*.feature',
  ],
  exclude: [],

  maxInstances: 10,

  capabilities: [
    {
      browserName: "chrome",
      browserVersion: "152",
      "wdio:enforceWebDriverClassic": true,
      "goog:chromeOptions": {
        args: ['--start-maximized',
          '--disable-notifications',
          //'--disable-popup-blocking',
          '--disable-infobars'
          //'--disable-extensions'
          ],
      },
    },
  ],
  before: async function () {
    // Habilita el dominio de Network y aplica el bloqueo de URLs
    await (browser as any).sendCommand('Network.enable', {});
    await (browser as any).sendCommand('Network.setBlockedURLs', {
      urls: [
        '*doubleclick.net*',
        '*googlesyndication.com*',
        '*googleadservices.com*',
        '*google-analytics.com*',
        '*adservice.google.*',
        '*pagead2.googlesyndication.com*'
      ]
    });
  },

  logLevel: "info",
  bail: 0,
  //baseUrl: "https://demo.automationtesting.in/",
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,

  framework: "cucumber",

  reporters: [
    'spec',
    ['cucumberjs-json', {
      jsonFolder: './reports/json/',
      language: 'en',
    }],
    ['allure', {
      outputDir: 'allure-results',
      disableWebdriverStepsReporting: true,
      disableWebdriverScreenshotsReporting: false,
      useCucumberStepReporter: true
    }]
  ],

  cucumberOpts: {
    require: [
      './src/laboratorios/steps/laboratorio1.steps.ts',
      './src/laboratorios/steps/laboratorio2.steps.ts',
      './src/laboratorios/steps/laboratorio3.steps.ts',
      './src/laboratorios/steps/laboratorio4.steps.ts',
      './src/laboratorios/steps/laboratorio5.steps.ts',
      './src/laboratorios/steps/laboratorio6.steps.ts',
      './src/laboratorios/steps/laboratorio7.steps.ts',
      './src/navegacionDocumentacionWebdriverIO/steps/navigation.steps.ts'
    ],
    backtrace: false,
    requireModule: [],
    dryRun: false,
    failFast: false,
    name: [],
    snippets: true,
    source: true,
    strict: false,
    tagExpression: "",
    timeout: 60000,
    ignoreUndefinedDefinitions: false,
  },

  onPrepare: function () {
    // 1. Limpieza de reportes Cucumber anteriores
    if (fs.existsSync('./reports')) {
      fs.rmSync('./reports', { recursive: true, force: true });
    }
    // 2. Limpieza de datos crudos y reporte final anterior de Allure
    if (fs.existsSync('./allure-results')) {
      fs.rmSync('./allure-results', { recursive: true, force: true });
    }
    if (fs.existsSync('./allure-report')) {
      fs.rmSync('./allure-report', { recursive: true, force: true });
    }
  },

  afterStep: async function () {
    const screenshot = await browser.takeScreenshot();
    cucumberJson.attach(screenshot, 'image/png');
  },

  onComplete: async function () {
    const currentDate = new Date().toLocaleString();

    // 1. Genera el reporte múltiple de Cucumber
    await generate({
      jsonDir: './reports/json/',
      reportPath: './reports/html/',
      openReportInBrowser: false,
      metadata: {
        browser: {
          name: 'chrome',
          version: 'latest',
        },
        device: 'Local Test Machine',
        platform: {
          name: 'windows',
          version: '11',
        },
      },
      customData: {
        title: 'Información de la Ejecución',
        data: [
          { label: 'Proyecto', value: 'Automatización WebdriverIO' },
          { label: 'Fecha de Ejecución', value: currentDate },
          { label: 'Ambiente', value: 'QA / Local' }
        ]
      }
    });

    // 2. Compila los JSON de Allure a reporte HTML final
    const reportError = new Error('No se pudo compilar el reporte de Allure');
    const generation = allure(['generate', 'allure-results', '--clean']);

    return new Promise<void>((resolve, reject) => {
      const generationTimeout = setTimeout(() => reject(reportError), 15000);

      generation.on('exit', function (exitCode: number) {
        clearTimeout(generationTimeout);
        if (exitCode !== 0) {
          return reject(reportError);
        }
        console.log('Reporte Allure compilado con éxito en ./allure-report');
        resolve();
      });
    });
  }
};