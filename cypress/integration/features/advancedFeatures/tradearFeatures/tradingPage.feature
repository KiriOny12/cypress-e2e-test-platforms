Feature:  Trading Page


  Background: Go to account page as authorization user
    Given account advanced page tradear
    Then log in to the tradear
    Then check you are authorization on real
    Then close another notification
    Then go to Operación main tab
    Then switch to Todo tab


  @functions
  Scenario: Check asset list on different instruments and markets
  # check asset list in CFD, Acciones
    Then check instrument, it should be CFD
    Then check market, it should be Acciones
    Then check asset list is not empty
  # check asset list in CFD, Materias primas
    Then check instrument, it should be CFD
    Then check market, it should be Materias primas
    Then check asset list is not empty
  # check asset list in CFD, Índices
    Then check instrument, it should be CFD
    Then check market, it should be Índices
    Then check asset list is not empty
  # check asset list in Forex, Divisas
    Then check instrument, it should be Forex
    Then check market, it should be Divisas
    Then check asset list is not empty
  # check asset list in Forex, Pequeños
    Then check instrument, it should be Forex
    Then check market, it should be Pequeños
    Then check asset list is not empty
  # check asset list in Forex, Exóticos
    Then check instrument, it should be Forex
    Then check market, it should be Exóticos
    Then check asset list is not empty
  # check asset list in Criptomoneda, Criptomoneda
    Then check instrument, it should be Criptomoneda
    Then check market, it should be Criptomoneda
    Then check asset list is not empty