var AddExpensesPage = function() {
    //Login page//
    var email = element(by.name('email'));
    var password = element(by.id('mat-input-1'));
    var SignIn =element(by.xpath('/html/body/app-root/app-login-page/div/div/div[2]/mat-card/mat-card-content/form/div[2]/button/span/span'))
    var login_b= element(by.xpath('/html/body/app-root/app-login-page/div/div/div[2]')).element(by.tagName('mat-card-title'));
 
    //Add Expenses //
    var Add_expense_tab=element(by.xpath('/html/body/app-root/app-restricted/div/mat-drawer-container/mat-drawer/div')).all(by.tagName('button'))
   // Expenses List //
   var Exp_list=element(by.xpath('/html/body/app-root/app-restricted/div/mat-drawer-container/mat-drawer-content/div[2]/app-recipient/app-add-expenses/div/app-expenses-types-list/mat-list')).all(by.tagName('mat-list-item')).all(by.tagName('button'));
   
   // ****SUPPORT WORKER 1:1******//
   var title=element(by.id('mat-dialog-title-0'));
   var start_date=element(by.name('fromDate'));  //mat-input-2//
   var End_date=element(by.name('toDate'));  //mat-input-3//
   var NameOf_Support_worker=element(by.name('workerCtrl'));
   var support_worker_list=element.all(by.tagName('mat-option'));
   var Total_Amount=element(by.name('totalCost'));

   ///****ADMINSTRATION FEE*** */
   var Expense_title=element(by.xpath('/html/body/div[3]/div[2]')).element(by.tagName("mat-dialog-container")).element(by.tagName('span'));
  
   //***Advertising (Special Services Worker)******* */
  
   var amount=element(by.name('amountCtrl'));
   var Description=element(by.name('descriptionCtrl'));
   var Adv_title=element(by.id('mat-dialog-title-1'));
 
   //*** Basic Supplies*****/
   var bdate=element(by.name('expenseDateCtrl'));
   var basic_title=element(by.id('mat-dialog-title-2'));
 
   //***Daycare/Nursery School*** */
   var paidTo=element(by.name('paidToCtrl'));
   var Daycare_title=element(by.id('mat-dialog-title-3'));
 
   //**Extraordinary Childcare (Children aged 12 and above) */
    var Ext_ChildTitle=element(by.id('mat-dialog-title-4'));

    //**Gym Membership Fees** */
    var Gym_Title=element(by.xpath('//*[@id="mat-dialog-title-5"]'));

    //**Home Keeping**** */
    var TypeOFTask=element(by.name('descriptionCtrl'));

    //**Mainstream Camp / Recreation Programs** */
    var payment_date=element(by.name('expenseDateCtrl'));

    //**MANUAL WORKER PROCESS*** */
    var service_provider=element(by.name('workerNameCtrl'));

    //*****Nursing (Medically Fragile Children) *//
    var nameOFNurse=element(by.name('nameOfNurseCtrl'));
    var ProfessionalID=element(by.name('idNumberCtrl'));

    //***Expense with hourly rate */
    var noofHours=element(by.name('noHoursCtrl'));
    var HourlyRate=element(by.name('rateCtrl'));
    var RadioButton=element.all(by.tagName('mat-radio-button'));

 //*** Attachment file upload  */
 
 var file=element(by.xpath('//*[@id="mat-dialog-0"]/app-expense/form/mat-dialog-content/div/app-expense-attachments')).element(by.tagName('input'));

 //** remove file delete button */
 var remove= element(by.xpath('//*[@id="mat-dialog-2"]/app-expense/form/mat-dialog-content/div')).all(by.tagName('mat-card'));

//*** Expense edit and upload duplicate file */
var quick_view=element(by.tagName('app-expenses-quick-review'));
var view=element(by.id('cdk-accordion-child-0')).all(by.tagName('mat-card'));

//** Duplicate file pop up  */
var popUp=element(by.tagName('mat-list-item')).element(by.tagName('p'));

//**Manage expenses Existed expenses list */

var Mang_exp_list=element(by.xpath('/html/body/app-root/app-restricted/div/mat-drawer-container/mat-drawer-content/div[2]/app-recipient/app-review-expenses/div/div[2]/div[2]/div[2]/div')).all(by.tagName('mat-card'));

//************ */ remove Expenses ***************///


//-------------------------------------***--------------------------------//
 this.get = function() {
    browser.get('http://qa2.mydirectplan.com/app/#/login');
    };
  this.Login = function(mail,pass) {
      email.sendKeys(mail);
      password.sendKeys(pass);
      SignIn.click();
    };
  this.getGreeting = function() {
      return login_b.getText(); //Sign in Text//
    };
  this.AddExpenseTab=function(index){
      Add_expense_tab.get(index).click(); // Side menu list//
  }

  this.RemoveExpense=function(ID){
     // Exp_list.get(ID).element(by.tagName('button')).click();
      element(by.xpath('/html/body/app-root/app-restricted/div/mat-drawer-container/mat-drawer-content/div[2]/app-recipient/app-review-expenses/div/div[2]/div[2]/div[2]/div/mat-card[1]/app-recipient-expense-card/div/section/div/app-recipient-ssah-expense-card/div/div[2]/div/button/span/mat-icon')).click();
  }
  this.removeBtn=function(){
      var rem=element(by.buttonText('Remove'));
      browser.actions().mouseMove(rem).click().perform();
      browser.sleep(2000);
      element(by.buttonText('Delete')).click();
  }
 this.Expense_list=function(ind){
     Exp_list.get(ind).click();   //Expense list//
 }
 this.SupportWorker=function(date1,date2,value1,Amount){  //SUPPORT WORKER ALL FIELDS CODE//
     start_date.sendKeys(date1);
     End_date.sendKeys(date2);
     NameOf_Support_worker.click();
     support_worker_list.get(value1).click();
     Total_Amount.sendKeys(Amount);
 }
 this.SupportWorker_HourlyRate=function(date1,date2,value1,value2,SHhrs,HR,Amount){  //SUPPORT WORKER ALL FIELDS CODE//
    start_date.sendKeys(date1);
    End_date.sendKeys(date2);
    NameOf_Support_worker.click();
    support_worker_list.get(value1).click();
    RadioButton.get(value2).click();
    noofHours.sendKeys(SHhrs);
    HourlyRate.sendKeys(HR);
    //Total_Amount.sendKeys(Amount);
 }
this.SupportWorker_Title=function(){
    return title.getText(); // Worker pop up title //
}

this.Adminstration_Fee=function(AFdate,AFName,AFDec,AFAmount){
    payment_date.sendKeys(AFdate);
    paidTo.sendKeys(AFName);
    Description.sendKeys(AFDec);
    amount.sendKeys(AFAmount);
}
this.Admins_fee_title=function(){
    browser.actions().mouseMove(Expense_title).perform();
    return Expense_title.getText();
}
this.Advertising_Expense=function(sdate,Edate,des,amt){ //**ADVERTISING(SPECIAL SERVICE WORKER CODE */
    start_date.sendKeys(sdate);
    End_date.sendKeys(Edate);
    Description.sendKeys(des);
    amount.sendKeys(amt);
}
this.Advertise_title=function(){ //Adevrtising title//
    return Adv_title.getText();
}
this.Basic_supplies=function(bsdate,bdes,bamt){ ///****BASIC SUPPLIES EXPENSE ***/
 bdate.sendKeys(bsdate);
Description.sendKeys(bdes);
 amount.sendKeys(bamt);
}
this.Ba_Title=function(){
    return basic_title.getText(); //****Basic supplies title***///
}
this.DayCare_Nursary=function(DNdate1,DNdate2,DNname,DNamt){ //***DAYCARE NURSARY EXPENSE */
    start_date.sendKeys(DNdate1);
    End_date.sendKeys(DNdate2);
    paidTo.sendKeys(DNname);
    Total_Amount.sendKeys(DNamt)
}
this.DayCare_Nursary_Hourlyrate=function(DNdate1,DNdate2,DNname,val,Dhrs,DHR){ //***DAYCARE NURSARY EXPENSE */
    start_date.sendKeys(DNdate1);
    End_date.sendKeys(DNdate2);
    paidTo.sendKeys(DNname);
    RadioButton.get(val).click();
    noofHours.sendKeys(Dhrs);
    HourlyRate.sendKeys(DHR);
}
this.DN_Title=function(){
    return Daycare_title.getText();  //***DAYCARE Title****//
}
this.Ext_ChildCare=function(ECdate1,ECdate2,ECname,Ecamt){ //**** Extraordinary Childcare (Children aged 12 and above) */
    start_date.sendKeys(ECdate1);
    End_date.sendKeys(ECdate2);
    paidTo.sendKeys(ECname);
    Total_Amount.sendKeys(Ecamt)
}
this.Ext_Child_title=function(){
   return Ext_ChildTitle.getText();  //****Extraordinary child Title*** */
}

this.GYM_Member=function(GMdate1,GMdate2,GMname,GMamt){    ///***GYM MEMBERSHIP EXPENSE */
    start_date.sendKeys(GMdate1);
    End_date.sendKeys(GMdate2);
    paidTo.sendKeys(GMname);
    amount.sendKeys(GMamt)
}

this.Home_Keeping=function(HKdate1,HKdate2,HKname,HKtask,HKamt){  //***HOME KEEPING EXPENSE *//
    start_date.sendKeys(HKdate1);
    End_date.sendKeys(HKdate2);
    paidTo.sendKeys(HKname);
    TypeOFTask.sendKeys(HKtask)
    amount.sendKeys(HKamt)

}

this.Manual_workerProcess=function(MWdate1,MWdate2,MWserv,MWamt){  //**MANUAL WORKER PROCESS EXPENSE */
    start_date.sendKeys(MWdate1);
    End_date.sendKeys(MWdate2);
    service_provider.sendKeys(MWserv);
    Total_Amount.sendKeys(MWamt);
}

this.Special_Camp=function(SCdate1,SCdate2,SCdate3,SCProg,SCamt){ //***Mainstream Camp / Recreation Programs** */
    start_date.sendKeys(SCdate1);
    End_date.sendKeys(SCdate2);
    payment_date.sendKeys(SCdate3);
    paidTo.sendKeys(SCProg);
    amount.sendKeys(SCamt);

}

this.Membership_fee=function(MFdate1,MFdate2,MFmemb,MFamt){   //***Membership Fees (Special Needs Association) */
    start_date.sendKeys(MFdate1);
    End_date.sendKeys(MFdate2);
    paidTo.sendKeys(MFmemb);
    amount.sendKeys(MFamt);
}

this.Nursing=function(Ndate1,Ndate2,Nnurse,NID,Namt){   //*****Nursing (Medically Fragile Children) ***//
    start_date.sendKeys(Ndate1);
    End_date.sendKeys(Ndate2);
    nameOFNurse.sendKeys(Nnurse);
    ProfessionalID.sendKeys(NID);
    Total_Amount.sendKeys(Namt);
} 
this.Special_Service=function(SSdate1,SSdate2,value2,SSamt){  //****Special Services/Support Worker** */
    start_date.sendKeys(SSdate1);
    End_date.sendKeys(SSdate2);
    NameOf_Support_worker.click();
    support_worker_list.get(value2).click();
    Total_Amount.sendKeys(SSamt);
}

this.Specialized_Camps=function(Spe_date1,spe_date2,spe_date3,spc_name,spc_amt){  //***Specialized Camps/ Recreation Programs*** */
    start_date.sendKeys(Spe_date1);
    End_date.sendKeys(spe_date2);
    payment_date.sendKeys(spe_date3);
    paidTo.sendKeys(spc_name);
    amount.sendKeys(spc_amt);
}

this.Training=function(Tdate1,Tdate2,Tname,Tname1,T_hrs,T_amt){
    start_date.sendKeys(Tdate1);
    End_date.sendKeys(Tdate2);
    nameOFNurse.sendKeys(Tname);
    paidTo.sendKeys(Tname1);
    noofHours.sendKeys(T_hrs);
    amount.sendKeys(T_amt);
}



this.Expense_Expectation=function(){  //*** Expected Error Message  */
 var data= element(by.xpath('/html/body/div[3]/div[3]')).element(by.tagName('span'));
 browser.sleep(1000);
 browser.actions().mouseMove(data).perform();
 return data.getText();

}

this.Expense_Expectation1=function(){
var data= element(by.xpath('/html/body/div[3]/div')).element(by.tagName('span'));
 browser.sleep(2000);
 browser.actions().mouseMove(data).perform();
 return data.getText();
}

this.Save_button=function(){  //***Save Buttons code */
    var submit1= element.all(by.buttonText('Save')).first();
    browser.actions().mouseMove(submit1).click().perform();
    var submit=element.all(by.buttonText('Save')).last();
    browser.sleep(1000);
    browser.actions().mouseMove(submit).click().perform();
    browser.sleep(3000);
}

this.Manage_exp_list=function(num){ //**manage expense existed list** */
    
    Mang_exp_list.get(num).click();
}

this.Amt_label=function(num1){ //**manage expense Amount Label** */

return Mang_exp_list.get(0).all(by.tagName('div')).get(num1).all(by.tagName('span')).get(1).getText();
}

this.attachment=function(recp){
    browser.actions().mouseMove(file).perform();
    browser.sleep(2000);
    file.sendKeys(recp);
}

this.RemoveFile=function(inx,btn){
 return remove.get(inx).all(by.tagName('button')).get(btn);
}

this.quick_tab=function(){
   return quick_view;
   
}

this.view_exp=function(){
  view.get(0).click();
}

this.DuplicateFile=function(){
    return popUp.getText();
}





  };
  
  module.exports = AddExpensesPage