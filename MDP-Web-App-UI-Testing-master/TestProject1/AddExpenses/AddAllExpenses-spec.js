var homePage = require('./Expenses.po.js');
describe('Login into MDP', function() {
    var AddExpensesPage = new homePage();
    browser.ignoreSynchronization = true;
    var NFY="You can save this expense but you can't submit it until after the end date of the expense (Camp / Recreational Program expenses are exempt from this rule)."
    var PFY="This expense was incurred in last fiscal year. The grace period for using last year's funding has ended. You can still submit the expense but your Regional Office will determine if it will be paid."
 
   it('should Login with Valid use Details', function() {
   // var AddExpensesPage = new homePage();
    AddExpensesPage.get();
    browser.sleep(3000);
    expect(AddExpensesPage.getGreeting()).toEqual('Sign In');
    AddExpensesPage.Login('ankal.torlapati+106@dartssolutions.com','Tester5555');
    browser.sleep(5000);
    AddExpensesPage.AddExpenseTab(1);
  });
  it('ADDING SUPPORT WORKER 1:1', function(){  //**SUPPORT WORKER 1:1**//
     AddExpensesPage.Expense_list(0);
     browser.sleep(3000);
     expect(AddExpensesPage.SupportWorker_Title()).toEqual('1:1 Support Worker')
     AddExpensesPage.SupportWorker('9/3/2019','9/4/2019',0,'10');
     element(by.buttonText('Save')).click();
     browser.sleep(2000);
    });
  it('ADDING ADMINSTRATION FEE',function(){
    AddExpensesPage.Expense_list(1);
    browser.sleep(2000);
    expect(AddExpensesPage.Admins_fee_title()).toEqual('Administration Fee');
    AddExpensesPage.Adminstration_Fee('9/15/2019','Admin Test','','10');
    AddExpensesPage.Save_button();
    });
  it('ADDING ADVERTISING(SPECIAL SERVICE WORKER',function(){ //**ADVERTISING(SPECIAL SERVICE WORKER */
    AddExpensesPage.Expense_list(2);
    browser.sleep(2000);
    expect(AddExpensesPage.Admins_fee_title()).toEqual('Advertising (Special Services Worker)');
    //expect(AddExpensesPage.Advertise_title()).toEqual('Advertising (Special Services Worker)');
    AddExpensesPage.Advertising_Expense('9/10/2019','9/12/2019','This is for Automation test','10');
    browser.sleep(1000);
    AddExpensesPage.Save_button();
   
  });

 it('ADDING BASIC SUPPLIES EXPENSE',function(){  //***ADDING BASIC SUPPLIES EXPENSE** */
  AddExpensesPage.Expense_list(3);
  AddExpensesPage.Basic_supplies('9/3/2018','This is for Automation test','10');
  AddExpensesPage.Save_button();
  browser.sleep(1000);
  expect(AddExpensesPage.Expense_Expectation()).toEqual(PFY);
});

it('ADDING DAYCARE NURSARY EXPENSE',function(){
  AddExpensesPage.Expense_list(4);
  browser.sleep(2000);
 // expect(AddExpensesPage.Admins_fee_title()).toEqual('Advertising (Special Services Worker)');
  AddExpensesPage.DayCare_Nursary('9/3/2018','9/5/2018','Akhil T','20');
  AddExpensesPage.Save_button();
  browser.sleep(1000);
  expect(AddExpensesPage.Expense_Expectation()).toEqual(PFY);
    
});

it('ADDING EXTORDINARY CHILDCARE(CHILD AGE 12 AND ABOVE)',function(){ //**EXTORDINARY CHILDCARE(CHILD AGE 12 AND ABOVE) */
  AddExpensesPage.Expense_list(5);
 // expect(AddExpensesPage.Admins_fee_title()).toEqual('Advertising (Special Services Worker)');
  AddExpensesPage.Ext_ChildCare('9/10/2019','9/15/2019','Tester new','15');
  browser.sleep(2000);
  expect(element(by.buttonText('Save')).isEnabled()).toBe(true);
  AddExpensesPage.Save_button();
});

it('ADDING GYM MEMBERSHIP EXPENSE',function(){  //**GYM MEMBERSHIP EXPENSE** */
  AddExpensesPage.Expense_list(6);
  AddExpensesPage.GYM_Member('9/11/2018','9/18/2018','Gym User','10');
  AddExpensesPage.Save_button();
  browser.sleep(1000);
  expect(AddExpensesPage.Expense_Expectation()).toEqual(PFY);
});

it('HOME KEEPING EXPENSE',function(){  //***HOME KEEPING EXPENSE */
  AddExpensesPage.Expense_list(7);
  AddExpensesPage.Home_Keeping('9/15/2020','9/20/2020','Gym User','Shiva kumar','10');
  AddExpensesPage.Save_button();
  browser.sleep(1000);
  expect(AddExpensesPage.Expense_Expectation()).toEqual(NFY);
});

it('MANUAL WORKER PROCESS EXPENSE',function(){  //** MANUAL WORKER PROCESS EXPENSE****/
  AddExpensesPage.Expense_list(8);
  AddExpensesPage.Manual_workerProcess('9/20/2018','9/25/2018','Shiva kumar','10');
  AddExpensesPage.Save_button();
  browser.sleep(1000);
  expect(AddExpensesPage.Expense_Expectation()).toEqual(PFY);
});

it('Mainstream Camp / Recreation Programs',function(){  //****Mainstream Camp / Recreation Programs* */
  AddExpensesPage.Expense_list(9);
  AddExpensesPage.Special_Camp('9/25/2019','9/30/2019','9/30/2020','Akhil Torlapati','10');
  AddExpensesPage.Save_button();
  browser.sleep(1000);
  expect(AddExpensesPage.Expense_Expectation()).toEqual(NFY);
});

it('MEMBERSHIP FEE EXPENSE',function(){  //**MEMBERSHIP FEE EXPENSE*** */
  AddExpensesPage.Expense_list(10);
  AddExpensesPage.Membership_fee('10/25/2018','10/30/2018','Akhil Torlapati','10');
  AddExpensesPage.Save_button();
  browser.sleep(1000);
  expect(AddExpensesPage.Expense_Expectation()).toEqual(PFY);
});

it('Nursing (Medically Fragile Children)',function(){ //**Nursing (Medically Fragile Children) */
  AddExpensesPage.Expense_list(11);
  browser.sleep(2000);
  //expect(AddExpensesPage.Admins_fee_title()).toEqual('Advertising (Special Services Worker)');
  AddExpensesPage.Nursing('10/25/2019','10/30/2019','Ahmed','AH100','15');
  browser.sleep(1000);
  expect(element(by.buttonText('Save')).isEnabled()).toBe(true);
  AddExpensesPage.Save_button();
});

it('Special Services/Support Worker',function(){  //**** ***Special Services/Support Worker***/
  AddExpensesPage.Expense_list(12);
  AddExpensesPage.Special_Service('10/25/2018','10/30/2018',0,'10');
 // AddExpensesPage.Save_button();
  element(by.buttonText('Save')).click();
  browser.sleep(2000);
  expect(AddExpensesPage.Expense_Expectation()).toEqual(PFY);
});

it('Specialized Camps / Recreation Programs',function(){ //****Specialized Camps / Recreation Programs */
  AddExpensesPage.Expense_list(13);
  AddExpensesPage.Specialized_Camps('10/25/2018','10/30/2018','9/10/2020','Surya Kumar','10');
  AddExpensesPage.Save_button();
  browser.sleep(1000);
  expect(AddExpensesPage.Expense_Expectation()).toEqual(NFY);   
});

it('Adding Training expense',function(){  //*****TRAINING EXPENSE */
  AddExpensesPage.Expense_list(14);
  AddExpensesPage.Training('9/10/2018','9/15/2018','AutomationTester','Shiva','05:00','12');
  AddExpensesPage.Save_button();
  browser.sleep(1000);
  expect(AddExpensesPage.Expense_Expectation()).toEqual(PFY);
});

it('ADDING SUPPORT WORKER WITH HOURLY RATE',function(){
  AddExpensesPage.Expense_list(0);
  AddExpensesPage.SupportWorker_HourlyRate('10/25/2020','10/30/2020',0,1,'05:','25');
  browser.sleep(1000);
  var cost=element(by.name('totalCost'));
  expect(cost.getAttribute('value')).toEqual('125');
  element(by.buttonText('Save')).click();
});

it(' Daycare/Nursery School WITH HOURLY RATE',function(){
  AddExpensesPage.Expense_list(4);
  AddExpensesPage.DayCare_Nursary_Hourlyrate('9/3/2018','9/5/2018','Akhil T',1,'03:','10');
  browser.sleep(1000);
  var cost=element(by.name('totalCost'));
  expect(cost.getAttribute('value')).toEqual('30');
  AddExpensesPage.Save_button();
});



});