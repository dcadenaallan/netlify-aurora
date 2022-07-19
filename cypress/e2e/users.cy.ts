describe("users spec", () => {
  it("List", () => {
    cy.visit("/users");
    cy.get("[id=table-users]").should("be.visible");
    cy.get("#body-users").children().should('have.length', 2)
  });
});
