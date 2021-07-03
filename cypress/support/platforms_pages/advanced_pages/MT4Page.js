export class MT4Page {


    checkSpan(){
        cy.get(".wrapper-page", {timeout:5000})
            .toMatchImageSnapshot()
    }

    checkAppMT4Link (){
        cy.get('li')
            .contains("App MT4")
            .should('have.attr', 'href')
            .then((href) => {
                cy.request(href)
                    .then((resp) => {
                        expect(resp.status).to.eq(200)
                    })
            })
    }

    checkWebMT4Link (){
        cy.get('li')
            .contains("Web MT4")
            .should('have.attr', 'href')
            .then((href) => {
                cy.request(href)
                    .then((resp) => {
                        expect(resp.status).to.eq(200)
                    })
            })
    }




}

export const mt4Page = new MT4Page()