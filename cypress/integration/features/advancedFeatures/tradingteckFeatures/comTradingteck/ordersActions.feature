Feature:  Open and close orders


  Background:
    Given account advanced page comTradingteck
    Then log in to the comTradingteck
    Then check you are authorization on real
    Then go to Trading main tab
    Then switch to All tab
    Then close another notification
  # Scenarios : Open orders with direction 'SELL'  for all available instruments and their markets


  @trade
  Scenario: Open ETFs (ETFs) order without SLTP and direction Sell, then close it
    Then check instrument, it should be ETFs
    Then check market, it should be ETFs
    Given first active asset from list and tap on it
    Then check you are on /asset_id page
    Then close another notification
    Then click Sell button
    Then open Pending order block
    Then change open order price
    Then click on Place order button
    Then see SUCCESS notification
    Then close notification
    Then check trade count, it should be present
    Then check error message is disabled
    Then go to positions main tab
    Then close another notification
    Then check you are on /position page
    Then switch to Pending orders tab
    Then check Pending orders tab is active
    Then open position details with Sell direction
    Then wait 3000 sec
    Then close another notification
    Then click on close position
    Then see Closed successfully notification


  @trade
  Scenario: Open CFD (Indices) order without SLTP and direction 'SELL', then close it
    Then check instrument, it should be CFD
    Then check market, it should be Indices
    Given first active asset from list and tap on it
    Then check you are on /asset_id page
    Then close another notification
    Then click Sell button
    Then open Pending order block
    Then change open order price
    Then click on Place order button
    Then see SUCCESS notification
    Then close notification
    Then check trade count, it should be present
    Then check error message is disabled
    Then go to positions main tab
    Then close another notification
    Then switch to Pending orders tab
    Then check Pending orders tab is active
    Then open position details with Sell direction
    Then wait 4000 sec
    Then close another notification
    Then click on close position
    Then see Closed successfully notification


  @trade
  Scenario: Open Forex (Majors) order without SLTP and direction 'SELL', then close it
    Then check instrument, it should be Forex
    Then check market, it should be Majors
    Given first active asset from list and tap on it
    Then check you are on /asset_id page
    Then close another notification
    Then click Sell button
    Then open Pending order block
    Then change open order price
    Then click on Place order button
    Then see SUCCESS notification
    Then close notification
    Then check trade count, it should be present
    Then check error message is disabled
    Then go to positions main tab
    Then close another notification
    Then switch to Pending orders tab
    Then check Pending orders tab is active
    Then open position details with Sell direction
    Then wait 4000 sec
    Then close another notification
    Then click on close position
    Then see Closed successfully notification


  @trade
  Scenario: Open Forex (Minors) order without SLTP and direction 'SELL', then close it
    Then check instrument, it should be Forex
    Then check market, it should be Minors
    Given first active asset from list and tap on it
    Then check you are on /asset_id page
    Then close another notification
    Then click Sell button
    Then open Pending order block
    Then change open order price
    Then click on Place order button
    Then see SUCCESS notification
    Then close notification
    Then check trade count, it should be present
    Then check error message is disabled
    Then go to positions main tab
    Then close another notification
    Then switch to Pending orders tab
    Then check Pending orders tab is active
    Then open position details with Sell direction
    Then wait 4000 sec
    Then close another notification
    Then click on close position
    Then see Closed successfully notification
