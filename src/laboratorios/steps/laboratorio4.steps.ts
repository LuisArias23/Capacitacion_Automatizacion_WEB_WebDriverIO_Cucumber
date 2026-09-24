import { Given, When, Then } from '@wdio/cucumber-framework';
import laboratorio4 from '../task/laboratorio4Task';


Given('yo ingreso a la pagina de checkboxes', async () => {
    await laboratorio4.abrirPagina();
});
When('Selecciona el checkBox 1', async () => {
    await laboratorio4.seleccionarCheckBox();
}
);

Then('Visualizar el checkBox seleccionado', async () => {
    await laboratorio4.validarCheckBox();
}
);