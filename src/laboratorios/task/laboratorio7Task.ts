import loginPage from '../page/loginPage';
import { expect } from '@wdio/globals';
import { AppUrls } from '../../util/urls.js';

class Laboratorio7Task {
    async abrirPagina() {
        await AppUrls.navegarA(AppUrls.lab7);
    }

    async ingresarCredenciales() {
        await loginPage.txtPasswordValue.waitForDisplayed();
        await loginPage.userName.scrollIntoView({ block: 'center', inline: 'center' });
        const password = await loginPage.txtPasswordValue.getText();
        const userName = await loginPage.txtUsernameValue.getText();
        await loginPage.userName.waitForClickable();
        await loginPage.userName.setValue(userName);
        await loginPage.pssword.setValue(password);
        await loginPage.btnLogin.click();
    }

    async validarMensajeE(mensaje: string) {
        await expect(loginPage.mensajeConf).toHaveText(mensaje);
    }
}

export default new Laboratorio7Task();