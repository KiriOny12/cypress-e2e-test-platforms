Feature: Account Settings Page


  Background:
    Given account advanced page tradear
    Then log in to the tradear
    Then check you are authorization on real
    Then close another notification
    Then click on configuración de cuenta page
    Then check you are on /account-settings page
    Then check configuración de cuenta title


  @links
  Scenario: Check account settings page links
    #check "Terms And Conditions" link
    Then check active Terms And Conditions option
    Then open Terms And Conditions setting page


  @gui
  Scenario: Check Account Type menu
    Then check active Tipo de cuenta option
    Then check account type icon
    Then click on Tipo de cuenta menu
    Then check Tipo de cuenta title in menu
    Then check account type icon in menu
    Then check Puntos de trading actuales info
    Then check Puntos de trading necesarios info
    Then check points amount is present
    Then click on button close





