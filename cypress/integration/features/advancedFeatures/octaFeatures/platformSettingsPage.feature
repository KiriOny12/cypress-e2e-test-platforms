Feature: Platform Settings Page


  Background: Go to account settings page as authorization user
    Given account advanced page octa
    Then log in to the octa
    Then check you are authorization on real
    Then close another notification
    Then click on platform settings page
    Then check you are on /platform-settings page


  @smoke
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






