Feature:  Trading Page


  Background: Go to account page as authorization user
    Given account advanced page coTradingteck
    Then log in to the coTradingteck
    Then check you are authorization on real
    Then close another notification
    Then go to Trading main tab
    Then switch to All tab


  @functions
  Scenario: Check asset list on different instruments and markets
  # check asset list in CFD, Commodities
    Then check instrument, it should be CFD
    Then check market, it should be Commodities
    Then check asset list is not empty
  # check asset list in CFD, Stocks
    Then check instrument, it should be CFD
    Then check market, it should be Stocks
    Then check asset list is not empty
  # check asset list in CFD, Indices
    Then check instrument, it should be CFD
    Then check market, it should be Indices
    Then check asset list is not empty
  # check asset list in Forex, Majors
    Then check instrument, it should be Forex
    Then check market, it should be Majors
    Then check asset list is not empty
  # check asset list in Forex, Minors
    Then check instrument, it should be Forex
    Then check market, it should be Minors
    Then check asset list is not empty
  # check asset list in Forex, Exotic
    Then check instrument, it should be Forex
    Then check market, it should be Exotic
    Then check asset list is not empty
  # check asset list in Crypto, Crypto
    Then check instrument, it should be Crypto
    Then check market, it should be Crypto
    Then check asset list is not empty
  # check asset list in ETFs, ETFs
    Then check instrument, it should be ETFs
    Then check market, it should be ETFs
    Then check asset list is not empty
  # check asset list in Bonds, Bonds
    Then check instrument, it should be Bonds
    Then check market, it should be Bonds
    Then check asset list is not empty