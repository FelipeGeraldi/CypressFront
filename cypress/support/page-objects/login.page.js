class LoginPage {

    constructor(){

        this.txtoagibank = '#menu-item-3713 > [href="https://blogdoagi.com.br/institucional/"] > .menu-text';
        this.txtprodutos = '#menu-item-3714 > [href="https://blogdoagi.com.br/produtos/"] > .menu-text';
        this.txtservicos = '#menu-item-3715 > .menu-link > .menu-text';
        this.txtsuasfinancas = '#menu-item-3717 > .menu-link > .menu-text';
        this.txtsuaseguranca = '#menu-item-3716 > .menu-link > .menu-text';
        this.txtstories = '#menu-item-5582 > .menu-link > .menu-text';
        
    }

    clicarEmOAgibank() {
        cy.get(this.txtoagibank).click();
      }
      clicarEmProdutos() {
        cy.get(this.txtprodutos).click();
      }
      clicarEmServicos() {
        cy.get(this.txtservicos).click();
      }
      clicarEmSuasFinancas() {
        cy.get(this.txtsuasfinancas).click();
      }

      clicarEmSuaSeguranca() {
        cy.get(this.txtsuaseguranca).click();
      }
      clicarEmStories() {
        cy.get(this.txtstories).click();
      }

}

export default new LoginPage();