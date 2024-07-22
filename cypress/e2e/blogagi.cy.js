/// <reference types="cypress" />
import BlogAgiPage from '../support/page-objects/blogagi.page';
import LoginPage from '../support/page-objects/login.page';


context('Funcionalidade Menus', () => {

  beforeEach(() => {

    BlogAgiPage.login()
    });


  it('CT01 - Acessar o menu O Agibank ', () => {
    
    LoginPage.clicarEmOAgibank()
    BlogAgiPage.validatexto('O Agibank')
    
  });

  it('CT02 - Acessar o menu Produtos ', () => {
   
    LoginPage.clicarEmProdutos()
    BlogAgiPage.validatexto('Produtos')
   

  });

  it('CT03 - Acessar o menu Serviços ', () => {
 
    LoginPage.clicarEmServicos()
    BlogAgiPage.validatexto('Serviços')
    

  });


  it('CT04 - Acessar o menu Suas finanças ', () => {
    
    LoginPage.clicarEmSuasFinancas()
    BlogAgiPage.validatexto('Suas finanças')
    
    
  });

  it('CT05 - Acessar o menu Sua segurança ', () => {
   
    LoginPage.clicarEmSuaSeguranca()
    BlogAgiPage.validatexto('Sua segurança')
    
  });

  it('CT06 - Acessar o menu Sua segurança ', () => {
   
    LoginPage.clicarEmStory()
    BlogAgiPage.validatexto('Story')
   
  });



})