import { Given, When, Then } from '@wdio/cucumber-framework';
import laboratorio6 from '../task/laboratorio6Task';


Given('yo ingreso a la pagina de Dynamic Loanding', async () => {
    await laboratorio6.abrirPagina();
});
When('Selecciona la opcion {string}', async (Opc:string) => {
    await laboratorio6.seleccionarLink(Opc);
}
);

Then('Visualizar el Titulo principal', async () => {
    await laboratorio6.validarTituloExp1();
}
);

