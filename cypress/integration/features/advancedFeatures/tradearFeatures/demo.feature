Feature: Switch to demo account

  Background:
    Given account advanced page tradear
    Then log in to the tradear
    Then check you are authorization on real
    Then close another notification
    Then wait 4000 sec
    Then switch to demo via button Cambiar a la cuenta de demostración
    Then check you are on demoadvanced page
    Then check you are authorization on demo


  @links
  Scenario: Check demo links
    Then go to cuenta main tab
    Then click on configuración de cuenta page
    Then check you are on /account-settings page
    Then check configuración de cuenta title
    #check "Terms And Conditions" link
    Then check active Terms And Conditions option
    Then open Terms And Conditions setting page
    #go back to main page
    Then close menu
    #check logo link
    Then go to Operación main tab
    Then check logo
    Then click on logo and check response


  @gui
  Scenario: Check common functions of demo platform
    Then go to cuenta main tab
    Then check Logout button is enabled
    Then check "configuración de plataforma" button is enabled
    Then check "configuración de cuenta" button is enabled
    Then see your name
    And your account type
    Then check Demo icon
    Then check "Cambiar a la cuenta real" button is enabled
    #Check Account Type menu on Demo version
    Then click on configuración de cuenta page
    Then check you are on /account-settings page
    Then check configuración de cuenta title
    Then check active Tipo de cuenta option
    Then check account type icon
    Then click on Tipo de cuenta menu
    Then check Tipo de cuenta title in menu
    Then check account type icon in menu
    Then check Puntos de trading actuales info
    Then check Puntos de trading necesarios info
    Then check points amount is present
    Then click on button close
    Then close menu
    #Check platform settings on Demo version
    Then click on configuración de plataforma page
    Then check you are on /platform-settings page
    Then click on Notificaciones menu
    Then check Notificaciones title in menu
    Then check menu view
    Then click on button close
    Then click on Opciones de saldo menu
    Then check Opciones de saldo title in menu
    Then check menu view
    Then click on button close
    Then Language menu should have text Español
    Then click on Idioma menu
    Then choose Portuguese language
    Then choose Español language
    Then click on button close
    Then close menu
    # Check /wallet page elements
    Then go to cartera main tab
    Then check cartera footer icon
    Then see wallet icon
    Then see balance amount
    Then see available amount for withdrawal text
    Then check wallet list option, it should have length 6


  @functions
  Scenario: Check common functions of demo platform
    #Filter asset list on Demo version
    Then go to Todo subtab
    Then check Todo tab is active
    Then click on search button in header
    Then enter A into search input
    Then check asset list is not empty
    Then clear search input
    Then enter ` into search input
    Then check asset list is empty
    Then close search input
    #Add and remove  asset from  favorite on Demo version
    Then check instrument, it should be Forex
    Then add asset to Favorite
    Then see Añadido correctamente a favoritos notification
    Then close notification
    Then remove asset from Favorite
    Then see Se ha eliminado correctamente de sus favoritos notification
    Then close notification


