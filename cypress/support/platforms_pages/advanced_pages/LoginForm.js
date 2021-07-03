export class LoginForm {

    typeEmail(email){
        cy.get('[type="email"]', {timeout:15000})
            .type(email)
            .should('have.value', email)
    }

    typePassword(password) {
        cy.get('[type="password"]')
            .type(password)
            .should('have.value', password)
    }

    uncheckRememberMe(){
        cy.get('#remember')
            .uncheck({force: true})
        cy.get('.slider')
            .toMatchImageSnapshot()
    }

    checkRememberMe(){
        cy.get('#remember')
            .check({force: true})
            .toMatchImageSnapshot()
    }

    checkOnCreateAccountLink(){
        cy.get('.link')
            .contains('Don\'t have an account yet?')
            .toMatchImageSnapshot()
    }

    checkLoginButton(){
        cy.get('button')
            .toMatchImageSnapshot()
    }

    clickOnLoginButton(){
        cy.get('button')
            .click()
    }

    checkErrorMessageInvalidLoginOrPassword(){
        cy.get('.error_message')
            .contains('Invalid login or password')
            .toMatchImageSnapshot()
    }


    checkElementIsBlur (elementName){
        cy.get('[type="'+elementName+'"]')
            .focus()
            .blur()
            .toMatchImageSnapshot()
    }

    checkErrorMessageEnterPassword(){
        cy.get('.error_message')
            .contains('Enter password')
            .toMatchImageSnapshot()
    }

    checkForgotYourPasswordLink(){
        cy.get('.link')
            .contains('Forgot your password?')
            .toMatchImageSnapshot()
    }

    showPassword(){
        cy.get('.showPassword.icon-35')
            .click({force:true})
            .toMatchImageSnapshot()
    }

    hidePassword(){
        cy.get('span.showPassword.icon-36')
            .click({force:true})
            .toMatchImageSnapshot()
    }

    fillPasswordInputLikeAText(password){
        cy.get('[type="text"]')
            .type(password)
        cy.get('.svg-lock')
            .click({force:true})
        cy.get('[type="text"]')
            .toMatchImageSnapshot()
    }

    matchImagePassword(){
        cy.get('[type="password"]')
            .toMatchImageSnapshot()
    }
}


export const loginForm = new LoginForm()