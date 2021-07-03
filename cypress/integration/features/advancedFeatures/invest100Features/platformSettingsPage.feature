Feature: Platform Settings Page


  Background: Go to account settings page as authorization user
    Given account advanced page invest100
    Then log in to the invest100
    Then check you are authorization on real
    Then close another notification
    Then click on platform settings page
    Then check you are on /platform-settings page


  @gui
  Scenario: Check all menus
    Then check menu view
    Then click on Notifications menu
    Then check Notifications title in menu
    Then disabled notification
    Then activate notification
    Then check menu view
    Then click on button close
    Then click on Balance options menu
    Then check Balance options title in menu
    Then check menu view
    Then click on button close
    Then click on Language menu
    Then check Language title in menu
    Then check menu view
    Then click on button close


  @functions
  Scenario: Check available languages
  # choose Español language
    Then Language menu should have text English
    Then click on Language menu
    Then choose Español language
    Then click on button close
    Then check title name Opciones de saldo
  # choose Japanese language
    Then click on Español menu
    Then choose Japanese language
    Then click on button close
    Then check title name 残高のオプション
  # choose Brazilian Portuguese language
    Then click on Japanese menu
    Then choose Brazilian Portuguese language
    Then click on button close
    Then check title name Opções de saldo



