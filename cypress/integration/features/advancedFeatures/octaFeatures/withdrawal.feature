Feature:  Find withdrawal button and clock on it for switching on /withdrawal page


  Background: Log in to the platform
    Given account advanced page octa
    Then log in to the octa
    Then check you are authorization on real
    Then close another notification


  @smoke
  Scenario: Check Withdrawal links
  # check Withdrawal link on account page
    Then open Withdrawal page
  # check Withdrawal link on wallet page
    Then click on tab '/wallet'
    Then open Withdrawal page
