/// <reference types="cypress" />
import BlogAgiPage from '../support/page-objects/blogagi.page';
import LoginPage from '../support/page-objects/login.page';


context('Funcionalidade Menus', () => {

  beforeEach(() => {

    //Dado que eu acesso a página do Blog do Agibank
    BlogAgiPage.login()
    });


  it('CT01 - Acessar o menu O Agibank ', () => {
    //E eu clico no menu O Agibank
    LoginPage.clicarEmOAgibank()
    //Então eu devo ser redirecionado para a página do O Agibank
    BlogAgiPage.validatexto('O Agibank')
    
  });

  it('CT02 - Acessar o menu Produtos ', () => {
    //E eu clico no menu Produtos
    LoginPage.clicarEmProdutos()
    //Então eu devo ser redirecionado para a página do Produtos
    BlogAgiPage.validatexto('Produtos')
   

  });

  it('CT03 - Acessar o menu Serviços ', () => {
    //E eu clico no menu Serviços
    LoginPage.clicarEmServicos()
    //Então eu devo ser redirecionado para a página do Serviços
    BlogAgiPage.validatexto('Serviços')
    

  });


  it('CT04 - Acessar o menu Suas finanças ', () => {
    //E eu clico no menu Suas Finanças
    LoginPage.clicarEmSuasFinancas()
    //Então eu devo ser redirecionado para a página do Suas Finanças
    BlogAgiPage.validatexto('Suas finanças')
    
    
  });

  it('CT05 - Acessar o menu Sua segurança ', () => {
    //E eu clico no menu Sua Segurança
    LoginPage.clicarEmSuaSeguranca()
    //Então eu devo ser redirecionado para a página do Sua Segurança
    BlogAgiPage.validatexto('Sua segurança')
    
  });

  it('CT06 - Acessar o menu Sua segurança ', () => {
    //E eu clico no menu Stories
    LoginPage.clicarEmStories()
    //Então eu devo ser redirecionado para a página do Stories
    BlogAgiPage.validatexto('Story')
   
  });



})