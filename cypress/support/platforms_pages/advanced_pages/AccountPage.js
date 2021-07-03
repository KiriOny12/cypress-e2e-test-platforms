export class AccountPage {


    checkID(){
        cy.get('.m-acc', {timeout:5000})
            .contains( /\w+/)
    }

    checkName(){
        cy.get('.m-user', {timeout:5000})
            .contains( /\w+/)
    }

    checkAccountType(){
        cy.get('div.type.gold', {timeout:5000})
            .contains( /\w+/)
    }

    checkRealFlag(){
        cy.get('div.label.real', {timeout:5000})
            .toMatchImageSnapshot()
    }

    getALink(linkText){
        cy.get('a[href]')
            .contains(linkText)
            .toMatchImageSnapshot()
    }

    getLogoutButton(){
        cy.get('.logOut', {timeout:5000})
            .toMatchImageSnapshot()
    }

    getButton(buttonName){
        cy.contains(buttonName, {timeout:4000})
            .toMatchImageSnapshot()
    }

    checkBalanceDetails(text){
        cy.get('.text')
            .contains(text)
            .toMatchImageSnapshot()
        cy.get('.count')
            .contains(/\w+/)
    }


    logout () {
        cy.get('.logOut')
            .should('have.attr', 'href')
            .then((href) => {
                cy.request(href)
                    .then((resp) => {
                        expect(resp.status).to.eq(200)
                })
            })
    }

    clickOnElement(buttonName){
        cy.contains( buttonName, {timeout:5000})
            .click()
    }

    clickOnMenuTab(link){
        cy.get('[href='+link+']')
            .click()
    }


    getHref(buttonName) {
        cy.contains(buttonName)
            .should('have.attr', 'href')
            .then((href) => {
                cy.request(href)
                    .then((resp) => {
                        expect(resp.status).to.eq(200)
                    })
            })
    }

    clickOnDemoLink(text){
        cy.get('.m-person-top')
            .should('contain.text', text)
            .click()
    }

    checkAccountGreenPoint(){
        cy.get('.green', {timeout:10000})
            .should('have.css', 'background-color', 'rgb(8, 201, 120)')
    }

    checkWithdrawalButton(){
        cy.get('.m-btn_outline')
            .contains('Withdrawal')
            .toMatchImageSnapshot()
    }

    goToWithdrawalPage(){
        cy.get('.m-btn_outline')
            .contains('Withdrawal')
            .should('have.attr', 'href')
            .then((href) => {
                cy.request(href)
                    .then((resp) => {
                        expect(resp.status).to.eq(200)
                    })
            })
    }

    checkDemoIcon(){
        cy.get('.label.demo')
            .toMatchImageSnapshot()
    }

}
export const accountPage = new AccountPage()