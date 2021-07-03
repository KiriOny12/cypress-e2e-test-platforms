Feature: Trade Block Page


  Background:
    Given account advanced page fastrading
    Then log in to the fastrading
    Then check you are authorization on real
    Then close another notification
    Then go to Trading main tab
    Then switch to All tab
    Then check instrument, it should be Forex
    Given first active asset from list and tap on it
    Then check you are on /asset_id page


  @gui
  Scenario: Check all element in Trade Block Page is enabled
  # Check amount block
    Then try to click on plus amount button
    Then type 70000 into amount input
    Then try to click on mines amount button
    Then check amount block
    Then check initial margin is enabled
  # Check pending order block
    Then check Pending order block is enabled
    Then open Pending order block
    Then check and insert 0.7 into order rate input
    Then check order type detail
    Then close Pending order block
    Then check block is disabled
    Then reload page
  # Check Stop Loss block
    Then check Stop Loss block is enabled
    Then open Stop Loss block
    Then check est. loss details
    Then wait 6000 sec
    Then check and insert 0.78 into est. input
    Then close Stop Loss block
    Then check block is disabled
    Then reload page
  # Check Take Profit block
    Then check Take Profit block is enabled
    Then open Take Profit block
    Then check est. profit details
    Then wait 6000 sec
    Then check and insert 0.75 into est. input
    Then close Take Profit block
    Then check block is disabled
  # Check buy\sell button
    Then check Sell button is enabled
    Then check Buy button is enabled
  # Check open trade button
    Then click Sell button
    Then check Open position button
    Then open Pending order block
    Then check Pending orders button
















