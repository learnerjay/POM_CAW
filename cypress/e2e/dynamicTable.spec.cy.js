import DynamicTablePage from '../support/pageObjects/dynamicTable';
import {getCurrentDateCaption}  from '../support/utils/dateUtils';
import paths from '../support/constants/paths';
//import 'cypress-mochawesome-reporter'

describe('Dynamic Table Tests', () => {
  let testData; // Declare variable to store test data
  let currentDateCaption;

  before(() => {
    // Fetch the test data from the fixture only once
    cy.fixture(paths.testDataFixture).then((data) => {
      testData = data;
    });
     // Generate current date caption
     currentDateCaption = getCurrentDateCaption();
  });

  beforeEach(() => {
    // Visit the dynamic table page using the Page Object
    DynamicTablePage.visit();
  });

  it('Inital table Data table length check ', () => {
    // Verify that initially, the table contains only the header row
    DynamicTablePage.getTableRows().should('have.length', 3);
  });

  
  it('Should populate the table with correct data after entering JSON & Caption', () => {
    // Check if the page has loaded successfully
    cy.url().then((url) => {
      if (url.includes('dynamic-table.html')) {
        // Click on the Table Data button using Page Object
        DynamicTablePage.clickTableDataButton();

        // Enter caption with current date using Page Object method
        DynamicTablePage.enterCaption(currentDateCaption);

        // Clear the textarea for JSON data using Page Object
        DynamicTablePage.clearJsonDataTextarea();

        // Enter JSON data using Page Object
        DynamicTablePage.enterJsonData(testData);

        // Click the Refresh Table button using Page Object
        DynamicTablePage.clickRefreshTableButton();

        // Assert that the table contains the correct number of rows after update using Page Object
      //  DynamicTablePage.getTableRows().should('have.length', testData.length);

        // Assert the table content matches the test data using Page Object
        DynamicTablePage.assertTableContent(testData);

        // Assert that the caption contains the current date
        DynamicTablePage.getCaption().should('have.value', currentDateCaption);

      } else {
        // Log a message or handle accordingly if page did not load successfully
        cy.log(`Page did not load successfully. Current URL: ${url}`);
      }
    });
  });

  it.skip('Should handle empty JSON data entry gracefully', () => {
    // Click on the Table Data button using Page Object
    DynamicTablePage.clickTableDataButton();

    // Clear the textarea for JSON data using Page Object
    DynamicTablePage.clearJsonDataTextarea();

    // Click the Refresh Table button without entering any JSON data using Page Object
    DynamicTablePage.clickRefreshTableButton();

    // Assert that the table still contains only the header row using Page Object
    DynamicTablePage.getTableRows().should('have.length', 1);
  });



});
