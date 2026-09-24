import laboratoriosPage from '../page/laboratoriosPage';
import { expect } from '@wdio/globals';
import { AppUrls } from '../../util/urls.js';

class laboratorio7Task {
    async abrirPagina() {
        await AppUrls.navegarA(AppUrls.lab7);
    }
    async ingresarCredenciales() {
        await laboratoriosPage.txtPasswordValue.waitForDisplayed();
        await laboratoriosPage.userName.scrollIntoView({ block: 'center', inline: 'center' });
        const password = await laboratoriosPage.txtPasswordValue.getText();
        const userName = await laboratoriosPage.txtUsernameValue.getText();
        await laboratoriosPage.userName.waitForClickable;
        await laboratoriosPage.userName.setValue(userName);
        await laboratoriosPage.pssword.setValue(password);
        await laboratoriosPage.btnLogin.click();
    }
    async validarMensajeE(mensaje: string) {
        await expect(laboratoriosPage.mensajeConf).toHaveText(mensaje);
    }
}
export default new laboratorio7Task();