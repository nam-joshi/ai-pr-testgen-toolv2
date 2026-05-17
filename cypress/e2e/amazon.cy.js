describe("Amazon Homepage", () => {
  beforeEach(() => {
    cy.visit("https://www.amazon.com/");
  });

  it("should load the homepage and show the logo", () => {
    cy.get("#nav-logo-sprites").should("be.visible");
  });

  it("should have a search bar", () => {
    cy.get("#twotabsearchtextbox").should("be.visible");
  });

  it("should have a cart icon", () => {
    cy.get("#nav-cart").should("be.visible");
  });
});




