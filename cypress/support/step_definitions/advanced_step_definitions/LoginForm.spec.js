import {loginForm} from "../../platforms_pages/advanced_pages/LoginForm";
import {Then} from "cypress-cucumber-preprocessor/steps"
import {basePage} from "../../platforms_pages/base_pages/BasePage";
import {basePageAdvanced} from "../../platforms_pages/base_pages/BasePageAdvanced";



Then('check "Dont have an account yet?" link',  () => {
      loginForm.checkOnCreateAccountLink()
});

Then('click on button Login',  () => {
     loginForm.clickOnLoginButton()
});

Then('disabled "Remember me" options', function () {
        loginForm.uncheckRememberMe()
});

Then(/^fill login form with credentials \((.*), (.*)\)$/,  (email, password) => {
    basePage.wait(3000)
    loginForm.typeEmail(email)
    loginForm.typePassword(password)
});

Then(/^see an error 'Invalid login or password'$/, function () {
    loginForm.checkErrorMessageInvalidLoginOrPassword()
});

Then(/^check that "([^"]*)" input is red$/,  (elementName) => {
    loginForm.checkElementIsBlur(elementName)
});

Then(/^see an error 'Enter password'$/,  () => {
    loginForm.checkErrorMessageEnterPassword()
});

Then(/^insert (.*) value into the email input$/, (email)  => {
    loginForm.typeEmail(email)
});

Then(/^check "Forgot your password\?" link$/,  ()  => {
    loginForm.checkForgotYourPasswordLink()
});

Then(/^insert (.*) value into the password input$/, (password)  =>  {
    loginForm.typePassword(password)
});

Then(/^click on button Show Password$/, ()  =>  {
    loginForm.showPassword()
});

Then(/^insert (.*) value into the password input like a text$/, (password)  => {
    loginForm.fillPasswordInputLikeAText(password)
});

Then(/^click on button hide password$/, ()  =>  {
    loginForm.hidePassword()
});

Then(/^password isn`t show$/, ()  =>  {
    loginForm.matchImagePassword()
});

Then(/^check button Login$/, function () {
    loginForm.checkLoginButton()
});


Then(/^log in to the (.*)$/,  (name) => {
    basePageAdvanced.authorization(name)
});