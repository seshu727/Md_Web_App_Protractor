describe('My Direct Plan_Test Scenario 2', function() {
	
  it('Check the Error Validation for Exceeded Amount', function() {
	  
	browser.ignoreSynchronization = true;
	element(by.xpath('/html/body/app-root/app-restricted/div/mat-drawer-container/mat-drawer/div')).all(by.tagName('button')).get(2).click();
	browser.driver.sleep(8000);
	element(by.id('mat-select-6')).click();
    browser.sleep(5000);
    element(by.id('mat-option-22')).click();
    element(by.xpath('/html/body/app-root/app-restricted/div/mat-drawer-container/mat-drawer-content/div[2]/app-recipient/app-review-expenses/div/div[2]/div[1]/app-expenses-filter/mat-card/mat-card-content/form/div/button[2]')).click();
    browser.sleep(4000);
	element(by.xpath('/html/body/app-root/app-restricted/div/mat-drawer-container/mat-drawer-content/div[2]/app-recipient/app-review-expenses/div/div[2]/div[2]/div[2]/div')).all(by.tagName('mat-card')).get(1).click();
	browser.sleep(4000);
	element(by.name('amountCtrl')).sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
    element(by.name('amountCtrl')).sendKeys("15000");
    browser.sleep(2000);
    var submit=element(by.buttonText('Yes, Save anyway'));
    browser.actions().mouseMove(submit).click().perform();
    browser.sleep(4000);
  });
});