export class TradingPage {

    getAssetWithActiveFavoriteButton(){
        cy.get('.asset-top')
            .find('.favorite')
            .first()
    }

    getSearchButton(){
        cy.get('.search-btn')
            .toMatchImageSnapshot()
    }

    clickOnSearchButton(){
        cy.get('.search-btn', {timeout:5000})
            .click()
    }

    clickOnSearchIcon(){
        cy.get('.icon-34').click()
    }

    checkSearchInput(){
        cy.get('.input-search')
            .toMatchImageSnapshot()

    }

    checkSearchInputCloseBtn(){
        cy.get('.search-btn.icon-38')
            .toMatchImageSnapshot()

    }

    closeSearchInput(){
        cy.get('.search-btn.icon-38')
            .click()
    }

    fillSearchInput(text){
        cy.get('.input-search', {timeout:5000})
            .find('input', {timeout:5000})
            .type(text, {timeout:5000})
            .then((el) => {
                if (el.val() !== text) {
                    cy.get('.input-search', {timeout:5000})
                        .find('input', {timeout:5000})
                        .clear()
                        .type(text, {timeout:5000})
                }
            })
    }


    clearSearchInput(){
        cy.get('.input-search')
            .find('input')
            .clear()
    }

    checkAssetListIsNotEmpty(){
        cy.get('.asset', {timeout:5000})
            .should('not.be.enabled')
    }

    checkAssetListIsEmpty(){
        cy.get('.assets-list', {timeout:5000})
            .should('not.be.visible', '.asset')
    }

    checkSearchInputIsDisabled(){
        cy.get('.input-search')
            .should('not.be.visible', 'input')
    }

    clickOnOpenAssetDetailButton(){
        cy.get('.icon-31')
            .first()
            .click()
        cy.get('.slide-toggle-enter-done')
    }

    clickOnAssetTradingHoursButton(){
        cy.get('.icon-57')
            .click()
        cy.get('.m-select-list')
            .find('.m-select-title')
            .contains('Trading hours')
    }

    removeFavoriteAsset(){
        cy.get('.icon-30', {timeout:10000})
            .first()
            .click()
            .toMatchImageSnapshot()
    }

    addFavoriteAsset(){
        cy.get('.icon-29', {timeout:10000})
            .first()
            .click()
            .toMatchImageSnapshot()
    }

    checkAssetDetails(){
        cy.get('.asset-detail-item')
            .should('have.length', 10)
            .find('span')
            .should('have.length',10)
            .contains( /\w+/)
        cy.get('.asset-detail-item').find('p')
            .should('have.length',10)
            .contains( /\w+/)
    }

    checkTradingHoursDetails(){
        cy.get('.m-select-li')
            .find('.m-select-title')
            .contains(/\w+/)
        cy.get('.m-select-li')
            .find('.m-select-hours')
            .find('span')
            .contains(/\w+/)
    }

    goToTab(name){
        cy.get('.m-tab')
            .contains(name)
            .click()
    }

    clickOnActiveAsset(){
        cy.get('.asset', {timeout:5000})
            .first()
            .click()
    }

    clickOnDeactivateAsset(){
        cy.get('.asset.disable')
            .click()
    }

    chooseAndClickOnFirstAssetFromList(){
        cy.get('.assets-list', {timeout:5000})
            .find('.asset', {timeout:5000})
            .first()
            .click()
    }

    setInstrument(instrument) {
            cy.get('.m-select')
                .first()
                .find('.m-text')
                .then((el) => {
                    if (el.text() !== instrument) {
                        cy.get('.m-select')
                            .first()
                            .click()
                        cy.get('.m-select-ul')
                            .find('.m-select-li')
                            .contains(instrument)
                            .click()
                        cy.get('.m-select-close')
                            .click()
                        cy.wait(1000)
                        cy.get('.m-select')
                            .first()
                            .find('.m-text', {timeout: 10000})
                            .should('have.text', instrument, {timeout: 10000})
                    }
                })
    }


        setMarket(market) {

                cy.get('.m-select')
                    .last()
                    .find('.m-text')
                    .then((el) => {
                        if (el.text() !== market) {
                            cy.get('.m-select')
                                .last()
                                .click()
                            cy.get('.m-select-ul')
                                .find('.m-select-li')
                                .contains(market)
                                .click()
                            cy.get('.m-select-close')
                                .click()
                            cy.wait(1000)
                            cy.get('.m-select')
                                .last()
                                .find('.m-text', {timeout: 6000})
                                .should('have.text', market)
                        }
                    })
        }


        clearOpenPositions(){
            cy.wait(3000)
            cy.get('body').then(($body) =>{
                if($body.find('.position').length > 0){
                    cy.get('.toggler').each(($el) => {
                        cy.wrap($el).click()
                        cy.get('[type="button"]', {timeout:2000}).click()
                        cy.get('.notification-close').each(($el) => {
                            cy.wrap($el).click()
                        })
                        cy.wait(4000)
                    })
                    }
                })
        }
}

export const tradingPage = new TradingPage()