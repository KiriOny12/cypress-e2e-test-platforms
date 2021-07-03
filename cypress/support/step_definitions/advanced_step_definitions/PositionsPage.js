import {Then} from "cypress-cucumber-preprocessor/steps"
import {positionsPage} from "../../platforms_pages/advanced_pages/PositionsPage";
import {basePage} from "../../platforms_pages/base_pages/BasePage";
import {notifications} from "../../platforms_pages/advanced_pages/Notifications";

Then(/^check asset top$/, function () {
    positionsPage.checkDirectionIcon()
    positionsPage.checkAssetIcon()
    positionsPage.checkPnlDetains()
});
Then(/^open position details$/, function () {
    positionsPage.clickOnPositionsDetails()
});

Then(/^check positions details menu$/, function () {
    positionsPage.checkPositionsDetails()
    positionsPage.checkClosePositionBtn()
});

Then(/^click (.*) in position details$/, function (text) {
    positionsPage.clickOnClosePositionsBtn(text)
});

Then(/^click on close position$/, function () {
    positionsPage.clickOnClosePositionsBtn()
});

Then(/^open position details with (.*) direction$/, function (direction) {
    positionsPage.openPositionDetailByDirection(direction)
});

Then(/^switch to (.*) tab$/, function (text) {
    notifications.closeAnotherNotificationIfItEnabled();
    positionsPage.clickOnPageTab(text)
    basePage.wait(3000)
});

Then(/^check orders details menu$/, function () {
    positionsPage.checkOpenRateText()
    positionsPage.checkWhereRateIs()
    positionsPage.checkWhereRateInput()
});

Then(/^check order top$/, function () {
    positionsPage.checkDirectionIcon()
    positionsPage.checkAssetIcon()
});

Then(/^confirm rate$/, function () {
    positionsPage.confirmRate()
});

Then(/^decline rate$/, function () {
    positionsPage.cancelRate()
    basePage.wait(1500)
});

Then(/^check displayed button confirm rate$/, function () {
    positionsPage.checkConfirmRateBtn()
});

Then(/^check trading history position is enabled$/, function () {
    positionsPage.checkTradingHistoryPosition()
});

Then(/^check trading history details$/, function () {
    positionsPage.checkTradingHistoryPositionDetail()
});