import {Then} from "cypress-cucumber-preprocessor/steps"
import {tradeBlockPage} from "../../platforms_pages/advanced_pages/TradeBlockPage";


Then(/^check asset name is enabled$/, function () {
    tradeBlockPage.checkAssetNameTitle()
});

Then(/^check Go Back button is enabled$/, function () {
    tradeBlockPage.checkGoBackBtn()
});

Then(/^check chart is enabled$/, function () {
    tradeBlockPage.checkChart()
});


Then(/^click on button sell$/, function () {
    tradeBlockPage.clickOnSellBtn()
});

Then(/^click on (.*) button$/, function (name) {
    tradeBlockPage.clickOnMainBtn(name)
});

Then(/^check favorite button is enabled$/, function () {
    tradeBlockPage.checkFavoriteBtn()
});

Then(/^type (\d+) into amount input$/, function (amount) {
    tradeBlockPage.typeAmountInput(amount)
});

Then(/^try to click on mines amount button$/, function () {
    tradeBlockPage.clickOnMinesAmountBtn()
});

Then(/^try to click on plus amount button$/, function () {
    tradeBlockPage.clickOnPlusAmountBtn()
});

Then(/^check amount block$/, function () {
    tradeBlockPage.checkAmountBlock()
});

Then(/^check initial margin is enabled$/, function () {
    tradeBlockPage.checkInitialMarginText()
});

Then(/^check (.*) block is enabled$/, function (name) {
    tradeBlockPage.checkBlockName(name)
});

Then(/^open (.*) block$/, function (name) {
    tradeBlockPage.clickOnSlider(name)
});

Then(/^check order type detail$/, function () {
    tradeBlockPage.checkOrderType()
});

Then(/^check and insert (.*) into order rate input$/, function (rate) {
    tradeBlockPage.clickOrderRateMinusBtn()
    tradeBlockPage.typeOrderRateInput(rate)
    tradeBlockPage.clickOrderRatePlusBtn()
    tradeBlockPage.checkWhereRateIs()
});

Then(/^close (.*) block$/, function (name) {
    tradeBlockPage.clickOnSlider(name)
});

Then(/^check block is disabled$/, function () {
    tradeBlockPage.checkSwipeMenuIsDisabled()
});

Then(/^check and insert (.*) into est\. input$/, function (rate) {
    tradeBlockPage.clickOrderRateMinusBtn()
    tradeBlockPage.typeOrderRateInput(rate)
    tradeBlockPage.clickOrderRatePlusBtn()
    tradeBlockPage.checkEstInput()
});

Then(/^check est. loss details$/, function () {
    tradeBlockPage.checkEstLossDetails()
});

Then(/^check est\. profit details$/, function () {
    tradeBlockPage.checkEstProfitDetails()
});

Then(/^check Buy button is enabled$/, function () {
    tradeBlockPage.checkBuyBtn()
});

Then(/^click Buy button$/, function () {
    tradeBlockPage.clickOnBuyBtn()
});

Then(/^check (.*) button$/, function () {
    tradeBlockPage.checkMainBtn()
});

Then(/^check Sell button is enabled$/, function () {
    tradeBlockPage.checkSellBtn()
});

Then(/^click Sell button$/, function () {
    tradeBlockPage.clickOnSellBtn()
});

Then(/^change open order price$/, function () {
    tradeBlockPage.changeOpenPrice()
});