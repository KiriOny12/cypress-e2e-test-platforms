import {Then} from "cypress-cucumber-preprocessor/steps"
import {walletPage} from "../../platforms_pages/advanced_pages/WalletPage";


Then(/^see wallet icon$/, function () {
    walletPage.getIcon()
});

Then(/^see balance amount$/, function () {
    walletPage.getBalanceAmount()
});

Then(/^see balance text$/, function () {
    walletPage.getBalanceTitle()
});

Then(/^see deposit button$/, function () {
    walletPage.getDepositButton()
});

Then(/^see available amount for withdrawal text$/, function () {
    walletPage.getAvailableForWithdrawalText()
});

Then(/^see withdrawal link$/, function () {
    walletPage.getWithdrawalLink()
});

Then(/^click on button Deposit$/, function () {
    walletPage.clickOnBtnDeposit()
});

Then(/^check wallet list option, it should have length (.*)$/, function (number) {
    walletPage.checkWalletList(number)
});