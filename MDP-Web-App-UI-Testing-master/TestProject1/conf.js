var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

//var HtmlReporter = require('protractor-beautiful-reporter');
exports.config = {
  directConnect: true,
  seleniumAddress: 'http://localhost:4444/wd/hub',
  multiCapabilities: [
	  { 'browserName': 'chrome'}],
	//  {'browserName': 'chrome'}],
  //specs: ['example-spec.js'],
  //specs:['./AddExpenses/Expenses-spec.js'],
 // specs:['./AddExpenses/MBRules-spec.js'],
  suites : {
    
    Add_AllTypeExpense     : ['./AddExpenses/AddAllExpenses-spec.js'],
    MBRules                : ['./AddExpenses/MBRules-spec.js'],
    Add_Attachments        : ['./AddExpenses/AddAttachments-spec.js'],
    Edit_Update_Expenses   : ['./AddExpenses/EditExpenses-spec.js'],
    Submit_Expense         : ['./AddExpenses/Submit_exp-spec.js'],
    Invoices               : ['./AddExpenses/Invoices-spec.js'],

  },
  jasmineNodeOpts: {
	    showColors: true, // Use colors in the command line report.
	    defaultTimeoutInterval:120000,
	  },
    onPrepare: function() {
      browser.manage().window().maximize();
      browser.manage().timeouts().implicitlyWait(6000);
      jasmine.getEnv().addReporter(
        new Jasmine2HtmlReporter({
          savePath: './test/reports/'
        })
      );
   }
};