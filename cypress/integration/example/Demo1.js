//where i am going to write my script/code
/// <reference types="Cypress"/>
//Mocha Framework
describe("This is my First Suite Collection for OrangeHRM", () => {
    it("To Test OrangeHRM with Login and Logout", () => {
      //The below code is to navigate to specific web page
      cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        
      // // Verify that the logout message is displayed on the page
      // cy.contains('Login').should('be.visible');

      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("Admin");
      cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type("admin123");
      cy.get('.oxd-button').click();
  
      // Verify that the user is redirected to the dashboard page after logging in
      cy.url().should('include', '/dashboard');
  
      cy.get('.oxd-userdropdown-tab > .oxd-icon').click();
      cy.get(':nth-child(4) > .oxd-userdropdown-link').click();
  
      // Verify that the user is redirected to the login page after logging out
      // cy.url().should('include', '/auth/login');
      // // Verify that the logout message is displayed on the page
      // cy.contains('Login').should('be.visible');
    });
  });
  