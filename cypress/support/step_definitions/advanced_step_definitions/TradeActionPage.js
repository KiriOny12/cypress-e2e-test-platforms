import {Then} from "cypress-cucumber-preprocessor/steps"
import {tradingPage} from "../../platforms_pages/advanced_pages/TradingPage";
import {basePage} from "../../platforms_pages/base_pages/BasePage";


Then(/^first active asset from list and tap on it$/, function () {
    tradingPage.chooseAndClickOnFirstAssetFromList()
});


Then(/^wait (\d+) sec$/, function (time) {
    basePage.wait(time)
});

Then(/^check instrument, it should be (.*)$/, function (instrument) {
    tradingPage.setInstrument(instrument)
});


Then(/^check market, it should be (.*)$/, function (market) {
    tradingPage.setMarket(market)
});


Then(/^clear positions in positions block$/, function () {
    tradingPage.clearOpenPositions()
    basePage.wait(5000)
});