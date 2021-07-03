Feature:  Open and close orders


  Background:
    Given account advanced page tradear
    Then log in to the tradear
    Then check you are authorization on real
    Then close another notification
    Then go to Operación main tab
    Then switch to Todo tab
    Then close another notification
  # Scenarios : Open orders with direction 'SELL'  for all available instruments and their markets


  @trade
  Scenario: Open CFD (Commodities) order without SLTP and direction 'SELL', then close it
    Then check instrument, it should be CFD
    Then check market, it should be Materias primas
    Given first active asset from list and tap on it
    Then check you are on /asset_id page
    Then close another notification
    Then click Sell button
    Then open Orden pendiente block
    Then change open order price
    Then click on Colocar orden button
    Then see CORRECTO notification
    Then close notification
    Then check trade count, it should be present
    Then check error message is disabled
    Then go to posiciones main tab
    Then close another notification
    Then switch to Órdenes pendientes tab
    Then check Órdenes pendientes tab is active
    Then open position details with Sell direction
    Then wait 4000 sec
    Then close another notification
    Then click on close position
    Then see Cerrado con éxito notification