
describe("Prueba de registro de usuario", () => {
  it("Debería permitir registrar un nuevo usuario", () => {
    // Espiar el alert antes de la acción
    cy.on("window:alert", (msg) => {
      expect(msg).to.equal("Registro éxitoso"); 
    });
    
    
    
    // 1. Visitar la página de registro
    cy.visit("/register");

    // 2. Completar los campos del formulario
    cy.get('[data-testid="name-input"]')
      .should("exist")
      .should("be.visible")
      .type("UsuarioPrueba");

    cy.get('[data-testid="lastname-input"]')
      .should("exist")
      .should("be.visible")
      .type("Inicial")

    cy.get('[data-testid="email-input"]')
      .should("exist")
      .should("be.visible")
      .type("usuarioprueba@example.com");

    cy.get('[data-testid="password-input"]')
      .should("exist")
      .should("be.visible")
      .type("password123");

 

    // 3. Hacer clic en el botón de registro
    cy.get("button").contains(/Crear Cuenta/i).click();

   
  });
});