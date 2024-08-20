describe('NPM Package Search and Verification', () => {
  it('should search for a package and verify its details', () => {
    cy.visit('https://www.npmjs.com/');

    cy.get('input[aria-label="Search packages"]')
      .type('cypress-test-notifications{enter}')
      .should('have.value', 'cypress-test-notifications');

    cy.contains('p', 'A Cypress plugin to send desktop notifications with test summary results.')
      .should('be.visible');

    cy.contains('h3', 'cypress-test-notifications').click();

    cy.get('#package-tab-versions').should('be.visible').click();

    cy.contains('Current Tags').should('be.visible');
  });
});
