import {Given, Then} from "cypress-cucumber-preprocessor/steps"
import {basePage} from "../../platforms_pages/base_pages/BasePage";
import {basePageAdvanced} from "../../platforms_pages/base_pages/BasePageAdvanced";



Then(/^check logo$/, ()  =>  {
    basePage.wait(4500)
    basePageAdvanced.logo()
});

Then(/^go by url ([^"]*)$/, (url)  => {
    basePage.open(url)
});

Given(/^page (.*)$/,  (site) =>{
    basePageAdvanced.openSiteMobileView(site)
    basePage.wait(3000)
});

Given(/^size mobile$/, function () {
    basePageAdvanced.viewportMobile()
});

Then(/^check you are on ([^"]*) page$/, (url)=> {
    basePage.wait(4000)
    basePage.checkUrl(url)
});

Then(/^check (.*) footer icon$/, function (text) {
    basePageAdvanced.checkActiveFooterMenu(text)
});

Then(/^go to ([^"]*) main tab$/,  (text) => {
    basePageAdvanced.goToMainTab(text)
    basePage.wait(2000)
});

Then(/^check trade count, it should be present$/, function () {
    basePage.wait(2000)
    basePageAdvanced.checkNotificationCount()
});

Then(/^check (.*) tab is active$/,  (text) => {
    basePageAdvanced.checkActiveTabByText(text)
});

Then(/^click on logo and check response$/, function () {
    basePageAdvanced.clickOnLogo()
});

Then(/^pause$/, function () {
    basePage.pause()
});

Given(/^(.*) advanced page (.*)$/, function (page, url) {
    basePageAdvanced.openAdvancedPage(page, url)
});

Then(/^reload page$/, function () {
    basePage.reloadPage()
});