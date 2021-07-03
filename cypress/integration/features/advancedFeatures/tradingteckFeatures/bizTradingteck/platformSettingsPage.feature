Feature: Platform Settings Page


  Background: Go to account settings page as authorization user
    Given account advanced page bizTradingteck
    Then log in to the bizTradingteck
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
  # choose ar language
    Then Language menu should have text English
    Then click on Language menu
    Then choose العربية language
    Then click on button close
    Then check title name خيارات الرصيد
  # choose Deutsch language
    Then click on العربية menu
    Then choose Deutsch language
    Then click on button close
    Then check title name Kontostand-Optionen
  # choose Русский language
    Then click on Deutsch menu
    Then choose Русский language
    Then click on button close
    Then check title name Параметры баланса
  # choose Polski language
    Then click on Русский menu
    Then choose Polski language
    Then click on button close
    Then check title name Opcje salda




