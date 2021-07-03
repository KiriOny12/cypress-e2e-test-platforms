Feature:  Logout page


  @smoke
  Scenario: Logout from platform
    Given account advanced page octa
    Then log in to the octa
    Then check you are authorization on real
    Then close another notification
    Then click on logout

