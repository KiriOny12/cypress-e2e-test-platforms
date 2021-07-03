Feature: Account Settings Page


  Background:
    Given account advanced page 1niro
    Then log in to the 1niro
    Then check you are authorization on real
    Then close another notification
    Then click on account settings page
    Then check you are on /account-settings page
    Then check account settings title


  @links
  Scenario: Check account settings page links
    #check "Change Password" link
    Then check active Change Password option
    Then open Change Password setting page
    #check "Terms And Conditions" link
    Then check active Terms And Conditions option
    Then open Terms And Conditions setting page
    #check "Verification" link
    Then check active Verification option
    Then click on Verification menu
    Then wait 4000 sec
    Then check Verification title
    Then get iframe link


  @gui
  Scenario: Check Account Type menu
    Then check active Account Type option
    Then check account type icon
    Then click on Account Type menu
    Then check Account Type title in menu
    Then check account type icon in menu
    Then check Current Trader Points info
    Then check Required T. Points info
    Then check points amount is present
    Then click on button close





