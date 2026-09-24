import { When, Then } from '@wdio/cucumber-framework';
import laboratorio3 from '../task/laboratorio3Task.js';

When('ingresa credenciales no registradas', async () => {
    await laboratorio3.ingresarCredenciales();
}
);

Then('Visualizo mensaje {string}',async (mensaje :string) => {
        await laboratorio3.validarMensajeError(mensaje);
    }
);