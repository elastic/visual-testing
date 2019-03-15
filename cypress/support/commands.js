/**
 * @commands.js 
 *
 * Provides some kibana functions 
 *
 * Author: Liza Dayoub 
 *
 */
    
Cypress.Commands.add('waitForLoadingIndicator', () => {
    const loadingIndicator = '[data-test-subj="globalLoadingIndicator"]';
    cy.get(loadingIndicator).should('exist');
    cy.get(loadingIndicator).should('not.exist');
});
  
Cypress.Commands.add('waitForKibanaLogo', () => {
    const loadingIndicator = 'div.kibanaWelcomeLogo';
    cy.get(loadingIndicator).should('exist');
    cy.get(loadingIndicator).should('not.exist');
});

Cypress.Commands.add('kibanaLogin', (user, password) =>  {
    const userElem = '[data-test-subj="loginUsername"]';
    const passwordElem = '[data-test-subj="loginPassword"]';
    const submitElem = '[data-test-subj="loginSubmit"]';
    const globalNavLinkTitle = 'div.kbnGlobalNavLink__title';

    cy.visit(Cypress.config("baseUrl"));
    cy.get(userElem).type(user);
    cy.get(passwordElem).type(password);
    cy.get(submitElem).click();
    cy.waitForKibanaLogo();
    cy.get(globalNavLinkTitle).should('exist').contains(user);

});

Cypress.Commands.add('waitForCanvasLoadingIndicator',  () => {
    const canvasLoadingIndicator = 'div.canvasContainer--loading';
    cy.get(canvasLoadingIndicator).should('exist');
    cy.get(canvasLoadingIndicator).should('not.exist');
});

Cypress.Commands.add('gotoCanvas', (path) => {
    const canvasElem = '[data-test-subj="canvasWorkpadPageElementContent"]';
    cy.visit(path);
    cy.waitForCanvasLoadingIndicator();
    cy.get(canvasElem).should('exist');
});
  

  
