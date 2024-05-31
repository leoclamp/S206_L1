describe('testando https://demoqa.com/',() => {
    
    it('teste: testando text box',()=>{
        acessarPagina()
      cy.get(':nth-child(1) > .element-list > .menu-list > #item-0').click()
      cy.get('#userName').click().type('leo')
      cy.get('#userEmail').click().type('leo@exemplo.com')
      cy.get('.col-md-9 > #currentAddress').click().type('Santa rita')
      cy.get('.col-md-9 > #permanentAddress').click().type('Santa rita')
      cy.get('#submit').click()
      cy.get('#name').should('contain.text', 'leo')
      cy.get('#email').should('contain.text', 'leo@exemplo.com')
      cy.get('.border > #currentAddress').should('contain.text', 'Santa rita')
      cy.get('.border > #permanentAddress').should('contain.text', 'Santa rita')

    })

    it('teste: testando radio button',()=>{
        acessarPagina()
        cy.get(':nth-child(1) > .element-list > .menu-list > #item-2').click()
        cy.get(':nth-child(3) > .custom-control-label').click()
        cy.get('.text-success').should('contain.text', 'Impressive')

    })

    it('teste: testando web tables',()=>{
        acessarPagina()
        cy.get(':nth-child(1) > .element-list > .menu-list > #item-3').click()
        cy.get('#addNewRecordButton').click()
        cy.get('#firstName').click().type('leo')
        cy.get('#lastName').click().type('jr')
        cy.get('#userEmail').click().type('leo@exemplo.com')
        cy.get('#age').click().type('20')
        cy.get('#salary').click().type('1000')
        cy.get('#department').click().type('Insurance')
        cy.get('#submit').click()
        cy.get('#searchBox').click().type('leo')
        cy.get('.rt-tbody > :nth-child(1) > .rt-tr > :nth-child(1)').should('contain.text', 'leo')

    })

    it('teste: testando web tables com email invalido',()=>{
        acessarPagina()
        cy.get(':nth-child(1) > .element-list > .menu-list > #item-3').click()
        cy.get('#addNewRecordButton').click()
        cy.get('#firstName').click().type('leo')
        cy.get('#lastName').click().type('jr')
        cy.get('#userEmail').click().type('leo@.com')
        cy.get('#age').click().type('20')
        cy.get('#salary').click().type('1000')
        cy.get('#department').click().type('Insurance')
        cy.get('#submit').click()
        cy.get('#registration-form-modal').should('contain.text', 'Registration Form')

    })

    it('teste: testando buttons (doubleClick)',()=>{
        acessarPagina()
        cy.get(':nth-child(1) > .element-list > .menu-list > #item-4').click()
        cy.get('#doubleClickBtn').dblclick()
        cy.get('#doubleClickMessage').should('contain.text', 'You have done a double click')

    })

    it('teste: testando buttons (rightClick)',()=>{
        acessarPagina()
        cy.get(':nth-child(1) > .element-list > .menu-list > #item-4').click()
        cy.get('#rightClickBtn').rightclick()
        cy.get('#rightClickMessage').should('contain.text', 'You have done a right click')

    })

  })


function acessarPagina(){
    cy.visit('https://demoqa.com/')
    cy.get(':nth-child(1) > :nth-child(1) > .card-body').click()
}