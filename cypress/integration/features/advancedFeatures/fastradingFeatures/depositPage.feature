Feature:  Deposit page


  Background: Log in to the platform
    Given account advanced page fastrading
    Then log in to the fastrading
    Then check you are authorization on real
    Then close another notification


  @links
  Scenario: Check deposit links
  # check deposit link on account page
    Then go to Deposit page
  # check deposit link on wallet page
    Then click on tab '/wallet'
    Then go to Deposit page


