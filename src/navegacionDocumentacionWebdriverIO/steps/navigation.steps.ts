import { Given, When, Then } from '@wdio/cucumber-framework';
import navegacionTask from '../task/navegacionTask';

Given('yo estoy en la pagina web IO', async () => {
    await navegacionTask.abrirPagina();
});

When(
    'hago click en el boton de documentacion {string}',
    async (_opcion: string) => {
        await navegacionTask.clickDocumentacion();
    }
);

Then(
    'visualizo el titulo {string}',
    async (titulo: string) => {
        await navegacionTask.validarTitulo(titulo);
    }
);