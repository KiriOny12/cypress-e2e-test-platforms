Feature: Login Form

 * As a user I want see WL logo on login form
 * As a new user I want open account page and see a link for sign up.
 * As user with account I want open this page, fill login form,
  choose remember me or not and successfully log in to platform.
 * If I make mistake, I want see error message about it.
 * If I forgot my password, I want to be able to remember it
 * I want use show and hide password options


  Background:
    Given account advanced page 1niro


  @links
  Scenario: "Don't have an account yet?" link is enabled
    Then check "Dont have an account yet?" link
    Then go to  have an account yet? page


  @ignore
  Scenario: Check "Forgot your password?" link
    Then check "Forgot your password?" link
    Then go to Forgot your password? page


  @gui
  Scenario: Check Login button is enabled
    Then check button Login

  @functions
  Scenario: Fill login form with wrong email
    Then fill login form with credentials (ooo12@mailinator.com, 123456)
    Then click on button Login
    Then see an error 'Invalid login or password'
    Then check that "email" input is red

  @functions
  Scenario: Fill login form with empty password
    Then insert ooo12@mailinator.com value into the email input
    Then click on button Login
    Then see an error 'Enter password'
    Then check that "password" input is red


  @functions
  Scenario: Use show and hide password options
    Then click on button Show Password
    Then insert 123456 value into the password input like a text
    Then click on button hide password
    Then password isn`t show

  @gui
  Scenario: Check logo
    Then check logo