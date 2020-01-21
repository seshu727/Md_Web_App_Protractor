describe('My Direct Plan_Test Scenario 1', function() {
	var expense=element(by.xpath('//*[@id="mat-dialog-title-0"]'));
  it('Login into MDP', function() {
	    
	browser.ignoreSynchronization = true;
    browser.get('http://qa2.mydirectplan.com/#/login');
  //  browser.sleep(2000);
    browser.manage().window().maximize();
    var login_b= element(by.xpath('/html/body/app-root/app-login-page/div/div/div[2]')).element(by.tagName('mat-card-title'));
    browser.actions().mouseMove(login_b).perform();
    expect(login_b.getText()).toEqual('Sign In');
 //  element(by.xpath('/html/body/app/div[1]/div/div/div/ng-component/form/div[1]/input')).click();
    element(by.name('email')).sendKeys("ankal.torlapati+106@dartssolutions.com");
    element(by.id('mat-input-1')).sendKeys("Tester5555");
    element(by.xpath('/html/body/app-root/app-login-page/div/div/div[2]/mat-card/mat-card-content/form/div[2]/button/span/span')).click();
    browser.sleep(10000);
    
    element(by.xpath('/html/body/app-root/app-restricted/div/mat-drawer-container/mat-drawer/div')).all(by.tagName('button')).get(1).click();
    browser.sleep(6000);
  });
  it('Add Adminstrator fee Expense', function() {
    //Add Adminstrator fee Expense code//
   var adminstrator= element(by.xpath('/html/body/app-root/app-restricted/div/mat-drawer-container/mat-drawer-content/div[2]/app-recipient/app-add-expenses/div/app-expenses-types-list/mat-list/mat-list-item[2]/div/button'));
   browser.actions().mouseMove(adminstrator).click().perform();
     browser.sleep(5000);
   // var expense=element(by.xpath('//*[@id="mat-dialog-title-0"]'));
    browser.actions().mouseMove(expense).perform();
    expect(expense.getText()).toEqual('Administration Fee');
    element(by.name('expenseDateCtrl')).sendKeys("9/1/2019");
    element(by.id('mat-input-3')).sendKeys("Akhil Torlapati");
    element(by.id('mat-input-4')).sendKeys("Testing purpose description");
    element(by.id('mat-input-5')).sendKeys("10");
    element(by.xpath('//*[@id="mat-dialog-0"]/app-expense/form/mat-dialog-actions/button[2]')).click();
    browser.sleep(3000);
    var sub=element(by.xpath('//*[@id="mat-dialog-1"]/app-expense-warning/mat-dialog-actions/button[2]'));
    sub.click();
    browser.sleep(5000);
  });
  it('Manage expense-Select saved Expense', function() {
    //Manage expense //
    element(by.xpath('/html/body/app-root/app-restricted/div/mat-drawer-container/mat-drawer/div')).all(by.tagName('button')).get(2).click();
    //var Manage_expense=element(by.tagName('h5'));
    //browser.actions().mouseMove(Manage_expense).perform();
   // expect(Manage_expense.getText()).toEqual('ADD SSAH EXPENSES');
   expect(element(by.xpath('/html/body/app-root/app-restricted/div/mat-drawer-container/mat-drawer-content/div[2]')).element(by.tagName('h5')).getText()).toEqual('ADD SSAH EXPENSES');
    browser.sleep(4000);
    element(by.id('mat-select-6')).click();
    browser.sleep(5000);
    element(by.id('mat-option-23')).click();
    element(by.xpath('/html/body/app-root/app-restricted/div/mat-drawer-container/mat-drawer-content/div[2]/app-recipient/app-review-expenses/div/div[2]/div[1]/app-expenses-filter/mat-card/mat-card-content/form/div/button[2]')).click();
    browser.sleep(8000); 
    });
   it('Edit and Update the Expense', function() {
	
	  element(by.xpath('/html/body/app-root/app-restricted/div/mat-drawer-container/mat-drawer-content/div[2]/app-recipient/app-review-expenses/div/div[2]/div[2]/div[2]')).all(by.tagName('mat-card')).get(1).click();
	  browser.sleep(5000);
    //Edit expense date and amount//
    //var expense1=element(by.xpath('//*[@id="mat-dialog-title-1"]'));
   // browser.actions().mouseMove(expense1).perform();
    //expect(expense1.getText()).toEqual('Administration Fee');
    element(by.name('expenseDateCtrl')).sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
    element(by.name('expenseDateCtrl')).sendKeys('9/3/2019');
    
    element(by.name('amountCtrl')).sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
    element(by.name('amountCtrl')).sendKeys("15");
    browser.sleep(2000);
    element.all(by.buttonText('Save')).first().click()
    browser.sleep(5000);
    var submit=element.all(by.buttonText('Save')).last();
    browser.actions().mouseMove(submit).click().perform();
    browser.sleep(4000);
    //Select expense//
   element(by.xpath('/html/body/app-root/app-restricted/div/mat-drawer-container/mat-drawer-content/div[2]/app-recipient/app-review-expenses/div/div[2]/div[2]/div[2]/div')).all(by.tagName('mat-checkbox')).get(1).click();
   browser.sleep(5000);
    });
  it('Generate Invoice for Selected Expense', function() { 
   // element(by.xpath('/html/body/app-root/app-restricted/div/mat-drawer-container/mat-drawer-content/div[2]/app-recipient/app-review-expenses/div/div[2]/div[2]/div[2]/div')).all(by.tagName('mat-checkbox')).get(2).click();
    expect(element(by.xpath('/html/body/app-root/app-restricted/div/mat-drawer-container/mat-drawer-content/div[2]')).element(by.tagName('h5')).getText()).toEqual('MANAGE EXPENSES');
    browser.driver.sleep(5000);
    element(by.buttonText('Create Invoice')).click();
    browser.driver.sleep(4000);
    element(by.name('approval')).click();
    element(by.buttonText('Next')).click();
    browser.driver.sleep(12000);
    element(by.buttonText('Submit to Regional Office')).click();
    browser.driver.sleep(12000);
    });
  it('Verify Submitted Invoice ', function() { 
     element(by.xpath('/html/body/app-root/app-restricted/div/mat-drawer-container/mat-drawer/div')).all(by.tagName('button')).get(3).click();
     browser.driver.sleep(5000);
     expect(element(by.xpath('/html/body/app-root/app-restricted/div/mat-drawer-container/mat-drawer-content/div[2]/app-recipient/app-invoices/div/div[1]/app-page-header/h5')).getText()).toEqual('INVOICES');
     element(by.xpath('/html/body/app-root/app-restricted/div/mat-drawer-container/mat-drawer-content/div[2]/app-recipient/app-invoices/div/div[2]/div[2]')).all(by.tagName('mat-card')).get(0).click();
     browser.driver.sleep(6000);
    }); 
   it('Check the Expense exceeds Error Validation ', function() { 
        browser.refresh();
    	element(by.xpath('/html/body/app-root/app-restricted/div/mat-drawer-container/mat-drawer/div')).all(by.tagName('button')).get(2).click();
    	browser.driver.sleep(8000);
    	var dropdown =element(by.xpath('/html/body/app-root/app-restricted/div/mat-drawer-container/mat-drawer-content/div[2]/app-recipient/app-review-expenses/div/div[2]/div[1]/app-expenses-filter/mat-card/mat-card-content/form/mat-form-field[2]'));
    	browser.actions().mouseMove(dropdown).click().perform();
        browser.sleep(6000);
        element(by.id('cdk-overlay-0')).all(by.tagName('mat-option')).get(2).click();
       // element(by.xpath('//*[@id="mat-option-22"]')).click();
        element(by.xpath('/html/body/app-root/app-restricted/div/mat-drawer-container/mat-drawer-content/div[2]/app-recipient/app-review-expenses/div/div[2]/div[1]/app-expenses-filter/mat-card/mat-card-content/form/div/button[2]')).click();
        browser.sleep(4000);
    	element(by.xpath('/html/body/app-root/app-restricted/div/mat-drawer-container/mat-drawer-content/div[2]/app-recipient/app-review-expenses/div/div[2]/div[2]/div[2]/div')).all(by.tagName('mat-card')).get(1).click();
      browser.sleep(4000);
    	element(by.name('amountCtrl')).sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
        element(by.name('amountCtrl')).sendKeys("15000");
        browser.sleep(2000);
        element.all(by.buttonText('Save')).first().click()
        browser.sleep(5000);
        var submit=element.all(by.buttonText('Save')).last();
        browser.actions().mouseMove(submit).click().perform();
        browser.sleep(4000);
        var data= element(by.xpath('/html/body/div[2]/div[3]')).element(by.tagName('span'));
       // var data = element(by.xpath('//*[@id="cdk-overlay-5"]/snack-bar-container'));
        browser.actions().mouseMove(data).perform();
        expect(data.getText()).toEqual('Expense exceeds SSAH funds available. If you have additional funds available, please update your "Total Budget" in "Account Settings--> Fund Settings" or you can reduce the amount of your claim.');
        
    });
});