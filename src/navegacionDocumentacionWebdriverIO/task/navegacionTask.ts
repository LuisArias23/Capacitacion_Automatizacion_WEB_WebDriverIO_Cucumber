import DocNavegacionPage from '../page/docNavegacionPage';
import {  expect } from '@wdio/globals';
import { AppUrls } from '../../util/urls.js';

 class navegacionTask{

      async abrirPagina() {
             await AppUrls.navegarA(AppUrls.WebDriverIo);
         }

    async clickDocumentacion() {
        await DocNavegacionPage.docsLink.waitForClickable();
        await DocNavegacionPage.docsLink.click();
    }

    async validarTitulo(titulo: string) {
        await expect(DocNavegacionPage.mainHeading).toHaveText(titulo);
    }
 }
 export default new navegacionTask();