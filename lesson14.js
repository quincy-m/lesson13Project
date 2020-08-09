var employeeManager = require('../testAssets/lesson14Assets')
var employees = {}
module.exports = {
    beforeEach: browser => {
        employees = browser.page.lesson14Page()
        employees.navigate()
    },
    after: browser => {
        employees.end()
    },

'New Employee Test': browser => {
    employeeManager.forEach(hello => {
        employees.newEmployeeTest(hello)
    })
    },

'Search Bar Test': browser => {
    employees
    .searchBarTest()
}
}