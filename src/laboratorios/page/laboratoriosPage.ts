import { $ } from '@wdio/globals';

class LaboratoriosPage {
    //--> Pantalla Principal
    get IconoID() {
        return $('#logo');
    }
    //---> Pantalla Login ---Lab2
    get btnSingIn() {
        return $('#btn1');
    }
    //--->Lab3
    get campoEmail() {
        return $('input[ng-model="Email"]');
    }
    get campoPassword() {
        return $('input[ng-model="Password"]');
    }
    get btnEnter() {
        return $('#enterbtn');
    }
    get mensajeError() {
        return $('#errormsg');
    }
    //-->Lab4
    get checkBox() {
        return $('(//input[@type="checkbox"])[1]');
    }
    //-->Lab5
    get selecLista() {
        return $('#dropdown');
    }
    get selecOpcLista() {
        return $('#dropdown').$('option=Option 1');
    }
    get selecLista2() {
        return $('#country');
    }
    selecOpcLista2(country: string) {
        return $('#country').$(`option=${country}`);
    }
    //-->Lab6
    linkExample1(Opc: string) {
        return $(`*=${Opc}`);
    }
    get titlePage() {
        return $('h1');
    }
    //-->Lab7
    get txtUsernameValue() {
        return $('//li[contains(text(), "Username")]/b');
    }
    get txtPasswordValue() {
        return $('//li[contains(text(), "Password")]/b');
    }
    get userName() {
        return $('#username');
    }
    get pssword() {
        return $('#password');
    }
    get btnLogin() {
        return $('#submit-login');
    }
    get mensajeConf() {
        return $('#flash');
    }
}
export default new LaboratoriosPage();