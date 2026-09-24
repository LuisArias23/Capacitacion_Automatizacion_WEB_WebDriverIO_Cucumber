import { $ } from '@wdio/globals';

class DocNavegacionPage {
    get docsLink() {
        //return $('a[href="/docs/gettingstarted"]');
        return $('=Documentación');
    }

    get mainHeading() {
        return $('h1');
    }
}

export default new DocNavegacionPage();