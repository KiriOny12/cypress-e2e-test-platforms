Feature:  Open and Close trades


  Background:
    Given account advanced page 500pips
    Then log in to the 500pips
    Then check you are authorization on real
    Then go to Trading main tab
    Then close another notification
    Then switch to All tab


  @trade
  Scenario: Open Crypto (Crypto) position with SLTP and direction BUY, then close it
    Then check instrument, it should be Crypto
    Given first active asset from list and tap on it
    Then check you are on /asset_id page
    Then close another notification
    Then click Buy button
    Then click on Open position button
    Then see Position was opened notification
    Then close notification
    Then check trade count, it should be present
    Then go to positions main tab
    Then close another notification
    Then check you are on /position page
    Then check Open positions tab is active
    Then open position details with Buy direction
    Then wait 120000 sec
    Then click on close position
    Then see Closed successfully notification