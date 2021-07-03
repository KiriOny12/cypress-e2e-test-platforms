Feature: Favorites page


  Background: Go to account page as authorization user
    Given account advanced page coTradingteck
    Then log in to the coTradingteck
    Then check you are authorization on real
    Then close another notification
    Then go to Trading main tab


  @functions
  Scenario: Add asset to favorite and remove
    Then go to All subtab
    Then check All tab is active
    Then check instrument, it should be CFD
    Then add asset to Favorite
    Then see Successfully added to favorites notification
    Then close notification
    Then remove asset from Favorite
    Then see Successfully removed from favorites notification
    Then close notification












