import laboratoriosPage from '../page/laboratoriosPage';
import { expect } from '@wdio/globals';
import { AppUrls } from '../../util/urls.js';

class laboratorio4Task {
    async abrirPagina() {
        await AppUrls.navegarA(AppUrls.lab4);
    }
    async seleccionarCheckBox() {
        await laboratoriosPage.checkBox.scrollIntoView({ block: 'center', inline: 'center' });
        await laboratoriosPage.checkBox.waitForClickable;
        await laboratoriosPage.checkBox.click();
    }
    async validarCheckBox() {
        await expect(laboratoriosPage.checkBox).toBeSelected();
    }
}
export default new laboratorio4Task();