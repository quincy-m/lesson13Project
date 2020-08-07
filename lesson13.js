var employeeManager = require('../testAssests/lesson13Assests')
var searchBarTest = require('../testAssests/lesson13Assests')
var employees = {}
module.exports = {
    beforeEach: browser => {
        employees = browser.page.lesson13Page()
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