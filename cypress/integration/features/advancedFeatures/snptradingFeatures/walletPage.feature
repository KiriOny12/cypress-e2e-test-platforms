Feature: Wallet page


  Background:
    Given account advanced page snptrading
    Then log in to the snptrading
    Then check you are authorization on real
    Then close another notification
    Then go to wallet main tab


  @gui
  Scenario: Check /wallet page elements
    Then check wallet footer icon
    Then see wallet icon
    Then see balance amount
    Then see balance text
    Then see deposit button
    Then see available amount for withdrawal text
  # Check wallet list is enabled on some page
    Then check wallet list option, it should have length 6
    Then go to positions main tab
    Then check wallet list option, it should have length 6
    Then go to Trading main tab
    Then check wallet list option, it should have length 6


  @functions
  Scenario: Edit wallet list using platform settings
    Then go to account main tab
    Then close another notification
    Then click on platform settings page
    Then wait 3000 sec
    Then click on Balance options menu
    Then turn off Available Margin
    Then turn off Initial Margin
    Then turn off Margin Level
    Then click on button close
    Then close menu
    Then check you are on /account page
    Then go to wallet main tab
    Then check wallet list option, it should have length 3
    Then go to account main tab
    Then click on platform settings page
    Then wait 2000 sec
    Then click on Balance options menu
    Then turn off Available Margin
    Then turn off Initial Margin
    Then turn off Margin Level
    Then click on button close





