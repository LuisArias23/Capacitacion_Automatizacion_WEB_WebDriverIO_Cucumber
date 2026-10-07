import automationTestingPage from '../page/automationTestingPage';
import { expect } from '@wdio/globals';
import { AppUrls } from '../../util/urls.js';

class Laboratorio1Task {
    async abrirPagina() {
        await AppUrls.navegarA(AppUrls.automationtesting);
    }

    async validarIcono() {
        await expect(automationTestingPage.logo).toBeDisplayed();
    }
}

export default new Laboratorio1Task();