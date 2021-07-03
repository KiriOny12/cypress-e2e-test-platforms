Feature:  Logout page


  @links
  Scenario: Logout from platform
    Given account advanced page comApptrader
    Then log in to the comApptrader
    Then check you are authorization on real
    Then close another notification
    Then click on logout

