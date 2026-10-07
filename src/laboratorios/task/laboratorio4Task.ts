import checkboxesPage from '../page/checkboxesPage';
import { expect } from '@wdio/globals';
import { AppUrls } from '../../util/urls.js';

class Laboratorio4Task {
    async abrirPagina() {
        await AppUrls.navegarA(AppUrls.lab4);
    }

    async seleccionarCheckBox() {
        await checkboxesPage.checkBox.waitForExist({ timeout: 10000 });
        await checkboxesPage.checkBox.scrollIntoView({ block: 'center', inline: 'center' });
        await browser.execute((el: any) => {
            el.click();
        }, await checkboxesPage.checkBox);
    }

    async validarCheckBox() {
        await checkboxesPage.checkBox.waitForExist({ timeout: 5000 });
        await expect(checkboxesPage.checkBox).toBeSelected();
    }
}

export default new Laboratorio4Task();