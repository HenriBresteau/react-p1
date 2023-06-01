describe("Logout", () => {
    it("devrait plus y avoir le bouton deconnexion", () => {
        cy.visit("/login");
        cy.get("#login").type("moi");
        cy.get("#password").type("123456");
        cy.get("button[type=submit]").click();
        cy.url().should("eq", Cypress.config().baseUrl + "/");
        cy.get("#logout").click();
        cy.contains("Déconnexion").should("not.exist");
    });
});
