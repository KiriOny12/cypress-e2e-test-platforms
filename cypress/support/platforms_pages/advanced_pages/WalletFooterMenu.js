export class WalletFooterMenu{

    dropMenu(){


        cy.get('.content-row.opened')
            .trigger("mouseup")
        cy.wait(5000)





    }

}

export const walletFooterPage = new WalletFooterMenu()