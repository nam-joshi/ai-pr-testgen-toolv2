describe("CSUF Homepage 1", () => {
    it("should load the homepage and show title", () => {
      cy.visit("https://www.fullerton.edu/");
      cy.contains("California State University, Fullerton").should("be.visible");
    });

    it("should load the homepage", () => {
        cy.visit("https://www.fullerton.edu/");
        cy.contains("California State University, Fullerton").should("be.visible");
      });
    
  });  