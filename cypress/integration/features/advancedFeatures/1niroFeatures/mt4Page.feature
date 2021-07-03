@ignore
Feature: MT4 Page


  @ignorelinksTest
  Scenario: User have account on MT4
    Given account advanced page kievphp
    Then log in to the kievphp_mt
    Then check you are authorization on real
    Then close another notification
    Then click on Meta Trader 4 page
    Then check you are on /meta-trader page
    Then check Meta Trader 4 title
    Then check mt4 page
    Then check app mt4 link
    Then check web mt4 link


  @ignorefunctionalTest
    Scenario: User haven`t account on MT4
      Given account advanced page kievphp
      Then log in to the kievphp_without_MT
      Then check you are authorization on real
      Then click on Meta Trader 4 page
      Then check you are on /meta-trader page
      Then check mt4 page


  @ignorefunctionalTest
    Scenario: User haven`t account on MT4 and have open trade
      Given account advanced page kievphp
      Then log in to the kievphp_without_MT
      Then check you are authorization on real
      Then go to Trading main tab
      Then switch to All tab
      Then close another notification
      Then check instrument, it should be Crypto
      Given first active asset from list and tap on it
      Then check you are on /asset_id page
      Then close another notification
      Then click Buy button
      Then click on Open position button
      Then see Position was opened notification
      Then close notification
      Then go to Account main tab
      Then click on Meta Trader 4 page
      Then check you are on /meta-trader page
      Then check mt4 page


