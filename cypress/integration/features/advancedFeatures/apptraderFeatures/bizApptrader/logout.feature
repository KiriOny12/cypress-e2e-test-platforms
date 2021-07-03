Feature:  Logout page


  @links
  Scenario: Logout from platform
    Given account advanced page bizApptrader
    Then log in to the bizApptrader
    Then check you are authorization on real
    Then close another notification
    Then click on logout

