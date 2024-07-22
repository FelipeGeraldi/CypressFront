class BlogAgiPage {
    login() {
      cy.visit('https://blogdoagi.com.br/')
    }

    validatexto(texto){

      cy.get('.page-title').should('have.text', texto);
    }

}

export default new BlogAgiPage();