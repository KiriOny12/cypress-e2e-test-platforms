Feature: Platform Settings Page


  Background: Go to account settings page as authorization user
    Given account advanced page bizApptrader
    Then log in to the bizApptrader
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
  # choose Français language
    Then Language menu should have text English
    Then click on Language menu
    Then choose Français language
    Then click on button close
    Then check title name Options concernant le solde
  # choose ar language
    Then click on Français menu
    Then choose العربية language
    Then click on button close
    Then check title name خيارات الرصيد
  # choose Türkçe language
    Then click on العربية menu
    Then choose Türkçe language
    Then click on button close
    Then check title name Bakiye seçenekleri
  # choose Русский language
    Then click on Türkçe menu
    Then choose Русский language
    Then click on button close
    Then check title name Параметры баланса
  # choose Italiano language
    Then click on Русский menu
    Then choose Italiano language
    Then click on button close
    Then check title name Opzioni saldo
  # choose Portuguese language
    Then click on Italiano menu
    Then choose Portuguese language
    Then click on button close
    Then check title name Opções de saldo
  # choose Brazilian Portuguese language
    Then click on Portuguese menu
    Then choose Brazilian Portuguese language
    Then click on button close
    Then check title name Opções de saldo
  # choose Español language
    Then click on Brazilian Portuguese menu
    Then choose Español language
    Then click on button close
    Then check title name Opciones de saldo
  # choose Polski language
    Then click on Español menu
    Then choose Polski language
    Then click on button close
    Then check title name Opcje salda
  # choose Simplified Chinese language
    Then click on Polski menu
    Then choose Simplified Chinese language
    Then click on button close
    Then check title name 余额选项
  # choose Traditional Chinese language
    Then click on Simplified Chinese menu
    Then choose Traditional Chinese language
    Then click on button close
    Then check title name 餘額選項



