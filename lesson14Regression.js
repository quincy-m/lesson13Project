var regression = {}
module.exports = {
    beforeEach: browser => {
        regression = browser.page.lesson14RegressionPage()
        regression.navigate()
    },
    after: browser => {
        regression.end()
    },

    'No Limit Entry Confirmation': browser => {
        regression
        .regression1()
    },

    'Not Saving Confirmation': browser => {
        regression
        .regression2()
    },

    'Negative ID Confirmation': browser => {
        regression
        .regression3()
    },

    'Changes Saved When Navigation Away Confirmation': browser => {
        regression
        .regression4()
    }
}