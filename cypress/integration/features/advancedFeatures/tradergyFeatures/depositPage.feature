Feature:  Deposit page


  Background: Log in to the platform
    Given account advanced page tradergy
    Then log in to the tradergy
    Then check you are authorization on real
    Then close another notification


  @ignore
  Scenario: Check deposit links
  # check deposit link on account page
    Then check "Deposit" button is enabled
    Then go to Deposit page
  # check deposit link on wallet page
    Then click on tab '/wallet'
    Then go to Deposit page



