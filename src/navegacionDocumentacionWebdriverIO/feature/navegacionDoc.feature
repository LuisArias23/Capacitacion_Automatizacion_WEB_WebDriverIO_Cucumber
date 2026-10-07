@navegacionDoc

Feature: Navegacion Documentacion pagina web IO

  Como usuario quiero navegar por la documentacion de la pagina web IO

  Scenario: ir a la seccion de Documentacion

    Given yo estoy en la pagina web IO

    When hago click en el boton de documentacion "Docs"

    Then visualizo el titulo "Getting Started"