import dynamicLoadingPage from '../page/dynamicLoadingPage';
import { expect } from '@wdio/globals';
import { AppUrls } from '../../util/urls.js';

class Laboratorio6Task {
    async abrirPagina() {
        await AppUrls.navegarA(AppUrls.lab6);
    }

    async seleccionarLink(opcion: string) {
        await dynamicLoadingPage.linkExample1(opcion).scrollIntoView({ block: 'center', inline: 'center' });
        await dynamicLoadingPage.linkExample1(opcion).waitForClickable();
        await dynamicLoadingPage.linkExample1(opcion).click();
    }

    async validarTituloExp1() {
        await dynamicLoadingPage.titlePage.waitForDisplayed();
        await expect(dynamicLoadingPage.titlePage).toHaveText("Example 1: Element on page that is hidden");
    }
}

export default new Laboratorio6Task();