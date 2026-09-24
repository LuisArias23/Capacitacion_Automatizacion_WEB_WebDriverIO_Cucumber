import laboratoriosPage from '../page/laboratoriosPage';
import { expect } from '@wdio/globals';
import { AppUrls } from '../../util/urls.js';

class laboratorio5Task {
    async abrirPagina() {
        await AppUrls.navegarA(AppUrls.lab5);
    }
    async seleccionarOpcList1() {
        await laboratoriosPage.selecLista.scrollIntoView({ block: 'center', inline: 'center' });
        await laboratoriosPage.selecLista.waitForClickable();
        await laboratoriosPage.selecLista.click();
        await laboratoriosPage.selecOpcLista.click();
    }
     async seleccionarOpcList2(country:string) {
        await laboratoriosPage.selecLista2.waitForClickable();
        await laboratoriosPage.selecLista2.click();
        await laboratoriosPage.selecOpcLista2(country).click();
    }
    async validaSelecDropDown(country:string) {
        await expect(laboratoriosPage.selecOpcLista2(country)).toBeSelected();
    }
}
export default new laboratorio5Task();