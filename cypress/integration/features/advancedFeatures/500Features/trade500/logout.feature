Feature:  Logout page


  @links
  Scenario: Logout from platform
    Given account advanced page 500trade
    Then log in to the 500trade
    Then check you are authorization on real
    Then close another notification
    Then click on logout

