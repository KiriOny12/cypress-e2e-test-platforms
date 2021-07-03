Feature: Clear open positions


  Background: Go to account page as authorization user
    Given account advanced page fastrading
    Then log in to the fastrading
    Then check you are authorization on real
    Then close another notification


  @clear
  Scenario:  Close open positions if its enabled
    Then check trade count, it should be present
    Then go to positions main tab
    Then clear positions in positions block