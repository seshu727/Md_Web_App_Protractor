var Submit_Exp_Page = function() {

  
   //********Expense filter ******//
   var filter_all= element(by.id('mat-select-6'));
   var selectOption=element(by.xpath('/html/body/div[2]/div[1]')).all(by.tagName('mat-option'));
   var ApplyBtn=element(by.buttonText('Apply'));
   
   //*******Generate invoice ********** */
   var checkbox= element(by.xpath('/html/body/app-root/app-restricted/div/mat-drawer-container/mat-drawer-content/div[2]/app-recipient/app-review-expenses/div/div[2]/div[2]/div[2]/div')).all(by.tagName('mat-checkbox'));
   var CretaeInvoiceBtn=element(by.buttonText('Create Invoice'));
   var Disclimar_check=element(by.name('approval')); 
   var NextBtn=element(by.buttonText('Next'));
   var ReginalOfficeBtn=element(by.buttonText('Submit to Regional Office'));  
   var downloadBtn=element(by.buttonText(' Download '));
//----------------------------------------********************-----------------------//

this.filterExpense=function(ind){  //Expense Filter //
    filter_all.click();
    browser.sleep(4000);
    selectOption.get(ind).click();
    ApplyBtn.click();
}

this.selectExpense=function(index){
    checkbox.get(index).click();
    /*if (checkbox.get(1).isEnabled()){
        checkbox.get(2).click();
        browser.sleep(2000);   } else{
        checkbox.get(1).click();
  //  } */
}

this.GenerateInvoice=function(){
    CretaeInvoiceBtn.click();
    Disclimar_check.click();
    NextBtn.click();
    browser.sleep(12000);
    expect(ReginalOfficeBtn.isEnabled()).toBe(true);
    ReginalOfficeBtn.click();
    browser.sleep(13000);
}

this.DownloadInvoice=function(){
    CretaeInvoiceBtn.click();
    Disclimar_check.click();
    NextBtn.click();
    browser.sleep(12000);
    expect(element(by.buttonText('Download')).isEnabled()).toBe(true);
    var submit1= element.all(by.buttonText('Download')).first();
    browser.actions().mouseMove(submit1).click().perform();
    var submit=element.all(by.buttonText('Download')).last();
    browser.sleep(1000);
    browser.actions().mouseMove(submit).click().perform();
    browser.sleep(13000);
}





};

module.exports = Submit_Exp_Page