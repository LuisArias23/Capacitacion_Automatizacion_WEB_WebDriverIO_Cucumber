import automationTestingPage from '../page/automationTestingPage';
import { expect } from '@wdio/globals';
import { AppUrls } from '../../util/urls.js';

class Laboratorio2Task {
    async abrirPagina() {
        await AppUrls.navegarA(AppUrls.automationtesting);
    }

    async clickBtSingIn() {
        await automationTestingPage.btnSignIn.waitForClickable();
        await automationTestingPage.btnSignIn.click();
    }

    async validarPantallaLogin() {
        await expect(automationTestingPage.campoEmail).toBeDisplayed();
    }
}

export default new Laboratorio2Task();