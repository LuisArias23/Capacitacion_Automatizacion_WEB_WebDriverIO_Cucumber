import dropdownPage from '../page/dropdownPage';
import { expect } from '@wdio/globals';
import { AppUrls } from '../../util/urls.js';

class Laboratorio5Task {
    async abrirPagina() {
        await AppUrls.navegarA(AppUrls.lab5);
    }

    async seleccionarOpcList1() {
        await dropdownPage.selecLista.scrollIntoView({ block: 'center', inline: 'center' });
        await dropdownPage.selecLista.waitForClickable();
        await dropdownPage.selecLista.click();
        await dropdownPage.selecOpcLista.click();
    }

    async seleccionarOpcList2(country: string) {
        await dropdownPage.selecLista2.waitForClickable();
        await dropdownPage.selecLista2.click();
        await dropdownPage.selecOpcLista2(country).click();
    }

    async validaSelecDropDown(country: string) {
        await expect(dropdownPage.selecOpcLista2(country)).toBeSelected();
    }
}

export default new Laboratorio5Task();