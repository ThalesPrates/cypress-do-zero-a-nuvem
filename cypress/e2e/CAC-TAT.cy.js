describe('Central de Atendimento ao Cliente TAT', () => {
  beforeEach(() => {
    cy.visit('./src/index.html')
  })

  it('exibe mensagem de erro ao tentar enviar com email inválido', () => {
    cy.get('#firstName').type('João')
    cy.get('#lastName').type('Silva')
    cy.get('#email').type('joao.silva@invalido')
    cy.get('#open-text-area').type('Gostaria de relatar um problema no sistema.')

    cy.get('button[type="submit"]').click()

    cy.get('.error').should('be.visible')
    cy.get('.success').should('not.be.visible')
  })
})
