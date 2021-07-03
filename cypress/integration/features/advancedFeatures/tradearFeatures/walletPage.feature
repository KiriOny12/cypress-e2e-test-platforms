Feature: Wallet page


  Background:
    Given account advanced page tradear
    Then log in to the tradear
    Then check you are authorization on real
    Then close another notification
    Then go to cartera main tab


  @gui
  Scenario: Check /wallet page elements
    Then check cartera footer icon
    Then see wallet icon
    Then see balance amount
    Then see available amount for withdrawal text
  # Check wallet list is enabled on some page
    Then check wallet list option, it should have length 6
    Then go to posiciones main tab
    Then check wallet list option, it should have length 6
    Then go to Operación main tab
    Then check wallet list option, it should have length 6


  @functions
  Scenario: Edit wallet list using platform settings
    Then go to cuenta main tab
    Then close another notification
    Then click on configuración de plataforma page
    Then wait 3000 sec
    Then click on Opciones de saldo menu
    Then turn off Margen disponible
    Then turn off Margen de mantenimiento
    Then turn off Uso del margen
    Then click on button close
    Then close menu
    Then check you are on /account page
    Then go to cartera main tab
    Then check wallet list option, it should have length 3
    Then go to cuenta main tab
    Then click on configuración de plataforma page
    Then wait 2000 sec
    Then click on Opciones de saldo menu
    Then turn off Margen disponible
    Then turn off Margen de mantenimiento
    Then turn off Uso del margen
    Then click on button close





