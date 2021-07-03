Feature: Login Form


  Background:
    Given account advanced page tradear


  @links
  Scenario: "Don't have an account yet?" link is enabled
    Then go to ¿Todavía no tiene una cuenta? page


  @links
  Scenario: Check "Forgot your password?" link
    Then go to Olvidó su contraseña? page


  @gui
  Scenario: Check Login button is enabled
    Then check button Login


  @ignore
  Scenario: Fill login form with wrong email
    Then fill login form with credentials (ooo12@mailinator.com, 123456)
    Then click on button Login
    Then see an error 'Invalid login or password'
    Then check that "email" input is red


  @ignore
  Scenario: Fill login form with empty password
    Then insert ooo12@mailinator.com value into the email input
    Then click on button Login
    Then see an error 'Enter password'
    Then check that "password" input is red


  @ignore
  Scenario: Use show and hide password options
    Then click on button Show Password
    Then insert 123456 value into the password input like a text
    Then click on button hide password
    Then password isn`t show


  @gui
  Scenario: Check logo
    Then check logo