Feature: Account Page


  Background: Go to account page as authorization user
    Given account advanced page fastrading
    Then log in to the fastrading
    Then check you are authorization on real
    Then close another notification


  @gui
  Scenario: Check account page element on Real version
    Then see your ID
    Then see your name
    And your account type
    Then check "Balance" and count is displayed
    Then check "Available for Withdrawal" and count is displayed
    Then check that it`s a real platform
    Then check Switch to Demo Account link is enabled
    Then check Logout button is enabled
    Then check "Deposit" button is enabled
    Then check Withdrawal button is enabled
    Then check "platform settings" button is enabled
    Then check "account settings" button is enabled
    Then check account footer icon