Feature: Clear open positions


  Background: Go to account page as authorization user
    Given account advanced page coTradingteck
    Then log in to the coTradingteck
    Then check you are authorization on real


  @clear
  Scenario:  Close open positions if its enabled
    Then go to positions main tab
    Then close another notification
    Then clear positions in positions block