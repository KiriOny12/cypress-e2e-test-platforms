Feature: Account Page


  Background: Go to account page as authorization user
    Given account advanced page tradear
    Then log in to the tradear
    Then check you are authorization on real
    Then close another notification


  @gui
  Scenario: Check account page element on Real version
    Then see your ID
    Then see your name
    And your account type
    Then check "Saldo" and count is displayed
    Then check "Disponible para retirar" and count is displayed
    Then check that it`s a real platform
    Then check Cambiar a la cuenta de demostración link is enabled
    Then check Logout button is enabled
    Then check "DEPOSITAR" button is enabled
    Then check "configuración de plataforma" button is enabled
    Then check "configuración de cuenta" button is enabled
    Then check cuenta footer icon