describe("testes de criação, registro e login", () => {
  it("teste criação de usuario com sucesso", () => {
    cy.visit('https://globalsqa.com/angularJs-protractor/registration-login-example/#/login')
    cy.get('.btn-link').click()
    cy.get('#firstName').type("leonardo")
    cy.get('#Text1').type("junior")
    cy.get('#username').type("leo")
    cy.get('#password').type("123")
    cy.get('.btn-primary').click()
    cy.get('.ng-binding').should("contain.text", "Registration successful")
  })

  it("teste criação de usuario com sucesso", () => {
    cy.visit('https://globalsqa.com/angularJs-protractor/registration-login-example/#/login')
    cy.get('.btn-link').click()
    cy.get('#firstName').type("leonardo")
    cy.get('#Text1').type("junior")
    cy.get('#username').type("leo")
    cy.get('.btn-primary').should("be.disabled")
  })

  it("teste de login com sucesso", () => {
    let infos = criarUser()
    cy.visit('https://globalsqa.com/angularJs-protractor/registration-login-example/#/login')
    cy.get('#username').type(infos[0])
    cy.get('#password').type(infos[1])
    cy.get('.btn-primary').click()
    cy.get('h1.ng-binding').should("contain.text", infos[0])
  })

  it("teste de delete com sucesso", () => {
    let infos = criarUser()
    cy.login(infos[0], infos[1])
    cy.get('h1.ng-binding').should("contain.text", infos[0])
    cy.get('.ng-binding > a').click()
    cy.get('.btn').click()
    cy.login(infos[0], infos[1])
    cy.get('.ng-binding').should("contain.text", "Username or password is incorrect")
  })

})

function criarUser(){
  let hora = new Date().getHours().toString()
  let minute = new Date().getMinutes().toString()
  let seg = new Date().getSeconds().toString()
  let id = hora + minute + seg + "id"
  let senha = hora + minute + seg + "senha"
  let infos = [id, senha]

  cy.visit('https://globalsqa.com/angularJs-protractor/registration-login-example/#/login')
  cy.get('.btn-link').click()
  cy.get('#firstName').type(id)
  cy.get('#Text1').type(id)
  cy.get('#username').type(id)
  cy.get('#password').type(senha)
  cy.get('.btn-primary').click()
  cy.get('.ng-binding').should("contain.text", "Registration successful")
  return infos
}