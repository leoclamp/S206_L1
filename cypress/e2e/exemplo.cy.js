describe('testando mercado livre',() => {
    
  it('teste: Pesquisa inexistente',()=>{
    cy.visit('https://www.mercadolivre.com.br/')
    cy.get('#cb1-edit').click().type('jksahdk')
    cy.get('.nav-icon-search').click()
    cy.get('.ui-search-rescue__title').should('contain.text', 'Não há anúncios que correspondam à sua busca')

  })

  it('teste: Pesquisa existente',()=>{
    cy.visit('https://www.mercadolivre.com.br/')
    cy.get('#cb1-edit').click().type('notebook')
    cy.get('.nav-icon-search').click()
    cy.get('.ui-search-breadcrumb__title').should('contain.text', 'Notebook')

  })

  it('teste: testando pagina de ofertas',()=>{
    cy.visit('https://www.mercadolivre.com.br/')
    cy.get(':nth-child(2) > .nav-menu-item-link').click()
    cy.get('.andes-carousel-snapped__slide--active > .carousel_item > .title').should('contain.text', 'Todas as ofertas')

  })

  it('teste: testando pagina de historico',()=>{
    cy.visit('https://www.mercadolivre.com.br/')
    cy.get(':nth-child(3) > .nav-menu-item-link').click()
    cy.get('.ui-navigation-header__lgpd__title').should('contain.text', 'O seu histórico')

  })

  it('teste: testando pagina de supermercado',()=>{
    cy.visit('https://www.mercadolivre.com.br/')
    cy.get(':nth-child(4) > .nav-menu-item-link').click()
    cy.get(':nth-child(2) > .hub__carousel > .carousel__title').should('contain.text', 'Nossas categorias')

  })

  it('teste: testando pagina do mercado play',()=>{
    cy.visit('https://www.mercadolivre.com.br/')
    cy.get(':nth-child(2) > a > img').click()
    cy.get('.sub-header-desktop__brand > .andes-typography').should('contain.text', 'Mercado Play')

  })


})