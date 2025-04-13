describe('Apendendo conceitos Cypress', () => {
  /*
  it('1 - Usuario faz login com username e senha invalidaos', () =>{
    cy.visit('/');
    cy.get('div.shop-menu').contains('Login').click();

    cy.contains('Login to your account');

    cy.get('[data-qa="login-email"]').type('teste@gmail.com');

    cy.get('[data-qa=login-password"]').type('123456');

    cy.get('[data-qa"login-button"]').contains('Login').click();

    cy.contains('Your mail or password is incorrect!');
  })
  */
  it('2 - Acessando home da pagina Automation Exercise', () => {
    cy.visit('/');
    cy.contains('Automation');
    cy.get('h1');
    cy.get('h1').contains('Automation');

    cy.get('.features_items');

    cy.get('div.features_items');
  })

  it('3 - Verificando itens para compra ',()=> {
    cy.visit('/');
    //cy.visit('/');
    cy.get('.features_items') //Acessando primeiro filho do item
    cy.get('.features_items').children().first()
    cy.get('.features_items').children().last() // Acessando filhos de um elemento
    cy.get('.features_items').children().eq(2) // Acessando elemento de array
    
    cy.get('[data-product-id="2"]') // pelo data-id
  })
  

  it('4 - Colocar item no carrinho e continuar comprando', () =>{
    cy.visit('/');
    cy.get('[data-product-id="2"]').contains("Add to cart").click()

    cy.get('#cartModal').contains('Added');

    cy.get('Button.close-modal', {timeout: 5000}).click();

  });

  it('5 - Acessando a pagina de produtos - usando intercept', ()=>{ 
    cy.visit('/')
    cy.intercept('GET', 'products' );
    cy.get('.navbar-nav').contains('Products').click();
   });

  it('6 - GET Produtos - usando request', ()=>{ 

    cy.request('GET', 'api/productsList');

   })

})