export class BasePage{

    open(url){
        cy.visit(url)
    }

    checkUrl(url){
        cy.url()
            .should('include', url)

    }

    wait(time){
        cy.wait(time)
    }

    pause(){
        cy.pause()
    }

    reloadPage(){
        cy.reload()
    }
}

export const basePage = new BasePage()