import laboratoriosPage from '../page/laboratoriosPage';
import { expect } from '@wdio/globals';
import { AppUrls } from '../../util/urls.js';

 class laboratorio2Task{

     async abrirPagina() {
         await AppUrls.navegarA(AppUrls.automationtesting);
    }

    async clickBtSingIn() {
        await laboratoriosPage.btnSingIn.waitForClickable;
        await laboratoriosPage.btnSingIn.click();
    }
    async validarPantallaLogin() {
        await expect(laboratoriosPage.campoEmail).toBeDisplayed;
    }
 }
 export default new laboratorio2Task();