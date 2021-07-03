Feature: Platform Settings Page


  Background: Go to account settings page as authorization user
    Given account advanced page tradear
    Then log in to the tradear
    Then check you are authorization on real
    Then close another notification
    Then click on configuración de plataforma page
    Then check you are on /platform-settings page


  @gui
  Scenario: Check all menus
    Then check menu view
    Then click on Notificaciones menu
    Then check Notificaciones title in menu
    Then disabled notification
    Then activate notification
    Then check menu view
    Then click on button close
    Then click on Opciones de saldo menu
    Then check Opciones de saldo title in menu
    Then check menu view
    Then click on button close
    Then click on Idioma menu
    Then check Idioma title in menu
    Then check menu view
    Then click on button close


  @functions
  Scenario: Check available languages
  # choose Portuguese language
    Then Language menu should have text Español
    Then click on Idioma menu
    Then choose Portuguese language
    Then click on button close
    Then check title name Opções de saldo




