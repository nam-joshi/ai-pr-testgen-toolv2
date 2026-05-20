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

describe("Amazon Cart Behaviour", () => {
  beforeEach(() => {
    cy.visit("https://www.amazon.com/");
  });

  it("should show cart count on fresh visit", () => {
    cy.get("#nav-cart-count").then(($el) => {
      const count = parseInt($el.text().trim());
      expect(count).to.be.gte(0);
    });
  });

  it("should load the cart page without errors", () => {
    cy.visit("https://www.amazon.com/gp/cart/view.html");
    cy.get("body").should("be.visible");
    cy.url().should("include", "cart");
  });
});



