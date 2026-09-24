import { When, Then } from '@wdio/cucumber-framework';
import laboratorio2 from '../task/laboratorio2Task.js';
import laboratorio2Task from '../task/laboratorio2Task.js';

When('Se le da Click al boton SignIn', async () => {
    await laboratorio2.clickBtSingIn();
}
);

Then('Visualizo la pagina principal de SignIn',async () => {
        await laboratorio2Task.validarPantallaLogin();
    }
);