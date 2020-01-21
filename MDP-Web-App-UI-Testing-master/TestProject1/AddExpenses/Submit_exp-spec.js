var Submit_Expense =  require('../AddExpenses/Submit_Exp.po.js');
var ExpensesPage= require('../AddExpenses/Expenses.po.js');
    var Submit = new Submit_Expense();
    var Exp_Page=new ExpensesPage();
    browser.ignoreSynchronization = true;

    var filename = 'invoices.pdf';
    var downloadDirectory='C://Users//Administrator//Downloads//myfiles';

    describe('Submit/Download the Expenses', function() {
      
        /*it('should Login with Valid use Details', function() {
            // var AddExpensesPage = new homePage();
            Exp_Page.get();
             browser.sleep(3000);
             expect(Exp_Page.getGreeting()).toEqual('Sign In');
             Exp_Page.Login('ankal.torlapati+106@dartssolutions.com','Tester5555');
             browser.sleep(5000);
             Exp_Page.AddExpenseTab(2);
             browser.sleep(4000);
           });*/
         it('Submit Adminstration Fee expense ',function(){
            browser.sleep(2000);
            element(by.id('mat-select-6')).click();
            browser.sleep(3000);
            element(by.id('mat-option-23')).click();
            element(by.buttonText('Apply')).click();
            browser.sleep(2000);
            Submit.selectExpense(2);
            Submit.GenerateInvoice();
         });
         it ('Submit the Advertising (Special Services Worker) Expense',function(){
            element(by.id('mat-select-6')).click();
            browser.sleep(3000);
            element(by.id('mat-option-24')).click();
            element(by.buttonText('Apply')).click();
            browser.sleep(2000);
            Submit.selectExpense(1);
            Submit.GenerateInvoice();
         });
         it ('Submit the Basic Supplies Expense',function(){
            element(by.id('mat-select-6')).click();
            browser.sleep(3000);
            element(by.id('mat-option-25')).click();
            element(by.buttonText('Apply')).click();
            browser.sleep(2000);
            Submit.selectExpense(2);
            Submit.GenerateInvoice();
         });
         it ('Submit the Gym Membership Fees Expense',function(){
            element(by.id('mat-select-6')).click();
            browser.sleep(3000);
            element(by.id('mat-option-26')).click();
            element(by.buttonText('Apply')).click();
            browser.sleep(2000);
            Submit.selectExpense(1);
            Submit.GenerateInvoice();
         });  
         it ('Submit the Mainstream Camp / Recreation Programs Expense',function(){
            element(by.id('mat-select-6')).click();
            browser.sleep(3000);
            element(by.id('mat-option-27')).click();
            element(by.buttonText('Apply')).click();
            browser.sleep(2000);
            Submit.selectExpense(2);
            Submit.GenerateInvoice();
         });   
         it ('Submit the Membership Fees (Special Needs Association) Expense',function(){
            element(by.id('mat-select-6')).click();
            browser.sleep(3000);
            element(by.id('mat-option-28')).click();
            element(by.buttonText('Apply')).click();
            browser.sleep(2000);
            Submit.selectExpense(2);
            Submit.GenerateInvoice();
         }); 
         it ('Submit the Specialized Camps / Recreation Programs Expense',function(){
            element(by.id('mat-select-6')).click();
            browser.sleep(3000);
            element(by.id('mat-option-29')).click();
            element(by.buttonText('Apply')).click();
            browser.sleep(2000);
            Submit.selectExpense(1);
            Submit.GenerateInvoice();
         });   
         it ('Submit the Training Expense',function(){
            element(by.id('mat-select-6')).click();
            browser.sleep(3000);
            element(by.id('mat-option-30')).click();
            element(by.buttonText('Apply')).click();
            browser.sleep(2000);
            Submit.selectExpense(1);
            Submit.GenerateInvoice();
         }); 
         it ('Submit the Daycare/Nursery School Expense',function(){
            element(by.id('mat-select-6')).click();
            browser.sleep(3000);
            element(by.id('mat-option-31')).click();
            element(by.buttonText('Apply')).click();
            browser.sleep(2000);
            Submit.selectExpense(1);
            Submit.GenerateInvoice();
         });  
         it ('Submit the Extraordinary Childcare (Children aged 12 and above) Expense',function(){
            element(by.id('mat-select-6')).click();
            browser.sleep(3000);
            element(by.id('mat-option-32')).click();
            element(by.buttonText('Apply')).click();
            browser.sleep(2000);
            Submit.selectExpense(1);
            Submit.GenerateInvoice();
         });  
      it ('Submit the Home Keeping Expense',function(){
            element(by.id('mat-select-6')).click();
            browser.sleep(3000);
            element(by.id('mat-option-33')).click();
            element(by.buttonText('Apply')).click();
            browser.sleep(2000);
            Submit.selectExpense(1);
            Submit.GenerateInvoice();
         });    
      it ('Submit Nursing (Medically Fragile Children) Expense',function(){
            element(by.id('mat-select-6')).click();
            browser.sleep(3000);
            element(by.id('mat-option-35')).click();
            element(by.buttonText('Apply')).click();
            browser.sleep(2000);
            Submit.selectExpense(1);
            Submit.GenerateInvoice();
         });  
         
         it ('Download Nursing (Medically Fragile Children) Expense',function(){
            element(by.id('mat-select-6')).click();
            browser.sleep(3000);
            element(by.id('mat-option-35')).click();
            element(by.buttonText('Apply')).click();
            browser.sleep(2000);
            Submit.selectExpense(2);
            Submit.DownloadInvoice();
            browser.sleep(2000);
          /*  browser.driver.wait(function() {
                return fs.existsSync(downloadDirectory + filename);
            }, 30000).then(function() {
                expect(filename).toContain('invoices.pdf');
            });*/
         });                               
        });