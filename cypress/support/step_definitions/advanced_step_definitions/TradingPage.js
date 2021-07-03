import {Then} from "cypress-cucumber-preprocessor/steps"
import {tradingPage} from "../../platforms_pages/advanced_pages/TradingPage";

Then(/^check search button in header$/, function () {
    tradingPage.getSearchButton()
});


Then(/^check available asset in list with active favorite$/, function () {
    tradingPage.getAssetWithActiveFavoriteButton()
});

Then(/^check asset details is enabled$/, function () {
    tradingPage.checkAssetDetails()
});

Then(/^open asset trading hours$/, function () {
    tradingPage.clickOnAssetTradingHoursButton()
});

Then(/^remove asset from Favorite$/, function () {
    tradingPage.removeFavoriteAsset()
});

Then(/^open asset details$/, function () {
    tradingPage.clickOnOpenAssetDetailButton()
});

Then(/^check asset trading hours details$/, function () {
    tradingPage.checkTradingHoursDetails()
});

Then(/^go to (.*) subtab$/, function (text) {
    tradingPage.goToTab(text)
});

Then(/^add asset to Favorite$/, function () {
    tradingPage.addFavoriteAsset()
});

Then(/^click on search button in header$/, function () {
    tradingPage.clickOnSearchButton()
});

Then(/^check search input is enabled$/, function () {
    tradingPage.clickOnSearchIcon()
    tradingPage.checkSearchInput()
});

Then(/^check search close button is enabled$/, function () {
    tradingPage.checkSearchInputCloseBtn()
});

Then(/^enter (.*) into search input$/, function (text) {
    tradingPage.fillSearchInput(text)
});

Then(/^check asset list is not empty$/, function () {
    tradingPage.checkAssetListIsNotEmpty()
});

Then(/^clear search input$/, function () {
    tradingPage.clearSearchInput()
});

Then(/^check asset list is empty$/, function () {
    tradingPage.checkAssetListIsEmpty()
});

Then(/^close search input$/, function () {
    tradingPage.closeSearchInput()
});

Then(/^check search input is disabled$/, function () {
    tradingPage.checkSearchInputIsDisabled()
});

Then(/^click on active asset$/, function () {
    tradingPage.clickOnActiveAsset()
});

