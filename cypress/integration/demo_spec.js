/* 
 * @demo_spec.js 
 *
 * Demo script with Cypress for Kibana 
 *
 * Author: Liza Dayoub 
 *
 */

describe('Canvas app tests', function() {
    beforeEach(function() {
        cy.kibanaLogin(Cypress.config("elasticUser"), Cypress.config("elasticPassword"));
    });

    it('Loads canvas app', function() {   
        const canvasFlightPath = '/app/canvas#/workpad/workpad-a474e74b-aedc-47c3-894a-db77e62c41e0/page/1';
        cy.gotoCanvas(canvasFlightPath);
    });
});
