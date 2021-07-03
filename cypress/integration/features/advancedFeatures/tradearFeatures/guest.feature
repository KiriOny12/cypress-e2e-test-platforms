Feature: Guest


  @functions
  Scenario: Redirect to account page after open position without log in
    Given account advanced page tradear
    Then go to Operación main tab
    Then switch to Todo tab
    Then check instrument, it should be Forex
    Then click on active asset
    Then check you are on /asset_id page
    Then click on button sell
    Then click on Posición abierta button
    Then check you are on /account page


  @functions
  Scenario: Redirect to account page after adding asset to favorite  without log in
    Given trading advanced page tradear
    Then switch to Todo tab
    Then check instrument, it should be Forex
    Given first active asset from list and tap on it
    Then check you are on /asset_id page
    Then add asset to Favorite
    Then check you are on /account page

