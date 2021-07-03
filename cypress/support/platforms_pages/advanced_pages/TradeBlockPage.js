export class TradeBlockPage {

      checkGoBackBtn(){
          cy.get('.go-back-button')
              .toMatchImageSnapshot()
      }

      clickOnGoBackBtn(){
          cy.get('.go-back-button')
              .click()
      }

      checkAssetNameTitle(){
          cy.get('.asset-name')
              .contains( /\w+/)
      }

      checkChart(){
          cy.get('#tv_chart_container')
              .should('be.visible')
              .and('not.be.disabled')
      }

      checkSellBtn(){
          cy.get('.m-btn_sell')
              .should(
                  'have.css',
                  'background-color',
                  'rgb(234, 71, 71)'
              )
              .find('span')
              .first()
              .contains('Sell')
              .toMatchImageSnapshot()

          cy.get('.m-btn_sell')
              .find('span')
              .last()
              .contains(/\d+/g)
      }

      clickOnSellBtn(){
          cy.get('.m-btn_sell')
              .click()
      }

      checkBuyBtn(){
          cy.get('.m-btn_buy')
              .should(
                  'have.css',
                  'background-color',
                  'rgb(8, 201, 120)'
              )
              .find('span')
              .first()
              .contains('Buy')
              .toMatchImageSnapshot()

          cy.get('.m-btn_buy')
              .find('span')
              .last()
              .contains(/\d+/g)
      }

     clickOnBuyBtn(){
        cy.get('.m-btn_buy')
            .click()
     }

     checkMainBtn(){
         cy.get('.m-btn_main')
             .should('have.css', 'background-color', 'rgb(69, 141, 249)')
             .toMatchImageSnapshot()
     }

     clickOnMainBtn(name){
          cy.get('.m-btn_main')
              .contains(name)
              .click()
     }

     checkAmountBlock(){
          cy.get('.m-block_amount')
              .toMatchImageSnapshot()
     }

     clickOnMinesAmountBtn(){
          cy.get('.icon-41')
              .click()
     }

     clickOnPlusAmountBtn(){
          cy.get('.icon-42')
              .click()
     }

     checkInitialMarginText(){
          cy.get('.field-sub-text')
              .contains('Initial Margin')
              .toMatchImageSnapshot()
     }

     checkBlockName(name){
          cy.get('span.text')
              .contains(name)
     }

     clickOnSlider(name){
         cy.get('.m-switch')
             .filter(':contains('+name+')')
             .find('.slider')
             .click({force:true})
     }


     checkFavoriteBtn(){
          cy.get('.header-control-button')
              .should('be.visible')
     }

     typeAmountInput(amount){
          cy.get('input[type="text"]')
              .clear()
              .type(amount)
     }

     checkOrderType(){
          cy.get('.row')
              .first()
              .toMatchImageSnapshot()
     }

     checkWhereRateIs() {
          cy.get('.with-controlled-popup')
     }

     clickOrderRateMinusBtn(){
          cy.get('.input-plus-minus')
              .find('.icon-41')
              .click()
     }

    clickOrderRatePlusBtn(){
        cy.get('.input-plus-minus')
            .find('.icon-42')
            .click()
    }

    typeOrderRateInput(rate){
        cy.get('.input-plus-minus')
            .find('input[type="text"]')
            .clear()
            .type(rate)
    }

    checkSwipeMenuIsDisabled(){
          cy.get('.swipe-enter-done')
              .should('have.length', 0)
    }

    checkEstInput(){
          cy.get('.input-plus-minus')
              .scrollIntoView()
    }

    checkEstLossDetails(){
          cy.get('.label')
              .should('contain.text', 'Est. loss')
              .find('.danger')
              .should('have.css', 'color', 'rgb(234, 71, 71)')
    }

   checkEstProfitDetails(){
       cy.get('.label')
           .scrollIntoView()
           .should('contain.text', 'Est. profit')
           .find('.success')
           .should('have.css', 'color', 'rgb(8, 201, 120)')
   }

    changeOpenPrice(){
           cy.get('input[type="text"]')
               .last()
               .invoke('attr', 'value')
               .then((el) => {
                   let attrValue = el.replace(',', '')
                   let value = parseFloat(attrValue) + 0.01;
                   cy.get('input[type=text]')
                       .last()
                       .clear()
                       .type(value.toString())
               })
    }




}

export const tradeBlockPage = new TradeBlockPage()