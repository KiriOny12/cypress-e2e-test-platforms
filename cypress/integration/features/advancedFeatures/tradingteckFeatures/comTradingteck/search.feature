Feature:  Search


  Background:
    Given account advanced page comTradingteck


  @functions
  Scenario: Filter asset list
    Then go to Trading main tab
    Then click on search button in header
    Then enter A into search input
    Then check asset list is not empty
    Then clear search input
    Then enter ` into search input
    Then check asset list is empty
    Then close search input
    Then check search input is disabled
