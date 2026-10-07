import { $ } from '@wdio/globals';

class AutomationTestingPage {
    get logo() {
        return $('#logo');
    }

    get btnSignIn() {
        return $('#btn1');
    }

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
}

export default new AutomationTestingPage();
