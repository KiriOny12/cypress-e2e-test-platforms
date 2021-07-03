Feature:  Open and Close trades


  Background:
    Given account advanced page tradear
    Then log in to the tradear
    Then check you are authorization on real
    Then go to Operación main tab
    Then close another notification
    Then switch to Todo tab


  @trade
  Scenario: Open Crypto (Crypto) position with SLTP and direction BUY, then close it
    Then check instrument, it should be Criptomoneda
    Given first active asset from list and tap on it
    Then check you are on /asset_id page
    Then close another notification
    Then click Buy button
    Then click on Posición abierta button
    Then see Se abrió la posición notification
    Then close notification
    Then check trade count, it should be present
    Then go to posiciones main tab
    Then close another notification
    Then check you are on /position page
    Then check Posiciones abiertas tab is active
    Then open position details with Buy direction
    Then wait 120000 sec
    Then click on close position
    Then see Cerrado con éxito notification