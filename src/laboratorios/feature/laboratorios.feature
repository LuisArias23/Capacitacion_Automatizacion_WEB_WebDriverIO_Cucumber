Feature: Navegacion en pagina web automation testing
  Como usuario quiero navegar por las diferentes pagina automationt esting

  @Laboratorio1
  Scenario: Visualizar correctamente la pagina principal
    Given yo ingreso al url
    When la pagina carga el home principal
    Then visualizo el logo de la pagina

  @Laboratorio2
  Scenario: Visualizar la pagina de Login
    Given yo ingreso al url
    When Se le da Click al boton SignIn
    Then Visualizo la pagina principal de SignIn

  @Laboratorio3
  Scenario: Ingresar credenciales incorrectas
    Given yo ingreso al url
    When Se le da Click al boton SignIn
    And ingresa credenciales no registradas
    Then Visualizo mensaje "Invalid User Name or PassWord"

  @Laboratorio4
  Scenario: Ingresa a la pagina principal y selecciona el checkBox
    Given yo ingreso a la pagina de checkboxes
    When Selecciona el checkBox 1
    Then Visualizar el checkBox seleccionado

  @Laboratorio5
  Scenario: Ingresa a la pagina principal y selecciona el dropdown
    Given yo ingreso a la pagina de DropDown List
    When Selecciona la option 1 de Simple dropdown
    And selecciona "Colombia" de la seccion Country selection
    Then Visualizar el DropDown seleccionados

  @Laboratorio6
  Scenario: Ingresa a la pagina principal Dynamic Loanding
    Given yo ingreso a la pagina de Dynamic Loanding
    When Selecciona la opcion "Example 1: Element on page that is hidden"
    Then Visualizar el Titulo principal

  @Laboratorio7
  Scenario: Ingresa ingresar al sistema con usuario y contraseña estipulada en la pagina princupal
    Given yo ingreso a la pagina expandtesting modulo login
    When ingreso las credenciales indicadas en la pagina
    Then Visualizar el mensaje de confirmacion "You logged into a secure area!"
