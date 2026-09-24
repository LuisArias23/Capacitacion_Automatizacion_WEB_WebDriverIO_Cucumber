import laboratoriosPage from '../page/laboratoriosPage';
import { expect } from '@wdio/globals';
import { AppUrls } from '../../util/urls.js';

class laboratorio6Task {
    async abrirPagina() {
        await AppUrls.navegarA(AppUrls.lab6);
    }
    async seleccionarLink(Opc:string) {
        await laboratoriosPage.linkExample1(Opc).scrollIntoView({ block: 'center', inline: 'center' });
        await laboratoriosPage.linkExample1(Opc).waitForClickable;
        await laboratoriosPage.linkExample1(Opc).click();
    }
    async validarTituloExp1() {
        await laboratoriosPage.titlePage.waitForDisplayed();
        await expect(laboratoriosPage.titlePage).toHaveText("Example 1: Element on page that is hidden");
    }
}
export default new laboratorio6Task();