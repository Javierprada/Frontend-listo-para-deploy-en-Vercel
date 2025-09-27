describe("Visualización de una película desde la galería", () => {

  beforeEach(() => {
  // Simular login vía API
  cy.request("POST", "http://localhost:8080/api/Pure_Cinema_Feel/login", {
    email: "adminserver@purecinemafeel.com",
    password: "admin12390"
  }).then((resp) => {
    window.localStorage.setItem("token", resp.body.token); // guarda token
  });
});



  it("Debería permitir ver la película MATRIX RELOAD", () => {


    // 1. Visitar la galería de películas
    cy.visit('/movie-gallery');


    // 2. Buscar el botón o enlace para la película MATRIX RELOAD
    cy.contains(".movie-card h4", "MATRIX")
      .parents(".movie-card")
      .find("button")
      .click();

    

    // 3. Validar que el reproductor de video aparezca
    cy.get('[data-testid="movie-player"]').within(() =>{
      cy.get("video").should("be.visible");
    })
      
  });


});