
export const elements = {
    username: () => cy.get('#username'),
    password: () => cy.get('input[name="pwd"]'),
    loginButton: () => cy.get('#loginButton'),
    errorMessage: () => cy.get('.errormsg'),
    logoutLink: () => cy.get('#logoutLink'),
};

export class LoginPage {
    enterUsername(username) {
        elements.username().clear().type(username);
    }
    enterPassword(password) {
        elements.password().clear().type(password);
    }
    clickLogin() {
        elements.loginButton().click();
    }
    assertLoginSuccess() {
        cy.url().should('not.include', '/login.do');
        elements.logoutLink().should('be.visible');
    }
    assertLoginFailure() {
        elements.errorMessage().should('be.visible');
    }
}
