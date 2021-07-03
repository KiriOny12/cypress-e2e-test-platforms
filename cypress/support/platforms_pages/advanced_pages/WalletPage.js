export class WalletPage {

    getIcon(){
        cy.get('.wallet-icon')
            .toMatchImageSnapshot()
    }

    getBalanceAmount(){
        cy.get('.wallet-title')
            .contains(/\w+/)
    }

    getBalanceTitle(){
        cy.get('.wallet-subtitle')
            .contains('Balance')

    }

    getDepositButton(){
        cy.get('.m-btn_main.wallet-action').contains('Deposit')
            .toMatchImageSnapshot()
    }

    getAvailableForWithdrawalText(){
        cy.get('.wallet-footnote')
            .contains(/\w+/)
    }

    getWithdrawalLink(){
        cy.get('a')
            .contains('Withdrawal')
            .toMatchImageSnapshot()
    }

    clickOnBtnDeposit(){
        cy.get('.wallet-action')
            .contains('Deposit')
            .click({force:true})
    }

    checkWalletList(number){
        cy.get('.content-row.opened', {timeout:5000})
            .find('.content-item')
            .should('have.length', number)
    }

}

export const walletPage = new WalletPage()