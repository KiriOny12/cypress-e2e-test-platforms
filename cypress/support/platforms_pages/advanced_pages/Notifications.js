export class Notifications {


    getNotificationSuccessMessage(text){
        cy.get('.notification.success', {timeout:10000})
            .find('.notification-content', {timeout:10000})
            .should('have.text', text)
    }

    checkNotificationErrorIsDisabled(){
        cy.get('.notification.error')
            .should('have.length', 0)
    }


    closeNotification(){
        cy.get('.notification-close')
            .click()
        cy.get('.notification')
            .should('have.length', 0)
    }


    closeAnotherNotificationIfItEnabled(){
        cy.get('body').then(($body) =>{
            if($body.find('.notification').length > 0){
                cy.get('.notification-close')
                    .each(($el) => {
                        cy.wrap($el).click()
                        cy.wait(2000)
                })
            }
        })
    }
}

export const notifications = new Notifications()