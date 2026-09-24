import { Given, When, Then } from '@wdio/cucumber-framework';
import laboratorio5 from '../task/laboratorio5Task.js';


Given('yo ingreso a la pagina de DropDown List', async () => {
    await laboratorio5.abrirPagina();
});
When('Selecciona la option 1 de Simple dropdown', async () => {
    await laboratorio5.seleccionarOpcList1();
}
);
When('selecciona {string} de la seccion Country selection', async (country: string) => {
    await laboratorio5.seleccionarOpcList2(country);
}
);

Then('Visualizar el DropDown seleccionados', async () => {
    await laboratorio5.validaSelecDropDown("Colombia")}
);

