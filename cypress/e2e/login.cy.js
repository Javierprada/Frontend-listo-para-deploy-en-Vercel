describe("Prueba de inicio de sesión", () => {
  it("Debería permitir escribir usuario y contraseña", () => {
    // 1. Visitar la ruta /login
    cy.visit("/login");

   

    // 2. Debug: ver lo que realmente está renderizando
    cy.document().then((doc) => {
      cy.log("DOM actual:", doc.body.innerHTML);
    });

    // 3. Buscar el input de email (con espera extendida)
    cy.get('[data-testid="email-input"]', { timeout: 10000 })
      .should("exist")
      .and("be.visible")
      .type("adminserver@purecinemafeel.com");
    

    // 4. Buscar el input de password
    cy.get('[data-testid="password-input"]', { timeout: 10000 })
      .should("exist")
      .and("be.visible")
      .type("admin12390");
    

    // 5. Clic en el botón "Entrar"
    cy.get("button").contains(/entrar/i).click();
    
  });
});