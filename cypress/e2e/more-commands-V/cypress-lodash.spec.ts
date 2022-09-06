// Trying to do smth with lodash

describe("4 Commands Probably You Did NOT Know", () => {
  it("Lodash", () => {
    const getText = ($el) => {
      return Cypress._.map($el, "innerText");
    };

    cy.visit("https://demoqa.com/sortable");
    cy.get('[class="vertical-list-container mt-4"]')
      .children()
      .should("have.length", 6)
      .then(getText)
      .should("deep.equal", ["One", "Two", "Three", "Four", "Five", "Six"]);

    const difference = Cypress._.difference(
      ["Three", "Six"],
      ["One", "Two", "Three", "Four", "Five", "Six"]
    );
    expect(difference).to.be.empty;
  });
});
