describe('Notes Application', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('should add a new note and display it in the list', () => {
    cy.contains('Create New Note').click();

    cy.get('input[placeholder="Title"]').type('Test Note');
    cy.get('textarea[placeholder="Content"]').type('This is a test note.');

    cy.get('button').contains('Create').click();

    cy.contains('Test Note').should('be.visible');

    cy.contains('Test Note').click();
    cy.contains('This is a test note.').should('be.visible');
  });
});
