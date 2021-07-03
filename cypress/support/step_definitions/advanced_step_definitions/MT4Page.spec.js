import {Then, And, Given} from "cypress-cucumber-preprocessor/steps"
import {mt4Page} from "../../platforms_pages/advanced_pages/MT4Page";



Then(/^check mt4 page$/, function () {
    mt4Page.checkSpan()
});

Then(/^check app mt4 link$/, function () {
    mt4Page.checkAppMT4Link()
});

Then(/^check web mt4 link$/, function () {
    mt4Page.checkWebMT4Link()
});
