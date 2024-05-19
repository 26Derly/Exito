describe('funcionalidad de Añadir al carrito', () => {

  it('Añadir producto al carrito por medio del buscador', () => {
    cy.viewport('iphone-x')
    cy.visit('https://www.exito.com/')
    cy.wait(3000)
    //Ingresar el dato al buscador
    cy.get('[data-testid="store-search-input"]').type('azucar')
    //Dirigirse a la pagina de resultados
    cy.focused().type('{enter}')
    //Añadir al carrito el primer producto
    cy.contains('Agregar').first().click()
    cy.wait(5000)
    //Validar el mensaje
    cy.get('.toast-component_fs-toast__u3MiM').should('be.visible')
    cy.wait(5000)
  })

  it.only('Añadir producto al carrito desde la categoria', () => {
    cy.viewport(1000, 660)
    cy.visit('https://www.exito.com/')
    cy.wait(3000)
    //Ingresar el menú
    cy.get('[aria-label="Collapse menu"]').click()
    //Seleccionar la primera categoria
    cy.get('.Link_link-container__Ckaqv').first().click()
    //Seleccionar la primera sub categoria
    cy.get('.SubMenu_subsection-item__sPPCM').first().click()
    cy.wait(2000)
    //Añadir al carrito el primer producto
    cy.contains('Agregar').first().click()
    cy.wait(5000)
    //Seleccionar almacen
    cy.get('.css-1l2aqh3').type('Medellín')
    cy.get(' css-1q8z1tf').type('Exito Bello')
    //Confirmar la selección
    cy.contains('button', 'Confirmar').click()
    cy.wait(2000)
    //Añadir al carrito el primer producto
    cy.contains('Agregar').first().click()
    cy.wait(5000)
    
  })
  
})



