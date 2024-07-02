// cypress/support/functions/dynamicTableFunctions.js
import selectors from '../constants/selector';
import paths from '../constants/paths';

export function visitDynamicTablePage() {
  cy.visit(paths.dynamicTablePageUrl);
}

export function clickTableDataButton() {
  cy.contains(selectors.tableDataButton).click();
}

export function clearJsonDataTextarea() {
  cy.get(selectors.jsondataTextarea).clear();
}

export function enterJsonData(jsonData) {
  cy.get(selectors.jsondataTextarea).type(JSON.stringify(jsonData), { parseSpecialCharSequences: false });
}

export function enterCaption(captionText) {
  cy.get(selectors.captionInput).clear().type(captionText);
}

export function clickRefreshTableButton() {
  cy.get(selectors.refreshTableButton).click();
}

export function getTableRows() {
  return cy.get(selectors.tableRows);
}

export function assertTableContent(testData) {
  getTableRows().each(($row, index) => {
    if (index > 0 && index <= testData.length) { // Skip the header row
      const rowData = testData[index -1 ];
      cy.wrap($row).find('td').eq(0).should('contain.text', rowData.name);
      cy.wrap($row).find('td').eq(1).should('contain.text', rowData.age.toString());
      cy.wrap($row).find('td').eq(2).should('contain.text', rowData.gender);
    }
  });
}
export function getCaption() {
  return cy.get(selectors.captionInput);
}
