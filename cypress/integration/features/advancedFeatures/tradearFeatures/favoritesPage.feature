Feature: Favorites page


  Background: Go to account page as authorization user
    Given account advanced page tradear
    Then log in to the tradear
    Then check you are authorization on real
    Then close another notification
    Then go to Operación main tab


  @functions
  Scenario: Add asset to favorite and remove
    Then go to Todo subtab
    Then check Todo tab is active
    Then check instrument, it should be Forex
    Then add asset to Favorite
    Then see Añadido correctamente a favoritos notification
    Then close notification
    Then remove asset from Favorite
    Then see Se ha eliminado correctamente de sus favoritos notification
    Then close notification












