export class SettingsPage {

   checkTitle(titleText){
       cy.get('.asset-name')
           .contains( titleText)
   }

   checkOption(optionName){
       cy.get('.m-title')
           .contains( optionName)
           .toMatchImageSnapshot()
   }

   checkAccountTypeIcon (){
       cy.get('.account-badge')
           .contains( /\w+/)
   }

    checkAccountTypeInAccountMenu (){
        cy.get('.account-badge').should('have.length',2)
            .last()
            .contains( /\w+/)
    }

   checkOptionTitle(optionsTitle){
       cy.get('.m-select-title')
           .contains( optionsTitle)
   }

   checkPointInfo(text){
       cy.get('.m-select-col')
           .contains(text)
           .toMatchImageSnapshot()
   }

   checkPointAmount(){
       cy.get('.m-select-col')
           .find('h3')
           .first()
           .contains(/\d+/g)
       cy.get('.m-select-col')
           .find('h3')
           .last()
           .contains(/\d+/g)
   }

   clickOnCloseButton(){
       cy.get('.icon-38')
           .click()
   }

   clickOnMenu(name){
       cy.get('.m-select.row-select', {timeout:5000})
           .contains(name, {timeout:5000})
           .click({timeout:2000})
   }

   disabledNotificationValue(){
       cy.get('.check')
           .find('.icon-45')
           .first()
           .click({force:true})
           .toMatchImageSnapshot()
   }

   activateNotificationValue(){
       cy.get('.check')
           .find('.icon-44')
           .last()
           .click({force:true})
           .toMatchImageSnapshot()
   }

   checkWrapperPage(){
       cy.get('.wrapper-page')
           .toMatchImageSnapshot()
   }

   chooseLanguage(lang){
       cy.get('.m-select-li')
           .contains(lang)
           .click()
   }

   checkOptionsTitle(name){
       cy.get('.m-title')
           .contains(name, {timeout:5000})
   }

    openSetting(name){
        cy.get('.m-title')
            .contains(name)
            .parent()
            .should('have.attr', 'href')
            .then((href) => {
                cy.request(href).then((resp) => {
                    expect(resp.status).to.eq(200)
                })
            })
    }

   getIframeLink(){
       cy.get('iframe')
           .should('have.attr', 'src')
           .then((src) => {
               cy.request(src)
                   .then((resp) => {
                       expect(resp.status).to.eq(200)
                   })
           })
   }

   checkVerificationPage(){
       cy.get('.verification-page')
           .toMatchImageSnapshot()
   }


   turnOffBalanceOption(name){
       cy.get('.text', {timeout:5000})
           .contains(name, {timeout:5000})
           .parent()
           .find('.slider')
           .click({force: true})

   }

   shouldBeEnText(lang){
       cy.get('.m-text')
           .contains(lang)
   }

   closeMenu(){
       cy.get('.icon-40')
           .click()
   }
}

export const settingsPage = new SettingsPage()