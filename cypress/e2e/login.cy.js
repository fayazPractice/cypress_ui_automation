import { LoginPage } from '../pageObjects/LoginPage';

describe('Login Page Tests', () => {
  const loginPage = new LoginPage();

  beforeEach(() => {
    cy.visit(Cypress.env('baseUrl') + '/login.do');
  });

  it('should login successfully with valid credentials', () => {
    cy.fixture('user').then((user) => {
      loginPage.enterUsername(user.username);
      loginPage.enterPassword(user.password);
      loginPage.clickLogin();
      loginPage.assertLoginSuccess();
    });
  });

  it('should show error for invalid credentials', () => {
    loginPage.enterUsername('invalidUser');
    loginPage.enterPassword('invalidPass');
    loginPage.clickLogin();
    loginPage.assertLoginFailure();
  });

  it('should allow checking "Keep me logged in"', () => {
    cy.get('#keepLoggedInCheckBox').check().should('be.checked');
  });

  it('should display error message when fields are empty', () => {
    loginPage.clickLogin();
    loginPage.assertLoginFailure();
  });
});
