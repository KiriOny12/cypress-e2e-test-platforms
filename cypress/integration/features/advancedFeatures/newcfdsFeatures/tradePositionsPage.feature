Feature: Check Positions Page (positions, orders, Trading History tab)


  Background:
    Given account advanced page newcfds
    Then log in to the newcfds
    Then check you are authorization on real
    Then close another notification


  @trade
  Scenario:  check orders element
    Then go to Trading main tab
    Then switch to All tab
    Then close another notification
    Then check instrument, it should be CFD
    Then check market, it should be Stocks
    Given first active asset from list and tap on it
    Then check you are on /asset_id page
    Then close another notification
    Then click Sell button
    Then open Pending order block
    Then change open order price
    Then click on Place order button
    Then see SUCCESS notification
    Then close notification
    Then go to positions main tab
    Then close another notification
    Then switch to Pending orders tab
    Then check Pending orders tab is active
    Then check order top
    Then open position details
    Then check orders details menu
    Then open Stop Loss block
    Then check displayed button confirm rate
    Then confirm rate
    Then see Position has been updated notification
    Then close notification
    Then open Take Profit block
    Then decline rate
    Then wait 3000 sec
    Then close another notification
    Then click on close position
    Then see Closed successfully notification


  @trade
  Scenario: check positions element
    Then go to Trading main tab
    Then switch to All tab
    Then close another notification
    Then check instrument, it should be Forex
    Then check market, it should be Exotic
    Given first active asset from list and tap on it
    Then check you are on /asset_id page
    Then close another notification
    Then click Buy button
    Then click on Open position button
    Then see Position was opened notification
    Then close notification
    Then go to positions main tab
    Then close another notification
    Then check you are on /position page
    Then check Open positions tab is active
    Then check asset top
    Then open position details
    Then check positions details menu
    Then wait 120000 sec
    Then close another notification
    Then click on close position
    Then see Closed successfully notification


  @gui
  Scenario: check Trading History element
    Then go to positions main tab
    Then switch to Trading History tab
    Then check Trading History tab is active
    Then check trading history position is enabled
    Then open asset details
    Then check trading history details



