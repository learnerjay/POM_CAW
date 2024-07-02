// cypress/support/utils/dateUtils.js
export function getCurrentDateCaption() {
    const currentDate = new Date().toLocaleDateString();
    return `Dynamic Table - ${currentDate}`;
  }
  