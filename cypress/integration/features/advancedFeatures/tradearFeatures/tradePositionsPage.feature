Feature: Check Positions Page (positions, orders, Trading History tab)


  Background:
    Given account advanced page tradear
    Then log in to the tradear
    Then check you are authorization on real
    Then close another notification


  @trade
  Scenario:  check orders element
    Then go to Operación main tab
    Then switch to Todo tab
    Then close another notification
    Then check instrument, it should be CFD
    Then check market, it should be Acciones
    Given first active asset from list and tap on it
    Then check you are on /asset_id page
    Then close another notification
    Then click Sell button
    Then open Orden pendiente block
    Then change open order price
    Then click on Colocar orden button
    Then see CORRECTO notification
    Then close notification
    Then go to posiciones main tab
    Then close another notification
    Then switch to Órdenes pendientes tab
    Then check Órdenes pendientes tab is active
    Then check order top
    Then open position details
    Then open Límite de pérdidas block
    Then check displayed button confirm rate
    Then confirm rate
    Then see La posición se ha actualizado notification
    Then close notification
    Then open Toma de ganancias block
    Then decline rate
    Then wait 3000 sec
    Then close another notification
    Then click on close position
    Then see Cerrado con éxito notification


  @trade
  Scenario: check positions element
    Then go to Operación main tab
    Then switch to Todo tab
    Then close another notification
    Then check instrument, it should be Forex
    Then check market, it should be Exóticos
    Given first active asset from list and tap on it
    Then check you are on /asset_id page
    Then close another notification
    Then click Buy button
    Then click on Posición abierta button
    Then see Se abrió la posición notification
    Then close notification
    Then go to posiciones main tab
    Then close another notification
    Then check you are on /position page
    Then check Posiciones abiertas tab is active
    Then check asset top
    Then open position details
    Then check positions details menu
    Then wait 120000 sec
    Then close another notification
    Then click on close position
    Then see Cerrado con éxito notification


  @dui
  Scenario: check Trading History element
    Then go to posiciones main tab
    Then switch to Historial de operaciones tab
    Then check Historial de operaciones tab is active
    Then check trading history position is enabled
    Then open asset details
    Then check trading history details



