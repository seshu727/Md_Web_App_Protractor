var SSAHInvoicePage=function(){

    //**Invoice filter  */

    var filterBy_Status=element(by.xpath('/html/body/app-root/app-restricted/div/mat-drawer-container/mat-drawer-content/div[2]/app-recipient/app-invoices/div/div[3]/div[1]/app-invoices-filter/mat-card')).element(by.tagName('mat-select'));
    var selectOption=element(by.xpath('/html/body/div[2]')).all(by.tagName('mat-option'));
    var ApplyBtn=element(by.buttonText('Apply'));
   
    //*****Invoices list********* */
    var invoice_ilst=element(by.xpath('/html/body/app-root/app-restricted/div/mat-drawer-container/mat-drawer-content/div[2]/app-recipient/app-invoices/div/div[3]/div[2]')).all(by.tagName('section'));
  
    // ***Inoice details page*****//
    var Inv_Details=element(by.xpath('/html/body/app-root/app-restricted/div/mat-drawer-container/mat-drawer-content/div[2]/app-recipient/app-invoice-details/section/div[2]/div/app-ssah-invoice-details/mat-card/mat-card-content')).all(by.tagName('div'));

    //***Filter by dates ******/
    var fromDate=element(by.name('fromDate'));
    var ToDate=element(by.name('toDate'));
    
  //-------------------*****************************---------------------------------------//  

  this.filterInvoice=function(ind){

    filterBy_Status.click();
    selectOption.get(ind).click();
    browser.actions().mouseMove(ApplyBtn).click().perform();
  }

  this.InvoicesList=function(li){
      invoice_ilst.get(li).click();
  }

  this.InvoiceDetails=function(num,num2){
    return Inv_Details.get(num).all(by.tagName('span')).get(num2).getText();
  }

  this.DownloadBtn=function(ID){
      invoice_ilst.get(ID).element(by.tagName('button')).click();
  }

  this.download=function(){
      element(by.buttonText('Download')).click();
  }
  this.InvoiceNumber=function(){
      return element(by.xpath('/html/body/app-root/app-restricted/div/mat-drawer-container/mat-drawer-content/div[2]/app-recipient/app-invoice-details/section/div[2]/div/app-ssah-invoice-details/mat-card/mat-card-title/span/span')).getText();
  }
  this.SubmittedAmt=function(){
      return element(by.xpath('/html/body/app-root/app-restricted/div/mat-drawer-container/mat-drawer-content/div[2]/app-recipient/app-invoice-details/section/div[2]/div/app-ssah-invoice-details/mat-card/mat-card-content/div/app-invoice-expense-card/mat-card/div/div[3]/span[2]')).getText();
  }
  this.dateFilter=function(date1,date2){
    fromDate.sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
    fromDate.sendKeys(date1);
    browser.sleep(2000);
    ToDate.sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
    ToDate.sendKeys(date2);
    ApplyBtn.click();
  }
  this.SubmitedDate=function(li,div,value){
   return invoice_ilst.get(li).all(by.tagName('div')).get(div).all(by.tagName('span')).get(value).getText();
  }




};

module.exports = SSAHInvoicePage