import { $ } from '@wdio/globals';

class CheckboxesPage {
    get checkBox() {
        return $('#checkbox1');
    }
}

export default new CheckboxesPage();
