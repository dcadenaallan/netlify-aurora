describe('Home Spec', () => {
  it('Home', () => {
    cy.visit('/')
    cy.get('[id=text-welcome]').should(
      'contain.text',
      'Welcome to your Nuxt Application'
    )
  })
})
