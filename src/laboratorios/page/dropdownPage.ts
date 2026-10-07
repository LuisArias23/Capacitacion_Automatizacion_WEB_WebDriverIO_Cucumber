import { $ } from '@wdio/globals';

class DropdownPage {
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
}

export default new DropdownPage();
