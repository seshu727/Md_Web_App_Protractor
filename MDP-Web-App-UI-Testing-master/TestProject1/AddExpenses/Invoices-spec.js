var SSAH_Invoices =  require('../AddExpenses/Invoices.po.js');
var Expenses_Page= require('../AddExpenses/Expenses.po.js');
var Invoice= new SSAH_Invoices();
var Expenses=new Expenses_Page();

browser.ignoreSynchronization = true;

describe('SSAH Invoices Test Cases', function() {
      
   it('should Login with Valid use Details', function() {
        // var AddExpensesPage = new homePage();
         Expenses.get();
         browser.sleep(3000);
         expect(Expenses.getGreeting()).toEqual('Sign In');
         Expenses.Login('ankal.torlapati+106@dartssolutions.com','Tester5555');
         browser.sleep(5000);
         Expenses.AddExpenseTab(3);
         browser.sleep(4000);
       });
    it('Select and preview the invoice details',function(){
        //  Expenses.AddExpenseTab(3);
          browser.sleep(3000);
          Invoice.filterInvoice(1);
          browser.sleep(2000);
          Invoice.InvoicesList(1);
          browser.sleep(4000);
          expect(Invoice.InvoiceDetails(3,1)).toEqual('Susan Chan');
          expect(Invoice.InvoiceDetails(1,1)).toEqual('Smoke 1');
          browser.sleep(4000);
      });

    it('Check the Invoice Number and Submitted Amount',function(){
          expect(Invoice.InvoiceNumber()).toEqual('S0000000897');
          expect(Invoice.SubmittedAmt()).toEqual('$15.00');
          browser.navigate().back();
          browser.sleep(2000);
      });
    it('check the Submitted Amount for Rejected Invoice(Should be 0)',function(){
          Invoice.filterInvoice(3);
          browser.sleep(2000);
          Invoice.InvoicesList(1);
          browser.sleep(4000);
          expect(Invoice.SubmittedAmt()).toEqual('$0.00');
      });

    it('Download invoic with status Downloaded',function(){
        browser.navigate().back();
        browser.sleep(2000);
        Invoice.filterInvoice(1);
        browser.sleep(2000);
        Invoice.DownloadBtn(0);
        browser.sleep(2000);
        expect(Invoice.SubmitedDate(0,4,1)).toEqual('Downloaded');
        Invoice.download();
        browser.sleep(7000);
      });
    it('Download invoic with status Submitted',function(){
        Invoice.filterInvoice(2);
        browser.sleep(2000);
        Invoice.DownloadBtn(0);
        browser.sleep(2000);
        expect(Invoice.SubmitedDate(0,4,1)).toEqual('Submitted');
        Invoice.download();
        browser.sleep(6000);
      });
    it('Download invoic with status Rejected',function(){
        Invoice.filterInvoice(3);
        browser.sleep(2000);
        Invoice.DownloadBtn(0);
        browser.sleep(2000);
        expect(Invoice.SubmitedDate(0,4,1)).toEqual('Rejected');
        Invoice.download();
        browser.sleep(6000);
      });
    it('Filter Invoice By Dates ',function(){
          Invoice.filterInvoice(1);
          Invoice.dateFilter('10/24/2019','10/25/2019');
          browser.sleep(2000);
          expect(Invoice.SubmitedDate(0,0,1)).toEqual('Oct 24, 2019');
          browser.sleep(2000);
        });


       
    });