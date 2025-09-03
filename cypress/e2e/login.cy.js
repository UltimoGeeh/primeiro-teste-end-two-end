

describe("Tela de login", function(){
    beforeEach(function(){
        cy.visit("https://www.hipertrofia.org/forum")
    })

    it("Deve fazer o login com sucesso", function(){
        cy.get('#elSignInLink').click("")
        cy.get('#login_popup_email').type('marcela-barreira@tuamaeaquelaursa.com')
        cy.get('#login_popup_password').type('~9E;E9=+U;$g_r3')
        cy.get(".ipsButton.ipsButton--primary.i-width_100p").click()
        

       // cy.url().should('include', 'sucesso.html')

        //cy.contains('Você logou com sucesso!').should('be.visible')
    });
});
    /* it("Deve falhar o login ", function(){
        cy.get('#useremail').type('usuario_errado');
        cy.get('#password').type('senha_errada');

        cy.get('button').click();

       cy.get('#errorMessage').should('contain', 'Algo deu errado. Por favor, tente novamente.')
    });
});
*/

