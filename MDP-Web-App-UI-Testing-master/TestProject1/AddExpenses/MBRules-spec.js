var Mbrulepage = require('../AddExpenses/Expenses.po.js');
    var MBrule = new Mbrulepage();
    browser.ignoreSynchronization = true;
   // var CFY_Camp="This expense will be deducted from the current year's SSAH funds available. (Camp / Recreational Program expenses can be submitted if the "payment date" is in the past.)"
    var CFY="You can save this expense but you can't submit it until after the end date of the expense (Camp / Recreational Program expenses are exempt from this rule)."
    var NFY="You can save this expense but you can't submit it until after the end date of the expense (Camp / Recreational Program expenses are exempt from this rule)."
    var PFY="This expense was incurred in last fiscal year. The grace period for using last year's funding has ended. You can still submit the expense but your Regional Office will determine if it will be paid."
    var CFY_NoFund='Expense exceeds SSAH funds Available. If you have additional funds available, please update your "Total Budget" in "Account Settings--> Fund Settings" or you can reduce the amount of your claim.'
    var NFY_NoFund='Expense exceeds SSAH funds available for next year. If you have additional funds available, please update your "Total Budget" in "Account Settings--> Fund Settings" or you can reduce the amount of your claim.'
    var PFY_NoFund='Expense exceeds SSAH funds available from last year. If you have additional funds available, please update your "Total Budget" in "Account Settings--> Fund Settings" or you can reduce the amount of your claim.'
    var BeforeFundStartdate_AfterFundEndDate="You can not select an expense date outside of your funding start/end dates for the selected fiscal year. To change your funding start/end dates go to “Account Settings-->Fund Settings”."
    var DateBefore_PFY='You can not enter expenses that occur prior to the Previous Fiscal Year. You will need to manually submit this expense to your Ministry Regional Office.'
    var DateAfer_NFY= "You can not enter expenses that occur after the Next Fiscal Year. You will need to manually submit this expense to your Ministry Regional Office."
    var Crossing_Two_FY="This expense is for the period crossing two fiscal years. Please only create the claim for the expenses incurred on/before March 31st by prorating the expenses for this period and confirming that you have sufficient funding to support this expense. The remaining balance incurred during the current fiscal year as of April 1st is to be submitted once you have received your authorization for the current fiscal year."
    var Crossing_Multi_FY="This expense is for the period crossing multiple fiscal years. You can't save an expense that crosses fiscal years. Enter a Start and End date within each fiscal year."

