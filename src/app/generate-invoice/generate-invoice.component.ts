import { Component, OnInit, Inject, PLATFORM_ID, APP_ID } from '@angular/core';
import { LocalStorageService } from '../services/local-storage.service';
import { DatePipe } from '@angular/common';
import * as jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

declare var $: any;
declare var jQuery: any;

@Component({
  selector: 'app-generate-invoice',
  templateUrl: './generate-invoice.component.html',
  styleUrls: ['./generate-invoice.component.css'],
  providers: [DatePipe]
})
export class GenerateInvoiceComponent implements OnInit {

  fromAddress:any;
  toAddress:any;
  today:any;
  invoiceData:any;
  currencySelected:any = 'usd';
  discountSelected:any = 'flat';
  shippingSelected:any = 'on';
  taxSelected:any = 'persantage';
  itemsData:any;
  maxId:any = 1;
  isChecked:boolean = false;

  totalAmounts:any;


  vatOrTax = 'Tax';

  currencys :any = [
    {name:'USD',symbol:'USD'},
    {name:'PSD',symbol:'PSD'},
    {name:'TK',symbol:'TK'},
    {name:'EUR',symbol:'EUR'},
    {name:'USD',symbol:'USD'}
  ];

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(APP_ID) private appId: string,
    private localStorageService: LocalStorageService,
  ) { 

    var dateObj = new Date();
    var month = dateObj.getUTCMonth() + 1; //months from 1-12
    var day = dateObj.getUTCDate();
    var year = dateObj.getUTCFullYear();

    let newdate = year + "-" + month + "-" + day;
    this.today = newdate;
  }

  ngOnInit() {
    
    this.initPage();

  }


  addNewRow(){
    if(!this.localStorageService.checkKeyExist('itemsData')){
      // this.itemsData = {
      //   id:'1',
      //   itemName:'item name/Description',
      //   itexQuantity:'0',
      //   itemRate:'0',
      //   itemVat:'0',
      //   amount:'0'
      // };
      
      // this.localStorageService.setItem('itemsData', JSON.stringify(this.itemsData));
    }else{
    
      this.itemsData = JSON.parse(this.localStorageService.getItem('itemsData'));
      this.maxId = this.maxId+1;
      let newItem = {
        id:this.maxId,
        itemName:'item name/Description',
        itexQuantity:'0',
        itemRate:'0',
        itemVat:'0',
        amount:'0',
        maxId:this.maxId,
      };

      this.itemsData.push(newItem);
      this.localStorageService.setItem('itemsData', JSON.stringify(this.itemsData));
      console.log(this.itemsData);

    }
  }




  removeRow(id){
  
   let data = JSON.parse(this.localStorageService.getItem('itemsData'));
   let newData:any = [];
   data.forEach( (value, index) =>  {
    if(value.id === id){
      
    }else{
      newData.push(value);
    }
  });
  this.itemsData = newData;
  this.localStorageService.setItem('itemsData', JSON.stringify(this.itemsData));

  this.updateTotalAmounts();
    
  }




  deleteLocalData(){

    this.localStorageService.removeAll();
    this.initPage();

  }



  initPage(){


    if(!this.localStorageService.checkKeyExist('fromAddress')){
      this.fromAddress = {
        name:'Name',
        company:'Company',
        address:'Address',
        city_zip:'City, State, Zip',
        country:'Country'
      };
      console.log('nodata');
      this.localStorageService.setItem('fromAddress', JSON.stringify(this.fromAddress));
    }else{
      this.fromAddress = JSON.parse(this.localStorageService.getItem('fromAddress'));

    }


    if(!this.localStorageService.checkKeyExist('toAddress')){
      this.toAddress = {
        name:'Company',
        address:'Address',
        city_zip:'City, State, Zip',
        country:'Country'
      };
      
      this.localStorageService.setItem('toAddress', JSON.stringify(this.toAddress));
    }else{
    
      this.toAddress = JSON.parse(this.localStorageService.getItem('toAddress'));

    }


    if(!this.localStorageService.checkKeyExist('invoiceData')){
      this.invoiceData = {
        invoiceName:'INV-0001',
        invoiceDate:this.today,
        dueDate:this.today,
      };
      
      this.localStorageService.setItem('invoiceData', JSON.stringify(this.invoiceData));
    }else{
    
      this.invoiceData = JSON.parse(this.localStorageService.getItem('invoiceData'));

    }



    if(!this.localStorageService.checkKeyExist('itemsData')){
      this.itemsData = [{
        id:1,
        itemName:'item name/Description',
        itexQuantity:'0',
        itemRate:'0',
        itemVat:'0',
        amount:'0',
        maxId:this.maxId,
      }];
      
      this.localStorageService.setItem('itemsData', JSON.stringify(this.itemsData));
    }else{
    
      this.itemsData = JSON.parse(this.localStorageService.getItem('itemsData'));
     

    }



    if(!this.localStorageService.checkKeyExist('totalAmounts')){
      this.totalAmounts = {
        subTotal:'0.00',
        discount:'0.00',
        shipping:'0.00',
        vat:'0.00',
        total:'0.00',
      };
      
      this.localStorageService.setItem('totalAmounts', JSON.stringify(this.totalAmounts));
    }else{
    
      this.totalAmounts = JSON.parse(this.localStorageService.getItem('totalAmounts'));
     

    }

    


  }



  updateFromAddress(){
    if(this.localStorageService.checkKeyExist('fromAddress')){
      this.fromAddress = {
        name:this.fromAddress.name,
        company:this.fromAddress.company,
        address:this.fromAddress.address,
        city_zip:this.fromAddress.city_zip,
        country:this.fromAddress.country,
      };
      
      this.localStorageService.setItem('fromAddress', JSON.stringify(this.fromAddress));
    }else{
      //this.fromAddress = JSON.parse(this.localStorageService.getItem('fromAddress'));

    }
  }

  updateToAddress(){
    if(this.localStorageService.checkKeyExist('toAddress')){
      this.toAddress = {
        name: this.toAddress.name,
        address: this.toAddress.address,
        city_zip: this.toAddress.city_zip,
        country: this.toAddress.country,
      };
      
      this.localStorageService.setItem('toAddress', JSON.stringify(this.toAddress));
    }else{
      //this.fromAddress = JSON.parse(this.localStorageService.getItem('fromAddress'));

    }
  }


  updateInvoiceData(){
    if(this.localStorageService.checkKeyExist('invoiceData')){
      this.invoiceData = {
        invoiceName:this.invoiceData.invoiceName,
        invoiceDate:this.invoiceData.invoiceDate,
        dueDate:this.invoiceData.dueDate,
      };
      
      this.localStorageService.setItem('invoiceData', JSON.stringify(this.invoiceData));
    }else{
      //this.fromAddress = JSON.parse(this.localStorageService.getItem('fromAddress'));

    }
  }


  updateProductData(){
    // let data = JSON.parse(this.localStorageService.getItem('itemsData'));
    let newData:any = [];
    let subTotal:any = 0;
    this.itemsData.forEach( (value, index) =>  {
      let amount = value.itexQuantity * value.itemRate;
      value.amount = amount;
      newData.push(value);
      subTotal = subTotal+amount;
     
   });
   this.itemsData = newData;
   this.localStorageService.setItem('itemsData', JSON.stringify(this.itemsData));

   this.totalAmounts.subTotal = subTotal;
   this.localStorageService.setItem('totalAmounts', JSON.stringify(this.totalAmounts));
   this.updateTotalAmounts();
    
  }


  updateTotalAmounts(){
    let newData:any = [];
    let subTotal:any = 0;
    let totalVat:any =0;
    let finalTotal:any = 0;
    let totalDiscount :any=0;
    let totalShipping:any=0;



    this.itemsData.forEach( (value, index) =>  {
      let amount = value.itexQuantity * value.itemRate;
      if(this.taxSelected != 'off'){
        
        if(this.taxSelected == 'vat'){
          
          let vat = 0;
          vat = (amount*this.totalAmounts.vat)/100;
          value.itemVat = vat;
          totalVat = totalVat+vat;
        }else if(this.taxSelected == 'flat'){
          value.itemVat = 0.00;
          totalVat = this.totalAmounts.vat;
         

        }else if(this.taxSelected == 'persantage'){

          value.itemVat = 0.00;

          let vat = 0;
          vat = (amount*this.totalAmounts.vat)/100;
          value.itemVat = vat;
          totalVat = totalVat+vat;

        }

      }else{
        value.itemVat = 0;
        totalVat = 0;
        this.totalAmounts.vat = 0;
        
      }
      value.amount = amount;
      
      newData.push(value);
      subTotal = subTotal+amount;
     
   });

   if(this.discountSelected != 'off'){
    if(this.discountSelected == 'flat'){
       totalDiscount = this.totalAmounts.discount;

    }else if(this.discountSelected == 'persantage'){
      
      totalDiscount = (subTotal*this.totalAmounts.discount)/100;
    }

   }else{
    this.totalAmounts.discount = 0;
    totalDiscount = this.totalAmounts.discount;
   }


   if(this.shippingSelected != 'off'){
    if(this.shippingSelected == 'on'){
      totalShipping = this.totalAmounts.shipping;

    }

   }else{
    this.totalAmounts.shipping = 0;
    totalShipping = this.totalAmounts.shipping;
   }

   finalTotal =  parseInt(subTotal)+parseInt(totalVat)-parseInt(totalDiscount)+parseInt(totalShipping);


   this.totalAmounts.total = finalTotal;

   this.itemsData = newData;
   this.localStorageService.setItem('itemsData', JSON.stringify(this.itemsData));

   this.totalAmounts.subTotal = subTotal;
   this.localStorageService.setItem('totalAmounts', JSON.stringify(this.totalAmounts));

  }

  discountTypeChange(value){
    this.discountSelected = value;
    this.updateTotalAmounts();
  }

  shippingTypeChange(value){
    this.shippingSelected = value;
    this.updateTotalAmounts();
  }

  taxTypeChange(value){
    if(value=='vat'){
      this.vatOrTax = 'VAT';
    }else if(value=='tax'){
      this.vatOrTax = 'Tax';
    }else if(value=='off'){

    }

    this.taxSelected = value;
    this.updateTotalAmounts();
  }


  currencySelectedTypeChange(value){
   this.currencySelected = value;
  }


  createPdf(){


    // var pdf = new jsPDF('p', 'pt', 'letter');
  // pdf.canvas.height = 80 * 11;
  // pdf.canvas.width = 80 * 8.5;   
  
  // let content = `
    
  // `;

  let content = '';
  
;
  // pdf.fromHTML(content).html(); //Your HTML content goes here
  // pdf.save('test.pdf');
    

    var printContent = document.getElementById('final-invoice');
    var WinPrint = window.open('', '', 'width=900,height=650');
    WinPrint.document.write(printContent.innerHTML);
    WinPrint.document.close();
    WinPrint.focus();
    WinPrint.print();
    WinPrint.close();







    // var data = document.getElementById('final-invoice');  
    // html2canvas(data).then(canvas => {  
    //   // Few necessary setting options  
    //   var imgWidth = 208;   
    //   var pageHeight = 50000;    
    //   var imgHeight = canvas.height * imgWidth / canvas.width;  
    //   var heightLeft = imgHeight;  
  
    //   const contentDataURL = canvas.toDataURL('image/png')  
    //   let pdf = new jsPDF('p', 'mm', 'a4'); // A4 size page of PDF  
    //   var position = 0;  
    //   pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)  
    //   pdf.save('MYPdf.pdf'); // Generated PDF   
    // }); 




    // var doc = new jsPDF('p','pt', 'a4', true);
    // var header = [1,2,3,4];
   
    // doc.save('sample-file.pdf');


  
  }


  

  


  
   



}
