import laboratoriosPage from '../page/laboratoriosPage';
import { expect } from '@wdio/globals';
import { AppUrls } from '../../util/urls.js';

class laboratorio4Task {
    async abrirPagina() {
        await AppUrls.navegarA(AppUrls.lab4);
    }
    async seleccionarCheckBox() {
        await laboratoriosPage.checkBox.waitForExist({ timeout: 10000 });
        await laboratoriosPage.checkBox.scrollIntoView({ block: 'center', inline: 'center' });
        //await laboratoriosPage.checkBox.click();
        await browser.execute((el) => {
            el.click();
        }, await laboratoriosPage.checkBox);
    }
    async validarCheckBox() {
        await laboratoriosPage.checkBox.waitForExist({ timeout: 5000 });
        await expect(laboratoriosPage.checkBox).toBeSelected();
    }
}
export default new laboratorio4Task();