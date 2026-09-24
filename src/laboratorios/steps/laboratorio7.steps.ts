import { Given, When, Then } from '@wdio/cucumber-framework';
import laboratorio7 from '../task/laboratorio7Task.js';


Given('yo ingreso a la pagina expandtesting modulo login', async () => {
    await laboratorio7.abrirPagina();
});
When('ingreso las credenciales indicadas en la pagina', async () => {
    await laboratorio7.ingresarCredenciales();
}
);

Then('Visualizar el mensaje de confirmacion {string}', async (mensaje:string) => {
    await laboratorio7.validarMensajeE(mensaje);
}
);

