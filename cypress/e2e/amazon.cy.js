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

describe("Amazon Search Functionality", () => {
  beforeEach(() => {
    cy.visit("https://www.amazon.com/");
  });
  it("should return results for a valid product search", () => {
    cy.get("#twotabsearchtextbox").type("laptop");
    cy.get("#nav-search-submit-button").click();
    cy.get("[data-component-type='s-search-result']").should("have.length.greaterThan", 0);
  });
});




