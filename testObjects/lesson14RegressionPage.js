var employeeManager1 = {
    regression1: function(data) {
    this
    .click('@troyBarnes')
    .clearValue('@nameInput')
    .setValue('@nameInput','Troy Barnes Troy Barnes Troy Barnes Troy Barnes;')
    .click('@saveButton')
    .assert.elementPresent('@errorMessage')
    .clearValue('@nameInput')
    .setValue('@nameInput','Troy Barnes')
    .click('@saveButton')
    return this
}
}

var employeeManager2 = {
    regression2: function(data) {
    this
    .click('@gillianJacobs')
    .clearValue('@phoneInput')
    .setValue('@phoneInput', '1234567890')
    .click('@saveButton')
    .click('@troyBarnes')
    .click('@gillianJacobs')  
    .expect.element('@phoneInput').value.to.equal('1234567890')
    this
    .setValue('@phoneInput', '8932541267')
    .click('@saveButton')
    return this
}
}

var employeeManager3 = {
    regression3: function(data) {
    this
    .click('@brittaPerry')
    .expect.element('@idValue').not.to.contain.text('-')
    this
    .click('@troyBarnes')
    .expect.element('@idValue').not.to.contain.text('-')
    this
    .click('@gillianJacobs')
    .expect.element('@idValue').not.to.contain.text('-')
    return this
}
}

var employeeManager4 = {
    regression4: function(data) {
    this
    .click('@brittaPerry')
    .clearValue('@titleInput')
    .click('@gillianJacobs')
    .click('@brittaPerry')
    .expect.element('@titleInput').value.to.equal('therapist')
    return this
}
}

module.exports = {
    url: 'https://devmountain-qa.github.io/employee-manager-v2/build/index.html',
    commands: [employeeManager1, employeeManager2, employeeManager3, employeeManager4],
    elements: {
        troyBarnes: 'li[name="employee611"]',
        gillianJacobs: 'li[name="employee618"]',
        brittaPerry: 'li[name="employee616"]',
        idValue: 'span[name="employeeID"]',
        nameInput: 'input[name="nameEntry"]', 
        phoneInput: 'input[name="phoneEntry"]',
        titleInput: 'input[name="titleEntry"]',
        emailInput: 'input[name="emailEntry"]',
        saveButton: 'button[name="save"]',
        cancelButton: 'button[name="cancel"]',
        errorMessage: 'div[class="errorCard"]'

    }
}