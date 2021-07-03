Feature:  Check logout link


  @links
  Scenario: Logout from platform
    Given account advanced page upcfds
    Then log in to the upcfds
    Then check you are authorization on real
    Then close another notification
    Then click on logout


