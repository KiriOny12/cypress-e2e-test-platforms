Feature:  Check Withdrawal page


  Background: Log in to the platform
    Given account advanced page 1niro
    Then log in to the 1niro
    Then check you are authorization on real
    Then close another notification


  @links
  Scenario: Check Withdrawal links
  # check Withdrawal link on account page
    Then open Withdrawal page
  # check Withdrawal link on wallet page
    Then click on tab '/wallet'
    Then open Withdrawal page

