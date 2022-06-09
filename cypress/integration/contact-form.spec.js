describe( 'Contact Form', () => {

  it('A visitor can use the site-wide contact form', () => {
    cy.visit('contact/feedback')
      .get('input[name="name"]').type('John Doe')
      .get('input[name="mail"]').type('john@doe.com')
      .get('[name="subject[0][value]"]').type('Hello world')
      .get('[name="message[0][value]"]').type('Lorem Ipsum')
      .get('[data-drupal-selector="edit-submit"]').contains('Send message').click()
      .get('body').should('contain', 'Your message has been sent.' )
  })

})
