import { $ } from '@wdio/globals';

class LoginPage {
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

export default new LoginPage();
