describe('funcionalidad de Añadir al carrito', () => {

  it('Llegar al proceso de pago con un usuario invitado', () => {
    cy.viewport(1000, 786)
    cy.visit('https://www.exito.com/')
    cy.wait(3000)
    //Ingresar el dato al buscador
    cy.get('[data-testid="store-search-input"]').type('azucar')
    //Dirigirse a la pagina de resultados
    cy.focused().type('{enter}')
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
    //Ir al carrito
    cy.get('svg[data-fs-navbar-minicart-icon="true"]').click()
    //Ir al proceso de pago
    cy.contains('button', 'Ir a pagar').click()
    //Ingresar el correo electronico
    cy.get('input[name="email"]').type('adfe@gsdg.com')
    //Confirmación del correo
    cy.contains('button', 'Confirmar').click()
    //Diligenciar el formulario del usuario
    cy.get('input[name="firstName"]').type('azucar')
    cy.get('input[name="lastName"]').type('azucar')
    cy.get('input[name="documentType"]').type('azucar')
    cy.get('input[name="document"]').type('azucar')
    cy.get('input[name="phone"]').type('azucar')
    cy.get('input[data-atom-checkbox-input="true"]').eq(0).check()
    cy.get('input[data-atom-checkbox-input="true"]').eq(1).check()
    cy.get('input[data-atom-checkbox-input="true"]').eq(2).check()
    //Enviar el formulario
    cy.contains('button', 'Continuar').click()
    //Seleccionar la fecha
    cy.get('.exito-checkout-io-0-x-scheduleSlideGeneral').first().click()
    //Seleccionar hora
    cy.get('.exito-checkout-io-0-x-scheduleButtonsGeneral').first().click()
    //Confirmar la selección
    cy.contains('button', 'Confirmar').click()
    //Continuar al siguiente paso
    cy.contains('button', 'Continuar').click()

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
    //Validar el mensaje
    cy.get('.toast-component_fs-toast__u3MiM').should('be.visible')
    cy.wait(5000)
  })
  
})



