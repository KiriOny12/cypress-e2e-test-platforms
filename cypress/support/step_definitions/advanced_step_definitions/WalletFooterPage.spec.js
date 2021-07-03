import {Then} from "cypress-cucumber-preprocessor/steps"
import {walletFooterPage} from "../../platforms_pages/advanced_pages/WalletFooterMenu";

Then(/^drag and drop$/, function () {
    walletFooterPage.dropMenu()
});