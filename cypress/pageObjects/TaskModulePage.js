export const elements = {
  createTasksDiv: () => cy.get('#createTasksDiv, [data-cy="createTasksDiv"]'),
  createTasksBtn: () => cy.get('.x-btn-text, [data-cy="createTasksBtn"]'),
  createTasksMenuItem: () => cy.get('.x-menu-item, [data-cy="createTasksMenuItem"]'),
  tasksTab: () => cy.get('a.content.tasks, [data-cy="tasksTab"]'),
  taskTable: () => cy.get('.listTable, [data-cy="taskTable"]'),
  newCustomerInput: () => cy.get('#createTasksPopup_newCustomer, [data-cy="newCustomerInput"]'),
  filterInput: () => cy.get('input[name="visiableFilterString"], [data-cy="filterInput"]'),
  newProjectInput: () => cy.get('#createTasksPopup_newProject, [data-cy="newProjectInput"]'),
  filterButton: () => cy.get('#tasksFilterSubmitButton, [data-cy="filterButton"]'),
  newTaskInput: () => cy.get('.nameCell .inputFieldWithPlaceholder, [data-cy="newTaskInput"]').first(),
  taskRows: () => cy.get('.listTable tr:not(:first-child), [data-cy="taskRow"]'),
  descriptionIcon: () => cy.get('#descriptionCell0 > #descriptionElement > img, [data-cy="descriptionIcon"]'),
  selectTaskCheckbox: (id) => cy.get(`input[name="taskSelected[${id}]"], [data-cy="selectTaskCheckbox-${id}"]`),
  descriptionText: () => cy.get('#editDescriptionPopupText, [data-cy="descriptionText"]'),
  completeButton: () => cy.get('input[value="Complete Selected Tasks"], [data-cy="completeButton"]'),
  descriptionSave: () => cy.get('#scbutton, [data-cy="descriptionSave"]'),
  deleteButton: () => cy.get('input[value="Delete Selected Tasks"], [data-cy="deleteButton"]'),
  deadlineButton: () => cy.get('#ext-gen68, [data-cy="deadlineButton"]'),
  taskNameCell: (id) => cy.get(`#taskNameCell${id} a, [data-cy="taskNameCell-${id}"]`).first(),
  deadlineDate: () => cy.get('.x-date-date > em > span, [data-cy="deadlineDate"]'),
  deadlineCell: (id) => cy.get(`#taskNameCell${id}`).parent().find('.deadline, .deadline_in_the_past, [data-cy="deadlineCell-${id}"]'),
  typeOfWorkButton: () => cy.get('#ext-gen84 > .x-btn-center > em, [data-cy="typeOfWorkButton"]'),
  billingTypeButton: () => cy.get('[data-cy="billingTypeButton"]'),
  addToTTCheckbox: () => cy.get('.addToTTCell div input, [data-cy="addToTTCheckbox"]').first(),
  commitBtn: () => cy.get('#createTasksPopup_commitBtn > .buttonIcon, [data-cy="commitBtn"]'),
  logoutLink: () => cy.get('#logoutLink, [data-cy="logoutLink"]'),
};

export class TaskModulePage {
  navigateToTasks() {
    elements.tasksTab().click();
    return this;
  }
  createTask(customer, project, task) {
  elements.createTasksDiv().click();
  elements.createTasksBtn().eq(0).click(); // Click the first "Create Tasks" button
  elements.createTasksMenuItem().eq(1).click(); // Click the first "Create Tasks" button
    elements.newCustomerInput().clear().type(customer);
    elements.newProjectInput().clear().type(project);
    elements.newTaskInput().clear().type(task);
    elements.descriptionIcon().click();
    elements.descriptionText().click();
    elements.descriptionSave().click();
    elements.deadlineButton().click();
    elements.deadlineDate().eq(30).click();
    elements.addToTTCheckbox().check();
    elements.commitBtn().click();
    return this;
  }
  logout() {
    elements.logoutLink().click();
    return this;
  }
}
