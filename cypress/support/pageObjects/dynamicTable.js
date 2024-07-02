// cypress/support/pageObjects/dynamicTablePage.js
import * as dynamicTableFunctions from '../function/dynamicTableFunction';


class DynamicTablePage {
    visit() {
      dynamicTableFunctions.visitDynamicTablePage();
    }
  
    clickTableDataButton() {
      dynamicTableFunctions.clickTableDataButton();
    }
  
    clearJsonDataTextarea() {
      dynamicTableFunctions.clearJsonDataTextarea();
    }
  
    enterJsonData(jsonData) {
      dynamicTableFunctions.enterJsonData(jsonData);
    }
  
    enterCaption(captionText) {
      dynamicTableFunctions.enterCaption(captionText);
    }
  
    clickRefreshTableButton() {
      dynamicTableFunctions.clickRefreshTableButton();
    }
  
    getTableRows() {
      return dynamicTableFunctions.getTableRows();
    }
  
    assertTableContent(testData) {
      dynamicTableFunctions.assertTableContent(testData);
    }

    getCaption() {
      return dynamicTableFunctions.getCaption();
    }
  }
  
  export default new DynamicTablePage();
  