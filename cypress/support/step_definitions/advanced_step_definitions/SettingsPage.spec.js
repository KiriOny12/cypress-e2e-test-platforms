import {Then} from "cypress-cucumber-preprocessor/steps"
import {settingsPage} from "../../platforms_pages/advanced_pages/SettingsPage";
import {basePage} from "../../platforms_pages/base_pages/BasePage";


Then(/^check ([^"]*) title$/, (text) => {
   settingsPage.checkTitle(text)
});

Then(/^check active (.*) option$/, (text) => {
  settingsPage.checkOption(text)
});

Then(/^check account type icon$/, () =>  {
  settingsPage.checkAccountTypeIcon()
});

Then(/^check (.*) title in menu$/, (text) =>  {
    basePage.wait(2000)
    settingsPage.checkOptionTitle(text)
});

Then(/^check (.*) info$/, (text) => {
    settingsPage.checkPointInfo(text)
});

Then(/^click on (.*) menu$/, (text) => {
    settingsPage.clickOnMenu(text)
});

Then(/^activate notification$/, () => {
    settingsPage.activateNotificationValue()
});

Then(/^disabled notification$/, () =>  {
    settingsPage.disabledNotificationValue()
});

Then(/^click on button close$/, () =>  {
    settingsPage.clickOnCloseButton()
    basePage.wait(2000)
});

Then(/^check menu view$/, function () {
    settingsPage.checkWrapperPage()
});

Then(/^check account type icon in menu$/, function () {
    settingsPage.checkAccountTypeInAccountMenu()
});

Then(/^check points amount is present$/, function () {
    settingsPage.checkPointAmount()
});

Then(/^choose (.*) language$/, function (lang) {
    settingsPage.chooseLanguage(lang)
});

Then(/^check title name (.*)$/, function (name) {
    settingsPage.checkOptionsTitle(name)
});

Then(/^open (.*) setting page$/, function (name) {
    settingsPage.openSetting(name)
});

Then(/^get iframe link$/, function () {
    settingsPage.getIframeLink()
});

Then(/^check verification page$/, function () {
    settingsPage.checkVerificationPage()
});

Then(/^turn off (.*)$/, function (name) {
   settingsPage.turnOffBalanceOption(name)
});

Then(/^Language menu should have text (.*)$/, function (lang) {
    settingsPage.shouldBeEnText(lang)
});

Then(/^close menu$/, function () {
    settingsPage.closeMenu()
});