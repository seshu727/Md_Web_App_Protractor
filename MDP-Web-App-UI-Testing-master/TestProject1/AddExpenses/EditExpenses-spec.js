var EditExpenses = require('../AddExpenses/Expenses.po.js');
    var Edit_Exp = new EditExpenses();
    browser.ignoreSynchronization = true;
    var png="C://Users//Administrator//Desktop//Automation files//2_download.png"

    describe('Go to Manage Expenses And Edit & Update all Type of expenses', function() {
      
      it('should Login with Valid use Details', function() {
            // var AddExpensesPage = new homePage();
            Edit_Exp.get();
             browser.sleep(3000);
             expect(Edit_Exp.getGreeting()).toEqual('Sign In');
             Edit_Exp.Login('ankal.torlapati+106@dartssolutions.com','Tester5555');
             browser.sleep(5000);
             Edit_Exp.AddExpenseTab(2);
             browser.sleep(4000);
           });
     it('Edit and Update Adminstration Fee Expense',function(){
           element(by.id('mat-select-6')).click();
           browser.sleep(5000);
           element(by.id('mat-option-23')).click();
           element(by.buttonText('Apply')).click();
           browser.sleep(4000);
           Edit_Exp.Manage_exp_list(0);
           element(by.name('expenseDateCtrl')).sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
           element(by.name('expenseDateCtrl')).sendKeys('29/9/2019');
           element(by.name('paidToCtrl')).sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
           element(by.name('paidToCtrl')).sendKeys('Sunder Pichai');
           element(by.name('amountCtrl')).sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
           element(by.name('amountCtrl')).sendKeys("15");
            var amtValue=element(by.name('amountCtrl'));
           expect(amtValue.getAttribute('value')).toEqual('15');
           Edit_Exp.Save_button();
           browser.sleep(2000);   
       });

    it('Edit and Update Advertising (Special Services Worker)',function(){
        element(by.id('mat-select-6')).click();
        browser.sleep(5000);
        element(by.id('mat-option-24')).click();
        element(by.buttonText('Apply')).click();
        browser.sleep(4000);
        Edit_Exp.Manage_exp_list(0);
        browser.sleep(2000);
        element(by.name('descriptionCtrl')).sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
        element(by.name('descriptionCtrl')).sendKeys("Updated Description");
        element(by.name('amountCtrl')).sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
        element(by.name('amountCtrl')).sendKeys("13");
        var amtValue=element(by.name('amountCtrl'));
        expect(amtValue.getAttribute('value')).toEqual('13');
        Edit_Exp.Save_button();
        browser.sleep(2000);   
       });

    it('Edit and Update BasicSupplies)',function(){
        element(by.id('mat-select-6')).click();
        browser.sleep(5000);
        element(by.id('mat-option-25')).click();
        element(by.buttonText('Apply')).click();
        browser.sleep(4000);
        Edit_Exp.Manage_exp_list(0);
        browser.sleep(2000);
        element(by.name('expenseDateCtrl')).sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
        element(by.name('expenseDateCtrl')).sendKeys("10/10/2019");
        element(by.name('amountCtrl')).sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
        element(by.name('amountCtrl')).sendKeys("11");
        var amtValue=element(by.name('amountCtrl'));
        expect(amtValue.getAttribute('value')).toEqual('11');
        Edit_Exp.Save_button();
        browser.sleep(2000);
         
       });
    it('Edit and Update Gym Membership Fees)',function(){
        element(by.id('mat-select-6')).click();
        browser.sleep(5000);
        element(by.id('mat-option-26')).click();
        element(by.buttonText('Apply')).click();
        browser.sleep(4000);
        Edit_Exp.Manage_exp_list(0);
        browser.sleep(2000);
        element(by.name('amountCtrl')).sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
        element(by.name('amountCtrl')).sendKeys("19");
        var amtValue=element(by.name('amountCtrl'));
        expect(amtValue.getAttribute('value')).toEqual('19');
        Edit_Exp.Save_button();
        browser.sleep(2000);   
       });
    it('Edit and Update Mainstream Camp / Recreation Programs)',function(){
        element(by.id('mat-select-6')).click();
        browser.sleep(5000);
        element(by.id('mat-option-27')).click();
        element(by.buttonText('Apply')).click();
        browser.sleep(4000);
        Edit_Exp.Manage_exp_list(0);
        browser.sleep(2000);
        element(by.name('amountCtrl')).sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
        element(by.name('amountCtrl')).sendKeys("20");
        var amtValue=element(by.name('amountCtrl'));
        expect(amtValue.getAttribute('value')).toEqual('20');
        Edit_Exp.Save_button();
        browser.sleep(2000);   
       });
     it('Edit and Update Membership Fees (Special Needs Association))',function(){
        element(by.id('mat-select-6')).click();
        browser.sleep(5000);
        element(by.id('mat-option-28')).click();
        element(by.buttonText('Apply')).click();
        browser.sleep(4000);
        Edit_Exp.Manage_exp_list(1);
        browser.sleep(2000);
        element(by.name('amountCtrl')).sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
        element(by.name('amountCtrl')).sendKeys("25");
        var amtValue=element(by.name('amountCtrl'));
        expect(amtValue.getAttribute('value')).toEqual('25');
        Edit_Exp.Save_button();
        browser.sleep(2000);   
       });
    it('Edit and Update Specialized Camps / Recreation Programs)',function(){
        element(by.id('mat-select-6')).click();
        browser.sleep(5000);
        element(by.id('mat-option-29')).click();
        element(by.buttonText('Apply')).click();
        browser.sleep(4000);
        Edit_Exp.Manage_exp_list(0);
        browser.sleep(2000);
        element(by.name('amountCtrl')).sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
        element(by.name('amountCtrl')).sendKeys("30");
        var amtValue=element(by.name('amountCtrl'));
        expect(amtValue.getAttribute('value')).toEqual('30');
        Edit_Exp.Save_button();
        browser.sleep(2000);   
       });
       
    it('Edit and Update Training)',function(){
        element(by.id('mat-select-6')).click();
        browser.sleep(5000);
        element(by.id('mat-option-30')).click();
        element(by.buttonText('Apply')).click();
        browser.sleep(4000);
        Edit_Exp.Manage_exp_list(0);
        browser.sleep(2000);
        element(by.name('fromDate')).sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
        element(by.name('fromDate')).sendKeys(9/1/2019);
        element(by.name('toDate')).sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
        element(by.name('toDate')).sendKeys(10/1/2019);
        element(by.name('descriptionCtrl')).sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
        element(by.name('descriptionCtrl')).sendKeys("Automation Training");
        element(by.name('amountCtrl')).sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
        element(by.name('amountCtrl')).sendKeys("35");
        var amtValue=element(by.name('amountCtrl'));
        expect(amtValue.getAttribute('value')).toEqual('35');
        Edit_Exp.Save_button();
        browser.sleep(2000);   
       });
    it('Edit and Update Daycare/Nursery School)',function(){
        element(by.id('mat-select-6')).click();
        browser.sleep(5000);
        element(by.id('mat-option-31')).click();
        element(by.buttonText('Apply')).click();
        browser.sleep(4000);
        Edit_Exp.Manage_exp_list(0);
        browser.sleep(2000);
        var RadioButton=element.all(by.tagName('mat-radio-button'));
        RadioButton.get(1).click();
        element(by.name('noHoursCtrl')).sendKeys('05:');
        element(by.name('rateCtrl')).sendKeys('9');
        var amtValue=element(by.name('totalCost'));
        expect(amtValue.getAttribute('value')).toEqual('45');
        Edit_Exp.Save_button();
        browser.sleep(4000); 
        Edit_Exp.RemoveExpense();
        Edit_Exp.removeBtn();
        browser.sleep(2000); 
       });
     it('Edit and Update Extraordinary Childcare (Children aged 12 and above))',function(){
        element(by.id('mat-select-6')).click();
        browser.sleep(5000);
        element(by.id('mat-option-32')).click();
        element(by.buttonText('Apply')).click();
        browser.sleep(4000);
        Edit_Exp.Manage_exp_list(0);
        browser.sleep(2000);
        var RadioButton=element.all(by.tagName('mat-radio-button'));
        RadioButton.get(1).click();
        element(by.name('noHoursCtrl')).sendKeys('05:');
        element(by.name('rateCtrl')).sendKeys('9');
        var amtValue=element(by.name('totalCost'));
        expect(amtValue.getAttribute('value')).toEqual('45');
        Edit_Exp.Save_button();
        browser.sleep(2000); 
        Edit_Exp.RemoveExpense();
        Edit_Exp.removeBtn();
        browser.sleep(2000);   
       });
    it('Edit and Update Home Keeping)',function(){
        element(by.id('mat-select-6')).click();
        browser.sleep(5000);
        element(by.id('mat-option-33')).click();
        element(by.buttonText('Apply')).click();
        browser.sleep(4000);
        Edit_Exp.Manage_exp_list(0);
        browser.sleep(2000);
        element(by.name('amountCtrl')).sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
        element(by.name('amountCtrl')).sendKeys("35");
        var amtValue=element(by.name('amountCtrl'));
        expect(amtValue.getAttribute('value')).toEqual('35');
        Edit_Exp.Save_button();
        browser.sleep(2000);    
       });
     it('Edit and Update Manual Worker process)',function(){
        element(by.id('mat-select-6')).click();
        browser.sleep(5000);
        element(by.id('mat-option-34')).click();
        element(by.buttonText('Apply')).click();
        browser.sleep(4000);
        Edit_Exp.Manage_exp_list(0);
        browser.sleep(2000);
        var RadioButton=element.all(by.tagName('mat-radio-button'));
        RadioButton.get(0).click();
        element(by.name('totalCost')).sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
        element(by.name('totalCost')).sendKeys("25");
        var amtValue=element(by.name('totalCost'));
        expect(amtValue.getAttribute('value')).toEqual('25');
        Edit_Exp.Save_button();
        browser.sleep(2000);    
       });
     it('Edit and Update Nursing (Medically Fragile Children))',function(){
        element(by.id('mat-select-6')).click();
        browser.sleep(5000);
        element(by.id('mat-option-35')).click();
        element(by.buttonText('Apply')).click();
        browser.sleep(4000);
        Edit_Exp.Manage_exp_list(1);
        browser.sleep(2000);
        element(by.name('nameOfNurseCtrl')).sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
        element(by.name('nameOfNurseCtrl')).sendKeys("Wagih");
        element(by.name('totalCost')).sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
        element(by.name('totalCost')).sendKeys("10");
        var amtValue=element(by.name('totalCost'));
        expect(amtValue.getAttribute('value')).toEqual('10');
        browser.sleep(2000);
       // Edit_Exp.attachment(png);
        Edit_Exp.Save_button();
        browser.sleep(2000);    
       });


    });