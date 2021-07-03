Feature:  Logout page


  @links
  Scenario: Logout from platform
    Given account advanced page newcfds
    Then log in to the newcfds
    Then check you are authorization on real
    Then close another notification
    Then click on logout

