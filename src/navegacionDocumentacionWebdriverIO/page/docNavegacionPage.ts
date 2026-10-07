import { $ } from '@wdio/globals';

class DocNavegacionPage {
    get docsLink() {
        //return $('a[href="/docs/gettingstarted"]');
    return $('=Docs');
    }

    get mainHeading() {
        return $('h1');
    }
}

export default new DocNavegacionPage();