describe("CSUF Homepage", () => {
  it("should load the homepage and show title", () => {
    cy.visit("https://www.fullerton.edu/");
    cy.contains("California State University, Fullerton").should("be.visible");
  });

  it("should have a working navigation menu", () => {
    cy.visit("https://www.fullerton.edu/");
    cy.get("nav").should("exist");
  });

  it("should have a search bar", () => {
    cy.visit("https://www.fullerton.edu/");
    cy.get("input[type='search'], input[name='q'], input[placeholder*='earch']").should("exist");
  });
});