describe('MB Rules For Single Dated Expenses', function() {
    it('should Login with Valid use Details', function() {
        // var AddExpensesPage = new homePage();
        MBrule.get();
         browser.sleep(3000);
         expect(MBrule.getGreeting()).toEqual('Sign In');
         MBrule.Login('ankal.torlapati+106@dartssolutions.com','Tester5555');
         browser.sleep(5000);
         MBrule.AddExpenseTab(1);
       });
     it('Expense exceeds SSAH funds available-Insufficent fund In CFY',function(){
        MBrule.Expense_list(1);
        browser.sleep(2000);
        expect(MBrule.Admins_fee_title()).toEqual('Administration Fee');
        MBrule.Adminstration_Fee('9/15/2019','Admin Test','Testing MBrule1','10000');
        MBrule.Save_button();
        browser.sleep(2000);
        expect(MBrule.Expense_Expectation()).toEqual(CFY_NoFund);
     }); 

     it('Date Prior to Fund start date -In CFY',function(){
        element(by.name('expenseDateCtrl')).sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
        browser.sleep(2000);
        expect(MBrule.Admins_fee_title()).toEqual('Administration Fee');
        element(by.name('expenseDateCtrl')).sendKeys('4/15/2019');
        element(by.name('amountCtrl')).sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
        element(by.name('amountCtrl')).sendKeys('100')
        MBrule.Save_button();
        browser.sleep(2000);
        expect(MBrule.Expense_Expectation()).toEqual(BeforeFundStartdate_AfterFundEndDate);

     });
     it('Date After fund End date -In CFY',function(){
        element(by.name('expenseDateCtrl')).sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
        browser.sleep(2000);
        expect(MBrule.Admins_fee_title()).toEqual('Administration Fee');
        element(by.name('expenseDateCtrl')).sendKeys('3/15/2020');
        element(by.name('amountCtrl')).sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
        element(by.name('amountCtrl')).sendKeys('100')
        MBrule.Save_button();
        browser.sleep(2000);
        expect(MBrule.Expense_Expectation()).toEqual(BeforeFundStartdate_AfterFundEndDate);
     });

     it('Add Expense For PFY -Having sufficinet fund & Between fund start/End date',function(){
        element(by.name('expenseDateCtrl')).sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
        browser.sleep(2000);
        expect(MBrule.Admins_fee_title()).toEqual('Administration Fee');
        element(by.name('expenseDateCtrl')).sendKeys('8/15/2018');
        element(by.name('amountCtrl')).sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
        element(by.name('amountCtrl')).sendKeys('100')
        MBrule.Save_button();
        browser.sleep(2000);
        expect(MBrule.Expense_Expectation1()).toEqual(PFY);
     });

     it('Adding Expense for PFY with InSufficient FUND-IN PFY',function(){
        MBrule.Expense_list(1);
        browser.sleep(2000);
        MBrule.Adminstration_Fee('9/15/2018','Admin Test','Testing MBrule1','10000');
        MBrule.Save_button();
        browser.sleep(2000);
        expect(MBrule.Expense_Expectation()).toEqual(PFY_NoFund);
     });

     it('Add expense with Start date Beofore Fund start date- IN PFY',function(){
        element(by.name('expenseDateCtrl')).sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
        browser.sleep(2000);
        //expect(MBrule.Admins_fee_title()).toEqual('Administration Fee');
        element(by.name('expenseDateCtrl')).sendKeys('4/15/2018');
        element(by.name('amountCtrl')).sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
        element(by.name('amountCtrl')).sendKeys('100')
        MBrule.Save_button();
        browser.sleep(2000);
        expect(MBrule.Expense_Expectation()).toEqual(BeforeFundStartdate_AfterFundEndDate);
     });
   
     it('Add expense with Start date After Fund End Date- IN PFY',function(){
        element(by.name('expenseDateCtrl')).sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
        browser.sleep(2000);
        //expect(MBrule.Admins_fee_title()).toEqual('Administration Fee');
        element(by.name('expenseDateCtrl')).sendKeys('3/15/2019');
        element(by.name('amountCtrl')).sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
        element(by.name('amountCtrl')).sendKeys('100')
        MBrule.Save_button();
        browser.sleep(2000);
        expect(MBrule.Expense_Expectation()).toEqual(BeforeFundStartdate_AfterFundEndDate);
     });

     it('Add Expense with date Before PFY Started- date Before 1st April 2018-IN PFY',function(){
        element(by.name('expenseDateCtrl')).sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
        browser.sleep(2000);
        element(by.name('expenseDateCtrl')).sendKeys('3/15/2018');
        element(by.name('amountCtrl')).sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
        element(by.name('amountCtrl')).sendKeys('100')
        MBrule.Save_button();
        browser.sleep(2000);
        expect(MBrule.Expense_Expectation()).toEqual(DateBefore_PFY);
     });
     it('Add Expense For NFY -Having Insufficinet fund & Between fund start/End date',function(){
        element(by.name('expenseDateCtrl')).sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
        browser.sleep(1000);
        element(by.name('expenseDateCtrl')).sendKeys('6/15/2020');
        element(by.name('amountCtrl')).sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
        element(by.name('amountCtrl')).sendKeys('7000')
        MBrule.Save_button();
        browser.sleep(2000);
        expect(MBrule.Expense_Expectation()).toEqual(NFY_NoFund);
     });
    
     it('Add Expense For NFY Before FUND STRT Date -IN NFY',function(){
        element(by.name('expenseDateCtrl')).sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
        browser.sleep(2000);
        element(by.name('expenseDateCtrl')).sendKeys('4/15/2020');
        element(by.name('amountCtrl')).sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
        element(by.name('amountCtrl')).sendKeys('100')
        MBrule.Save_button();
        browser.sleep(2000);
        expect(MBrule.Expense_Expectation()).toEqual(BeforeFundStartdate_AfterFundEndDate);
     });
     it('Add Expense For NFY After FUND END Date -IN NFY',function(){
        element(by.name('expenseDateCtrl')).sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
        browser.sleep(2000);
        element(by.name('expenseDateCtrl')).sendKeys('3/15/2021');
        element(by.name('amountCtrl')).sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
        element(by.name('amountCtrl')).sendKeys('100')
        MBrule.Save_button();
        browser.sleep(2000);
        expect(MBrule.Expense_Expectation()).toEqual(BeforeFundStartdate_AfterFundEndDate);
     });
     it('Add Expense For NFY With Date After NFY  -(After 1st April 2021)',function(){
        element(by.name('expenseDateCtrl')).sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
        browser.sleep(2000);
        element(by.name('expenseDateCtrl')).sendKeys('4/15/2021');
        element(by.name('amountCtrl')).sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
        element(by.name('amountCtrl')).sendKeys('100')
        MBrule.Save_button();
        browser.sleep(2000);
        expect(MBrule.Expense_Expectation()).toEqual(DateAfer_NFY);
     });
     
     it('Add Expense For NFY -Having sufficinet fund & Between fund start/End date',function(){
        element(by.name('expenseDateCtrl')).sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
        browser.sleep(2000);
        element(by.name('expenseDateCtrl')).sendKeys('6/15/2020');
        element(by.name('amountCtrl')).sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
        element(by.name('amountCtrl')).sendKeys('100')
        MBrule.Save_button();
        browser.sleep(2000);
        expect(MBrule.Expense_Expectation1()).toEqual(NFY);
     });
});

  describe('MB Rules Two Dated Expenses', function() {
     it('Enter The Start date in PFY And End Date in CFY', function() {
        MBrule.Expense_list(0);
        browser.sleep(3000);
        //expect(AddExpensesPage.SupportWorker_Title()).toEqual('1:1 Support Worker')
        MBrule.SupportWorker('9/3/2018','9/4/2019',0,'10');
        element(by.buttonText('Save')).click();
        browser.sleep(1000);
        expect(MBrule.Expense_Expectation()).toEqual(Crossing_Two_FY);
       });
       it('Enter The Start date in PFY And End Date in NFY', function() {
        browser.sleep(1000);
        element(by.name('fromDate')).sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
        element(by.name('fromDate')).sendKeys('6/7/2018');
        element(by.name('toDate')).sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
        element(by.name('toDate')).sendKeys('5/5/2020')
        element(by.buttonText('Save')).click();
        browser.sleep(1000);
        expect(MBrule.Expense_Expectation()).toEqual(Crossing_Multi_FY);
       });
       it('Enter Both Dates in PFY Before Fund Start date',function(){
        browser.sleep(1000);
        element(by.name('fromDate')).sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
        element(by.name('fromDate')).sendKeys('4/7/2018');
        element(by.name('toDate')).sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
        element(by.name('toDate')).sendKeys('5/5/2018')
        element(by.buttonText('Save')).click();
        browser.sleep(1000);
        expect(MBrule.Expense_Expectation()).toEqual(BeforeFundStartdate_AfterFundEndDate);
       });
       it('Enter Start Date Before Fund Start date & Enter End date after Fund Start Date-IN PFY',function(){
        browser.sleep(1000);
        element(by.name('fromDate')).sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
        element(by.name('fromDate')).sendKeys('4/7/2018');
        element(by.name('toDate')).sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
        element(by.name('toDate')).sendKeys('8/5/2018')
        element(by.buttonText('Save')).click();
        browser.sleep(1000);
        expect(MBrule.Expense_Expectation()).toEqual(BeforeFundStartdate_AfterFundEndDate);
       });
       it('Enter Both Dates After Fund End Date',function(){
        browser.sleep(1000);
        element(by.name('fromDate')).sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
        element(by.name('fromDate')).sendKeys('3/7/2019');
        element(by.name('toDate')).sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
        element(by.name('toDate')).sendKeys('3/9/2019')
        element(by.buttonText('Save')).click();
        browser.sleep(1000);
        expect(MBrule.Expense_Expectation()).toEqual(BeforeFundStartdate_AfterFundEndDate);
       });
       it('Enter StartDate After FundStartDate & EndDate After FundEndDate-IN PFY',function(){
        browser.sleep(1000);
        element(by.name('fromDate')).sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
        element(by.name('fromDate')).sendKeys('8/7/2018');
        element(by.name('toDate')).sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
        element(by.name('toDate')).sendKeys('3/9/2019')
        element(by.buttonText('Save')).click();
        browser.sleep(1000);
        expect(MBrule.Expense_Expectation1()).toEqual(PFY);
       });
       it('Enter Both Dates With in FUND STARTDATE & ENDDATE With InSufficient FUND-IN PFY',function(){
        MBrule.Expense_list(0);
        MBrule.SupportWorker('9/3/2018','9/4/2018',0,'10000');
        element(by.buttonText('Save')).click();
        browser.sleep(1000);
        expect(MBrule.Expense_Expectation()).toEqual(PFY_NoFund);
       });    
       it('Enter Both Dates With in FUND STARTDATE & ENDDATE With InSufficient FUND-IN NFY',function(){
        browser.sleep(1000);
        element(by.name('fromDate')).sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
        element(by.name('fromDate')).sendKeys('8/7/2020');
        element(by.name('toDate')).sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
        element(by.name('toDate')).sendKeys('8/9/2020')
        element(by.name('totalCost')).sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
        element(by.name('totalCost')).sendKeys('8000');
        element(by.buttonText('Save')).click();
        browser.sleep(1000);
        expect(MBrule.Expense_Expectation()).toEqual(NFY_NoFund);
       }); 
       it('Enter Both Dates With in FUND STARTDATE & ENDDATE With InSufficient FUND-IN NFY',function(){
        browser.sleep(1000);
        element(by.name('fromDate')).sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
        element(by.name('fromDate')).sendKeys('8/7/2019');
        element(by.name('toDate')).sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
        element(by.name('toDate')).sendKeys('8/9/2019')
        element(by.name('totalCost')).sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
        element(by.name('totalCost')).sendKeys('8000');
        element(by.buttonText('Save')).click();
        browser.sleep(1000);
        expect(MBrule.Expense_Expectation()).toEqual(CFY_NoFund);
      });
      it('Enter Both Dates With in FUND STARTDATE & ENDDATE With Sufficient FUND-IN PFY',function(){
        element(by.name('fromDate')).sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
        element(by.name('fromDate')).sendKeys('8/7/2018');
        element(by.name('toDate')).sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
        element(by.name('toDate')).sendKeys('8/9/2018')
        element(by.name('totalCost')).sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
        element(by.name('totalCost')).sendKeys('30');
        element(by.buttonText('Save')).click();
        browser.sleep(1000);
        expect(MBrule.Expense_Expectation1()).toEqual(PFY);
       }); 
       it('Enter Both Dates With in FUND STARTDATE & ENDDATE With Sufficient FUND-IN NFY',function(){
        MBrule.Expense_list(0);
        MBrule.SupportWorker('9/3/2020','9/4/2020',0,'10');
        element(by.buttonText('Save')).click();
        browser.sleep(1000);
        expect(MBrule.Expense_Expectation1()).toEqual(NFY);
       }); 
    });
   describe('MB Rules Three Dated Expenses', function() {
      it('Enter The Start date/End Date in PFY And Payment date in NFY But InSufficinet FUND in NFY', function() {
           MBrule.Expense_list(9);
           MBrule.Special_Camp('9/25/2018','9/30/2018','9/30/2020','Akhil Torlapati','8000');
           MBrule.Save_button();
           browser.sleep(1000);
           expect(MBrule.Expense_Expectation()).toEqual(NFY_NoFund);  
          
           });  
      it('Enter The Start date/End Date in PFY And Payment date in CFY But InSufficinet FUND in CFY', function() {
            element(by.name('expenseDateCtrl')).sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
            browser.sleep(1000);
            element(by.name('expenseDateCtrl')).sendKeys('10/15/2019');
            element(by.name('amountCtrl')).sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
            element(by.name('amountCtrl')).sendKeys('9000');
            MBrule.Save_button();
            browser.sleep(1000);
            expect(MBrule.Expense_Expectation()).toEqual(CFY_NoFund);  
            });
      it('Enter The Start date/End Date in PFY And Payment date in PFY But InSufficinet FUND in PFY', function() {
            element(by.name('expenseDateCtrl')).sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
            browser.sleep(1000);
            element(by.name('expenseDateCtrl')).sendKeys('9/15/2018');
            element(by.name('amountCtrl')).sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
            element(by.name('amountCtrl')).sendKeys('10000');
            MBrule.Save_button();
            browser.sleep(1000);
            expect(MBrule.Expense_Expectation()).toEqual(PFY_NoFund);  
            }); 
            
      it('Enter The Start date/End Date in PFY And Payment date in PFY with Sufficinet FUND in PFY', function() {
             element(by.name('expenseDateCtrl')).sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
             browser.sleep(1000);
             element(by.name('expenseDateCtrl')).sendKeys('9/15/2018');
             element(by.name('amountCtrl')).sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
             element(by.name('amountCtrl')).sendKeys('10');
             MBrule.Save_button();
             browser.sleep(1000);
             expect(MBrule.Expense_Expectation1()).toEqual(PFY);  
             });   
      it('Enter The Start date/End Date in PFY And Payment date in NFY with Sufficinet FUND in NFY', function() {
              MBrule.Expense_list(9);
              MBrule.Special_Camp('9/25/2018','9/30/2018','9/30/2020','Akhil Torlapati','11');
              MBrule.Save_button();
              browser.sleep(1000);
              expect(MBrule.Expense_Expectation1()).toEqual(NFY);  
             });   
      it('Enter The Start date/End Date in PFY And Payment date in CFY with Sufficinet FUND in CFY', function() {
              MBrule.Expense_list(9);
              MBrule.Special_Camp('9/25/2018','9/30/2018','9/30/2019','Akhil Torlapati','12');
              MBrule.Save_button();
              browser.sleep(1000);
              expect(MBrule.Expense_Expectation1()).toEqual(CFY);  
             }); 
      it('Enter The Start date/End Date in CFY And Payment date in PFY with Sufficinet FUND in PFY', function() {
              MBrule.Expense_list(9);
              MBrule.Special_Camp('9/25/2019','9/30/2019','9/30/2018','Akhil Torlapati','10');
              MBrule.Save_button();
              browser.sleep(1000);
              expect(MBrule.Expense_Expectation1()).toEqual(PFY);  
              });      
      it('Enter The Start date/End Date in CFY And Payment date in NFY with Sufficinet FUND in NFY', function() {
               MBrule.Expense_list(9);
               MBrule.Special_Camp('9/25/2019','9/30/2019','9/30/2020','Akhil Torlapati','13');
               MBrule.Save_button();
               browser.sleep(1000);
               expect(MBrule.Expense_Expectation1()).toEqual(NFY);  
              });   
      it('Enter The Start date/End Date in NFY And Payment date in NFY with Sufficinet FUND in NFY', function() {
               MBrule.Expense_list(9);
               MBrule.Special_Camp('9/25/2020','9/30/2020','10/30/2020','Akhil Torlapati','12');
               MBrule.Save_button();
               browser.sleep(1000);
               expect(MBrule.Expense_Expectation1()).toEqual(NFY);  
               });
      it('Enter The Start date/End Date in NFY And Payment date in PFY with Sufficinet FUND in PFY', function() {
               MBrule.Expense_list(9);
               MBrule.Special_Camp('9/25/2020','9/30/2020','10/30/2018','Akhil Torlapati','11');
               MBrule.Save_button();
               browser.sleep(1000);
               expect(MBrule.Expense_Expectation1()).toEqual(PFY);  
               });
      it('Enter The Start date/End Date in NFY And Payment date in CFY with Sufficinet FUND in CFY', function() {
               MBrule.Expense_list(9);
               MBrule.Special_Camp('9/25/2020','9/30/2020','10/30/2019','Akhil Torlapati','10');
               MBrule.Save_button();
               browser.sleep(1000);
               // expect(MBrule.Expense_Expectation1()).toEqual(CFY_Camp);  
               });
      it('Enter The Start date/End Date in NFY And Payment date in CFY Before FUND STARTDATE in CFY', function() {
               MBrule.Expense_list(9);
               MBrule.Special_Camp('9/25/2020','9/30/2020','4/30/2019','Akhil Torlapati','10');
               MBrule.Save_button();
               browser.sleep(1000);
               expect(MBrule.Expense_Expectation()).toEqual(BeforeFundStartdate_AfterFundEndDate);  
              }); 
      it('Enter The Start date/End Date in NFY And Payment date in PFY Before FUND STARTDATE in PFY', function() {
               element(by.name('expenseDateCtrl')).sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
               browser.sleep(1000);
               element(by.name('expenseDateCtrl')).sendKeys('4/15/2018');
               element(by.name('amountCtrl')).sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
               element(by.name('amountCtrl')).sendKeys('10');
               MBrule.Save_button();
               browser.sleep(1000);
               expect(MBrule.Expense_Expectation()).toEqual(BeforeFundStartdate_AfterFundEndDate);  
                 });
      it('Enter The Start date/End Date in NFY And Payment date in NFY Before FUND STARTDATE in NFY', function() {
                     element(by.name('expenseDateCtrl')).sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
                     browser.sleep(1000);
                     element(by.name('expenseDateCtrl')).sendKeys('4/15/2020');
                     element(by.name('amountCtrl')).sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
                     element(by.name('amountCtrl')).sendKeys('10');
                     MBrule.Save_button();
                     browser.sleep(1000);
                     expect(MBrule.Expense_Expectation()).toEqual(BeforeFundStartdate_AfterFundEndDate);  
                });
         it('Enter The Start date/End Date in NFY And Payment date After NFY(i.e After 1st April 2021', function() {
                      element(by.name('expenseDateCtrl')).sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
                      browser.sleep(1000);
                      element(by.name('expenseDateCtrl')).sendKeys('4/15/2021');
                      element(by.name('amountCtrl')).sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
                      element(by.name('amountCtrl')).sendKeys('10');
                      MBrule.Save_button();
                      browser.sleep(1000);
                      expect(MBrule.Expense_Expectation()).toEqual(DateAfer_NFY);
                  }); 
         it('Enter The Start date/End Date in NFY And Payment date Before PFY(i.e Before 1st April 2018', function() {
                     element(by.name('expenseDateCtrl')).sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
                     browser.sleep(1000);
                     element(by.name('expenseDateCtrl')).sendKeys('3/15/2018');
                     element(by.name('amountCtrl')).sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
                     element(by.name('amountCtrl')).sendKeys('10');
                     MBrule.Save_button();
                     browser.sleep(1000);
                     expect(MBrule.Expense_Expectation()).toEqual(DateBefore_PFY);
                     browser.refresh();
                 }); 
               }); 
 