Feature:  Check filtering

  Background:
    Given account advanced page 1niro


   @functions
   Scenario: Filter asset list
     Then go to Trading main tab
     Then switch to All tab
     Then click on search button in header
   # Check asset list is not empty after filtering
     Then enter A into search input
     Then check asset list is not empty
     Then clear search input
   # Check asset list is empty after filtering
     Then enter ` into search input
     Then check asset list is empty
     Then close search input
     Then check search input is disabled
