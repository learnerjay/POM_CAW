// cypress/support/constants/selectors.js
const selectors = {
    tableDataButton: 'Table Data',
    jsondataTextarea: 'textarea#jsondata',
    captionInput: '#caption',
    refreshTableButton: '#refreshtable',
    tableRows: 'table tr',
    tableCell: (row, col) => `table tr:eq(${row}) td:eq(${col})`
  };
  
  export default selectors;
  