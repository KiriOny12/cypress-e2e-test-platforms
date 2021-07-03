Feature: Switch to demo account

  Background:
    Given account advanced page gloffix
    Then log in to the gloffix
    Then check you are authorization on real
    Then close another notification
    Then wait 4000 sec
    Then click on Switch to demo
    Then check you are on demoadvanced page
    Then check you are authorization on demo


  @linksTest
  Scenario: Check demo links
    Then go to account main tab
    Then click on account settings page
    Then check you are on /account-settings page
    Then check account settings title
    #check "Change Password" link
    Then check active Change Password option
    Then open Change Password setting page
    #check "Verification" link
    Then check active Verification option
    Then click on Verification menu
    Then wait 4000 sec
    Then check Verification title
    Then get iframe link
    #go back to main page
    Then close menu
    Then check you are on /account-settings page
    Then close menu
    #check logo link
    Then go to Trading main tab
    Then check logo
    Then click on logo and check response


  @gui
  Scenario: Check common functions of demo platform
    Then go to account main tab
    Then check Logout button is enabled
    Then check "platform settings" button is enabled
    Then check "account settings" button is enabled
    Then see your name
    And your account type
    Then check Demo icon
    Then check "Switch to Real Account" button is enabled
    #Check Account Type menu on Demo version
    Then click on account settings page
    Then check you are on /account-settings page
    Then check account settings title
    Then check active Account Type option
    Then check account type icon
    Then click on Account Type menu
    Then check Account Type title in menu
    Then check account type icon in menu
    Then check Current Trader Points info
    Then check Required T. Points info
    Then check points amount is present
    Then click on button close
    Then close menu
    #Check platform settings on Demo version
    Then click on platform settings page
    Then check you are on /platform-settings page
    Then click on Notifications menu
    Then check Notifications title in menu
    Then check menu view
    Then click on button close
    Then click on Balance options menu
    Then check Balance options title in menu
    Then check menu view
    Then click on button close
    Then Language menu should have text English
    Then click on Language menu
    Then choose Simplified Chinese language
    Then choose العربية language
    Then choose Español language
    Then choose Deutsch language
    Then choose English language
    Then click on button close
    Then close menu
    # Check /wallet page elements
    Then go to wallet main tab
    Then check wallet footer icon
    Then see wallet icon
    Then see balance amount
    Then see balance text
    Then see deposit button
    Then see available amount for withdrawal text
    Then check wallet list option, it should have length 6


  @functionalTest
  Scenario: Check common functions of demo platform
    #Filter asset list on Demo version
    Then go to All subtab
    Then check All tab is active
    Then click on search button in header
    Then enter A into search input
    Then check asset list is not empty
    Then clear search input
    Then enter ` into search input
    Then check asset list is empty
    Then close search input
    #Add and remove  asset from  favorite on Demo version
    Then add asset to Favorite
    Then see Successfully added to favorites notification
    Then close notification
    Then remove asset from Favorite
    Then see Successfully removed from favorites notification
    Then close notification



