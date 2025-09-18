import { LoginPage } from '../pageObjects/LoginPage';
import { TaskModulePage } from '../pageObjects/TaskModulePage';

describe('AI Studio Demo', () => {
  it('Login with valid creds to create a Task', function() {
    cy.visit(Cypress.env('baseUrl') + '/login.do');
    cy.fixture('user').then((user) => {
      const loginPage = new LoginPage();
      loginPage.enterUsername(user.username);
      loginPage.enterPassword(user.password);
      loginPage.clickLogin();
      loginPage.assertLoginSuccess();
    });

    // Navigate to TASKS module
    cy.get('a.content.tasks').click();

    // Create a new task using TaskModulePage
    const taskPage = new TaskModulePage();
    const randomNum = Math.floor(10000 + Math.random() * 90000);
    const customerName = `cust_${randomNum}`;
    const projectName = `proj_${randomNum}`;
    const taskName = `task${randomNum}`;

    // Fill task creation popup using Page Object
    taskPage.navigateToTasks().createTask(customerName, projectName, taskName).logout();

  });
});
