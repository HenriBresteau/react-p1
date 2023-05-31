describe("Home", () => {
    it("devrait contenir des liens cliquables", () => {
        cy.visit("/");
        cy.contains("Users");
        cy.contains("Compteur");
        cy.contains("Login");
        cy.contains("Créer un compte").click();
        cy.url().should("eq", Cypress.config().baseUrl + "/register");
    });
});
