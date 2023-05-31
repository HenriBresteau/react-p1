describe("Register", () => {
    it("devrait afficher une erreur si le nom est trop court", () => {
        cy.visit("/register");
        cy.get("#name").type("T");
        cy.get("button[type=submit]").click();
        cy.get("#name")
            .next("div.alert.alert-warning.mb-0")
            .should("have.text", "Au moins 2 caractères");
        cy.url().should("eq", Cypress.config().baseUrl + "/register");
    });
    it("devrait rediriger vers la home", () => {
        cy.visit("/register");
        cy.get("#name").type("Toui");
        cy.get("#email").type("test@mail.com");
        cy.get("#password").type("1346");
        cy.get("#country").select("FRANCE");
        cy.get("button[type=submit]").click();
        cy.url().should("eq", Cypress.config().baseUrl + "/");
    });
    it("devrait afficher une erreur si le email est invalide", () => {
        cy.visit("/register");
        cy.get("#email").type("T");
        cy.get("button[type=submit]").click();
        cy.get("#email")
            .next("div.alert.alert-warning.mb-0")
            .should("have.text", "Email non valide");
        cy.url().should("eq", Cypress.config().baseUrl + "/register");
    });
});
