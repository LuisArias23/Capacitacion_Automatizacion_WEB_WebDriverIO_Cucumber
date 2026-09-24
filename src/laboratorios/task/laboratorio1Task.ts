import laboratorio1Page from '../page/laboratoriosPage';
import { expect } from '@wdio/globals';
import { AppUrls } from '../../util/urls.js';

 class laboratorio1Task{

     async abrirPagina() {
        await AppUrls.navegarA(AppUrls.automationtesting);
    }

    async validarIcono() {
        await expect(laboratorio1Page.IconoID).toBeDisplayed;
    }
 }
 export default new laboratorio1Task();