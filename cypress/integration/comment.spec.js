describe('App', () => {
  
    beforeEach(() => {
      cy.visit('http://localhost:3000')
    }) // ADDED
    
  })

  describe('App', () => {

    beforeEach(() => {
      cy.visit('http://localhost:3000')
    })
    
    // test that app loads
    it("Loads the app", () => {
        const counter = cy.get('div.container'); // ADDED
    }) 

    // test number buttons display when clicked
    xit('should display 0 when 0 button is clicked', () => {
      cy.get('#number0').click();
      const runningTotal = cy.get('#running-total');
      runningTotal.should('contain', '0');
    })
    xit('should display 1 when 1 button is clicked', () => {
      cy.get('#number1').click();
      const runningTotal = cy.get('#running-total');
      runningTotal.should('contain', '1');
    })
    xit('should display 2 when 2 button is clicked', () => {
      cy.get('#number2').click();
      const runningTotal = cy.get('#running-total');
      runningTotal.should('contain', '2');
    })
    xit('should display 3 when 3 button is clicked', () => {
      cy.get('#number3').click();
      const runningTotal = cy.get('#running-total');
      runningTotal.should('contain', '3');
    })
    xit('should display 4 when 4 button is clicked', () => {
      cy.get('#number4').click();
      const runningTotal = cy.get('#running-total');
      runningTotal.should('contain', '4');
    })
    xit('should display 5 when 5 button is clicked', () => {
      cy.get('#number5').click();
      const runningTotal = cy.get('#running-total');
      runningTotal.should('contain', '5');
    })
    xit('should display 6 when 6 button is clicked', () => {
      cy.get('#number6').click();
      const runningTotal = cy.get('#running-total');
      runningTotal.should('contain', '6');
    })
    xit('should display 7 when 7 button is clicked', () => {
      cy.get('#number7').click();
      const runningTotal = cy.get('#running-total');
      runningTotal.should('contain', '7');
    })
    xit('should display 8 when 8 button is clicked', () => {
      cy.get('#number8').click();
      const runningTotal = cy.get('#running-total');
      runningTotal.should('contain', '8');
    })
    xit('should display 9 when 9 button is clicked', () => {
      cy.get('#number9').click();
      const runningTotal = cy.get('#running-total');
      runningTotal.should('contain', '9');
    })


    // test opperator click displays result of previous calculation
    xit('should display result of previous calc when "add" button clicked', () => {
      // 9 * 2 + => 18
      cy.get('#number9').click();
      cy.get('#operator-multiply').click();
      cy.get('#number2').click();
      cy.get('#operator-add').click();
      const runningTotal = cy.get('#running-total');
      runningTotal.should('contain', '18');
    })
    xit('should display result of previous calc when "subtract" button clicked', () => {
      // 10 / 2 - => 5
      cy.get('#number1').click();
      cy.get('#number0').click();
      cy.get('#operator-divide').click();
      cy.get('#number2').click();
      cy.get('#operator-subtract').click();
      const runningTotal = cy.get('#running-total');
      runningTotal.should('contain', '5');
    })
    xit('should display result of previous calc when "divide" button clicked', () => {
      // 9 + 2 / => 11
      cy.get('#number9').click();
      cy.get('#operator-add').click();
      cy.get('#number2').click();
      cy.get('#operator-divide').click();
      const runningTotal = cy.get('#running-total');
      runningTotal.should('contain', '11');
    })
    xit('should display result of previous calc when "multiply" button clicked', () => {
      // 12 - 11 * => 1
      cy.get('#number1').click();
      cy.get('#number2').click();
      cy.get('#operator-subtract').click();
      cy.get('#number1').click();
      cy.get('#number1').click();
      cy.get('#operator-multiply').click();
      const runningTotal = cy.get('#running-total');
      runningTotal.should('contain', '1');
    })


    // test multiple operations can be chained together
    xit('should be able to chain multople operations together', () => {
      // 9+2-3/4*5=10
      cy.get('#number9').click();
      cy.get('#operator-add').click();
      cy.get('#number2').click();
      cy.get('#operator-subtract').click();
      cy.get('#number3').click();
      cy.get('#operator-divide').click();
      cy.get('#number4').click();
      cy.get('#operator-multiply').click();
      cy.get('#number5').click();
      cy.get('#operator-equals').click();
      const runningTotal = cy.get('#running-total');
      runningTotal.should('contain', '10');
    })



    // Test a range of numbers display correctly
    xit('should display positive numbers correctly', () => {
      // 12 * 12 = 144
      cy.get('#number1').click();
      cy.get('#number2').click();
      cy.get('#operator-multiply').click();
      cy.get('#number1').click();
      cy.get('#number2').click();
      cy.get('#operator-equals').click();
      const runningTotal = cy.get('#running-total');
      runningTotal.should('contain', '144');
    })
    xit('should display negative numbers correctly', () => {
      // 3 - 6 = -3
      cy.get('#number3').click();
      cy.get('#operator-subtract').click();
      cy.get('#number6').click();
      cy.get('#operator-equals').click();
      const runningTotal = cy.get('#running-total');
      runningTotal.should('contain', '-3');
    })
    xit('should display decimal numbers correctly', () => {
      // 1 / 8 = 0.125
      cy.get('#number1').click();
      cy.get('#operator-divide').click();
      cy.get('#number8').click();
      cy.get('#operator-equals').click();
      const runningTotal = cy.get('#running-total');
      runningTotal.should('contain', '0.125');
    })


    xit('should display calculated very large numbers correctly', () => {
      // 999999999999999 * 999999999999999 = 
      cy.get('#number9').click();
      cy.get('#number9').click();
      cy.get('#number9').click();
      cy.get('#number9').click();
      cy.get('#number9').click();
      cy.get('#number9').click();
      cy.get('#number9').click();
      cy.get('#number9').click();
      cy.get('#number9').click();
      cy.get('#number9').click();
      cy.get('#number9').click();
      cy.get('#number9').click();
      cy.get('#number9').click();
      cy.get('#number9').click();
      cy.get('#number9').click();
      cy.get('#operator-multiply').click();
      cy.get('#number9').click();
      cy.get('#number9').click();
      cy.get('#number9').click();
      cy.get('#number9').click();
      cy.get('#number9').click();
      cy.get('#number9').click();
      cy.get('#number9').click();
      cy.get('#number9').click();
      cy.get('#number9').click();
      cy.get('#number9').click();
      cy.get('#number9').click();
      cy.get('#number9').click();
      cy.get('#number9').click();
      cy.get('#number9').click();
      cy.get('#number9').click();
      cy.get('#operator-equals').click();
      const runningTotal = cy.get('#running-total');
      runningTotal.should('contain', '9.99999999999998e+29');
    })


    xit('should display typed very large numbers correctly', () => {
      // 9999999999999999 should display 999999999999999
      cy.get('#number9').click();
      cy.get('#number9').click();
      cy.get('#number9').click();
      cy.get('#number9').click();
      cy.get('#number9').click();
      cy.get('#number9').click();
      cy.get('#number9').click();
      cy.get('#number9').click();
      cy.get('#number9').click();
      cy.get('#number9').click();
      cy.get('#number9').click();
      cy.get('#number9').click();
      cy.get('#number9').click();
      cy.get('#number9').click();
      cy.get('#number9').click();
      cy.get('#number9').click();
      const runningTotal = cy.get('#running-total');
      runningTotal.should('contain', '999999999999999');
    })

    it('should display infinity symbol when division is by zero', () => {
      cy.get('#number9').click();
      cy.get('#operator-divide').click();
      cy.get('#number0').click();
      cy.get('#operator-equals').click();
      const runningTotal = cy.get('#running-total');
      runningTotal.should('contain', '∞');
    })


  
  })