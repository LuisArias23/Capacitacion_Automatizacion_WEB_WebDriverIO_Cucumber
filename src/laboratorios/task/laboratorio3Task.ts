import automationTestingPage from '../page/automationTestingPage';
import { expect } from '@wdio/globals';

class Laboratorio3Task {
    async ingresarCredenciales() {
        await automationTestingPage.campoEmail.waitForClickable();
        await automationTestingPage.campoEmail.setValue("luis@gmail.com");
        await automationTestingPage.campoPassword.setValue("123456");
        await automationTestingPage.btnEnter.click();
    }

    async validarMensajeError(mensaje: string) {
        await expect(automationTestingPage.mensajeError).toHaveText(mensaje);
    }
}

export default new Laboratorio3Task();