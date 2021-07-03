
export class BasePageAdvanced {

    viewportMobile(){
        cy.viewport('iphone-x')
    }

    openSiteTabletView(){
        cy.viewport('ipad-2')
        cy.visit(url, {
            onBeforeLoad(win) {
                Object.defineProperty(win.navigator, 'language', {
                    value: 'en'
                })
            }
        })
    }


    openSiteDesktopView(url){
        cy.viewport('macbook-13')
        cy.visit(url, {
            onBeforeLoad(win) {
                Object.defineProperty(win.navigator, 'language', {
                    value: 'en'
                })
            }
        })
    }


    openSiteMobileView(url) {
        cy.viewport('iphone-x')
        cy.visit(url, {
            onBeforeLoad(win) {
                Object.defineProperty(win.navigator, 'language', {
                    value: 'en'
                })
            }
        })
    }


    openAdvancedPage(page, url){
        cy.fixture("wls.json").then((wl) => {
            cy.viewport('iphone-x')
            cy.visit(wl[page][url], {
                onBeforeLoad(win) {
                    Object.defineProperty(win.navigator, 'language', {
                        value: 'en'
                    })
                }
            })
        })
    }


    logo(){
        cy.get('[alt="logo"]', {timeout:5000})
            .toMatchImageSnapshot()
    }

    clickOnLogo(){
        cy.get('[alt="logo"]')
            .parent()
            .should('have.attr', 'href')
            .then((href) => {
                cy.request(href).then((resp) => {
                    expect(resp.status).to.eq(200)
                })
            })
    }


    testViewport(){
            const sizes = ['iphone-x', 'ipad-2', [1024, 768]]
            sizes.forEach((size)=>{
                if (Cypress._.isArray(size)){
                    cy.viewport(size[0], size[1])
                } else {
                    cy.viewport('iphone-x')
                }
            })
    }

    checkActiveFooterMenu(text){
        cy.get('.m-item.active').should('contain.text', text)
            .toMatchImageSnapshot()
    }

    goToMainTab(text){
        cy.get('.m-item')
            .contains(text, {timeout:5000})
            .click({force:true})
    }

    checkNotificationCount(){
        cy.get('.notification-count', {timeout:8000})
            .should("have.css",'background-color','rgb(69, 141, 249)')
    }

    checkActiveTabByText(text){
        cy.get('.title')
            .contains(text, {timeout:5000})
            .parent()
            .toMatchImageSnapshot()
    }


    authorization(name){
        cy.fixture("users.json").then((user) => {
            cy.get('[type="email"]', {timeout:20000})
                .type(user[name].username)
            cy.get('[type="password"]')
                .type(user[name].password)
        })
        cy.get('button')
            .click()
    }


}

export const basePageAdvanced = new BasePageAdvanced()