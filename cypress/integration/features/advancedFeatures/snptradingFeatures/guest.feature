Feature: Guest


  @functions
  Scenario: Redirect to account page after click on Deposit button without log in
    Given wallet advanced page snptrading
    Then click on button Deposit
    Then check you are on /account page


  @functions
  Scenario: Redirect to account page after open position without log in
    Given account advanced page snptrading
    Then go to Trading main tab
    Then go to All subtab
    Then check All tab is active
    Then click on active asset
    Then check you are on /asset_id page
    Then click on button sell
    Then click on Open position button
    Then check you are on /account page


  @functions
  Scenario: Redirect to account page after adding asset to favorite  without log in
    Given trading advanced page snptrading
    Then switch to All tab
    Then check instrument, it should be CFD
    Given first active asset from list and tap on it
    Then check you are on /asset_id page
    Then add asset to Favorite
    Then check you are on /account page

