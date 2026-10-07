import { $ } from '@wdio/globals';

class DynamicLoadingPage {
    linkExample1(opcion: string) {
        return $(`*=${opcion}`);
    }

    get titlePage() {
        return $('h1');
    }
}

export default new DynamicLoadingPage();
