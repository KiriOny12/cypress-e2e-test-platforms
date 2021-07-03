import {Then} from "cypress-cucumber-preprocessor/steps"
import {notifications} from "../../platforms_pages/advanced_pages/Notifications";
import {basePage} from "../../platforms_pages/base_pages/BasePage";


Then(/^see (.*) notification$/,  (text) => {
    notifications.getNotificationSuccessMessage(text)
});

Then(/^close notification$/, function () {
    notifications.closeNotification()
});

Then(/^check error message is disabled$/, function () {
    notifications.checkNotificationErrorIsDisabled()
});


Then(/^close another notification$/, function () {
    basePage.wait(3000)
    notifications.closeAnotherNotificationIfItEnabled();
});