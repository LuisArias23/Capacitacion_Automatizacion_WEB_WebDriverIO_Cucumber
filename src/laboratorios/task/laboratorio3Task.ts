import laboratoriosPage from '../page/laboratoriosPage';
import { expect } from '@wdio/globals';

class laboratorio3Task {

    async ingresarCredenciales() {
        await laboratoriosPage.campoEmail.waitForClickable;
        await laboratoriosPage.campoEmail.setValue("luis@gmail.com");
        await laboratoriosPage.campoPassword.setValue("123456");
        await laboratoriosPage.btnEnter.click();
    }
    async validarMensajeError(mensaje: string) {
        await expect(laboratoriosPage.mensajeError).toHaveText(mensaje);
    }
}
export default new laboratorio3Task();