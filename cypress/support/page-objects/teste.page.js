class TestePage {
    criarAula(randon) {
      //clicando em Aulas no menu lateral esquerdo
      //cy.wait(3000)
  
      //cy.get('[data-testid*="menu-lessons"]').click({ force: true })
      cy.contains("Aulas").click({ force: true });
  
      cy.wait(3000);
      //clicando no botao criar nova aula
      cy.get('[data-testid="toolslist-add-button-link"]').click({ force: true });
      cy.wait(3000);
      //inserindo um nome para aula
      cy.get('[data-testid="text-field-name"]')
        .should("be.visible")
        .clear()
        .type(randon);
      //clicando em continuar
      cy.get('[data-testid="form-save-button"]').click({ force: true });
    }

}

export default new TestePage();