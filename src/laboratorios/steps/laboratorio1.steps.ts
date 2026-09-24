import { Given, When, Then } from '@wdio/cucumber-framework';
import laboratorio1 from '../task/laboratorio1Task.js';

Given('yo ingreso al url', async () => {
    await laboratorio1.abrirPagina();
});

When('la pagina carga el home principal', async () => {
    await laboratorio1.validarIcono();
}
);

Then('visualizo el logo de la pagina',async () => {
        await laboratorio1.validarIcono();
    }
);