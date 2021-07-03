import {Then, And} from "cypress-cucumber-preprocessor/steps"
import {accountPage} from "../../platforms_pages/advanced_pages/AccountPage";
import {basePage} from "../../platforms_pages/base_pages/BasePage";




Then(/^see your name$/, function () {
   accountPage.checkName()
});

And(/^see your ID$/, function () {
    accountPage.checkID()
});

Then(/^your account type$/, function () {
    accountPage.checkAccountType()
});

Then(/^check that it`s a real platform$/, function () {
    accountPage.checkRealFlag()
});

Then(/^check (.*) link is enabled$/,  (linkText) =>{
    accountPage.getALink(linkText)
});

Then(/^check Logout button is enabled$/, function () {
    accountPage.getLogoutButton()
});

Then(/^check "([^"]*)" button is enabled$/, (buttonText) => {
    accountPage.getButton(buttonText)
});

Then(/^check "([^"]*)" and count is displayed$/, (text) => {
   accountPage.checkBalanceDetails(text)
});

Then(/^go to ([^"]*) page$/, (buttonName) => {
    accountPage.getHref(buttonName)
});

Then(/^click on logout$/, function () {
    accountPage.logout()
});

Then(/^click on ([^"]*) page$/, (buttonName) =>  {
    accountPage.clickOnElement(buttonName)
});

Then(/^click on tab ([^"]*)$/, (buttonName) => {
    accountPage.clickOnMenuTab(buttonName)
});

Then(/^click on Switch to demo$/, function () {
    basePage.wait(3000)
    accountPage.clickOnDemoLink('Switch to Demo Account')
});

Then(/^check you are authorization on demo$/, function () {
    accountPage.checkAccountGreenPoint()
});

Then(/^check you are authorization on real$/, function () {
    accountPage.checkAccountGreenPoint()
});

Then(/^check Withdrawal button is enabled$/, function () {
    accountPage.checkWithdrawalButton()
});

Then(/^open Withdrawal page$/, function () {
    accountPage.goToWithdrawalPage()
});

Then(/^check Demo icon$/, function () {
    accountPage.checkDemoIcon()
});

Then(/^click Switch to demo$/, function () {
    basePage.wait(3000)
    accountPage.clickOnDemoLink('Cambiar a la cuenta de demostración')
});

Then(/^switch to demo via button ([^"]*)$/, function (text) {
    basePage.wait(3000)
    accountPage.clickOnDemoLink(text)
});