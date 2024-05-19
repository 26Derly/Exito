describe('funcionalidad de Login', () => {

  it('Iniciar sesión erroneo', () => {
    cy.viewport('samsung-note9')
    cy.visit('https://www.exito.com/')
    cy.wait(3000)
    //Ingresar a la opción inicir sesión
    cy.get('[data-fs-requests="true"] > [data-testid="fs-link"]').click()
    cy.wait(2000)
    //Ingresar a la opción Inicia con email y contraseña
    cy.get(':nth-child(1) > .vtex-login-2-x-button > .vtex-button > .vtex-button__label').click()
    //Ingresar los campos
    cy.get('.vtex-login-2-x-inputContainerEmail').type('rere@dg.cs')
    cy.get('.vtex-login-2-x-inputContainerPassword').type('123QWee$')
    //Enviar el formulario
    cy.get('.vtex-login-2-x-sendButton > .vtex-button > .vtex-button__label').click()
    //Verificar el mensaje de error
    cy.get('.vtex-login-2-x-formError').should('be.visible')
  })

  it('Iniciar sesión correcto', () => {
    cy.viewport(1024, 768)
    cy.visit('https://www.exito.com/')
    cy.wait(3000)
    //Ingresar a la opción inicir sesión
    cy.get('[data-fs-requests="true"] > [data-testid="fs-link"]').click()
    cy.wait(2000)
    //Ingresar a la opción Inicia con email y contraseña
    cy.get(':nth-child(1) > .vtex-login-2-x-button > .vtex-button > .vtex-button__label').click()
    //Ingresar los campos
    cy.get('.vtex-login-2-x-inputContainerEmail').type('rere@dg.cs')
    cy.get('.vtex-login-2-x-inputContainerPassword').type('123QWee$')
    //Enviar el formulario
    cy.get('.vtex-login-2-x-sendButton > .vtex-button > .vtex-button__label').click()
    //Verificar el mensaje de error
    cy.get('.vtex-login-2-x-formError').should('be.visible')
  })
})



