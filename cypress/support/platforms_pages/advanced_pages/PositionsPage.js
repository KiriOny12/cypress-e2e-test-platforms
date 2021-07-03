export class PositionsPage {

    clickOnPageTab(name){
        cy.get('.m-tab')
            .contains(name)
            .click()
    }

    openPositionDetailByDirection(direction){
        if(direction === 'Buy'){
            cy.get('.icon-23')
                .parent('.asset-top')
                .find('.toggler')
                .first()
                .click();
        }else{
            cy.get('.icon-24')
                .parent('.asset-top')
                .find('.toggler')
                .first()
                .click();
        }
    }


    checkDirectionIcon(){
        cy.get('.asset-col.direction', {timeout:5000})
            .should('be.visible')
    }


    checkAssetIcon(){
        cy.get('.asset-col.preview')
            .find('img')
            .should('be.visible')
    }


    checkPnlDetains(){
        cy.get('.asset-col.total')
            .contains(/\w+/)
    }


    clickOnPositionsDetails(){
        cy.get('.toggler')
            .first()
            .click()
    }


    checkEstPositionsDetails(){
        cy.get('.slide-toggle-enter-done')
            .find('.swipe-enter-done')
            .should('have.length',2)
    }


    checkPositionsDetails(){
        cy.get('.panel-info')
            .find('.panel-info-item')
            .should('have.length',6)
    }


    checkClosePositionBtn(){
        cy.get('button')
            .should('have.css', 'color', 'rgb(234, 71, 71)')
    }


    clickOnClosePositionsBtn(){
        cy.get('[type="button"]', {timeout:2000})
           .click()
    }


    checkOpenRateText(){
        cy.get('.text.solo', {timeout:5000})
            .should('have.text', 'Open Rate')
    }


    checkWhereRateIs(){
        cy.get('.with-controlled-popup')
            .find('.label')
            .toMatchImageSnapshot()
    }


    checkWhereRateInput(){
        cy.get('.input-plus-minus')
            .should('be.visible')
    }


    checkConfirmRateBtn(){
        cy.get('.controls-bar.swipe-enter-done')
            .toMatchImageSnapshot()
    }


    confirmRate(){
        cy.get('.m-btn_main')
            .click()
    }


    cancelRate(){
        cy.get('.m-btn_outline')
            .first()
            .click()
    }


    checkTradingHistoryPosition(){
        cy.get('.open-position.trading-histoty')
            .first()
    }


    checkTradingHistoryPositionDetail(){
        cy.get('.panel-info-item')
            .should('have.length', 8)
    }

}

export  const  positionsPage = new PositionsPage()