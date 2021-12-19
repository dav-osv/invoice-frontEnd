import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { client } from 'src/app/interfaces/client.interface';
import { company } from 'src/app/interfaces/company.interface';
import { descriptions } from 'src/app/interfaces/descriptions.interface';
import { invoice } from 'src/app/interfaces/invoice.interface';
import { InvoiceService } from 'src/app/services/invoice.service';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {
  
  createInvoice: FormGroup;
  submitted: boolean;

  invoice: invoice = {};
 
  constructor( private fb: FormBuilder,
               private rute: Router,
               private invoiceService: InvoiceService) { 
    
    this.submitted = false;
    
    this.createInvoice = this.fb.group({

        company: '',
        firstLastName: '',
        webSite: '',
        address: '',
        city:  '',
        country: '',
        phoneNumber: '',
        email: '',

        clientCompany:  '',
        clientName:  '',
        clientAddress:  '',
        clientCityState: '',
        clientCountry: '',
        
        invoiceNoLabel: '',
        invoiceDateLabel : '',
        invoiceDueDateLabel: '',
        invoiceNo: '',
        invoiceDate:'',
        invoiceDueDate:'',
        notes: '',

        subtotalLabel: '',
        taxLabel:  '',
        discountLabel : '',
        totalLabel: '',
       // total: '',
        discount: '',
        //subtotal: '',
        tax: '',

        tableId: '',
        tableDescription : '',
        tableQuantity: '',
        tablePrice: '',
        id: '',
        description : '',
        quantity: '',
        price: '',
    })

  }

  ngOnInit(): void {
     
  }
  
  toFormOutput() {

    /*    interface Company       */

    const company: company = {}
          company.company = this.createInvoice.value.company;
          company.firstLastName = this.createInvoice.value.firstLastName;
          company.webSite = this.createInvoice.value.webSite;
          company.address = this.createInvoice.value.address;
          company.city =  this.createInvoice.value.city;
          company.country = this.createInvoice.value.country;
          company.phoneNumber = this.createInvoice.value.phoneNumber;
          company.email = this.createInvoice.value.email;


    /*    interface client Company       */

    const client : client = {};
          client.company = this.createInvoice.value.clientCompany;
          client.name = this.createInvoice.value.clientName;
          client.address = this.createInvoice.value.clientAddress;
          client.city = this.createInvoice.value.clientCityState;
          client.country = this.createInvoice.value.clientCountry;

  
    /*  interface descriptions  */
    
    const descripcion : descriptions = {};
          descripcion.tableId = this.createInvoice.value.tableId;
          descripcion.tableDescription = this.createInvoice.value.tableDescription;
          descripcion.tableQuantity = this.createInvoice.value.tableQuantity;
          descripcion.tablePrice = this.createInvoice.value.tablePrice;
          descripcion.id = this.createInvoice.value.id;
          descripcion.description = this.createInvoice.value.description;
          descripcion.quantity = this.createInvoice.value.quantity;
          descripcion.price = this.createInvoice.value.price;


    /*  interface  invoice  */

         this.invoice.invoiceNoLabel = this.createInvoice.value.invoiceNoLabel;
         this.invoice.invoiceDateLabel = this.createInvoice.value.invoiceDateLabel;
         this.invoice.invoiceDueDateLabel = this.createInvoice.value.invoiceDateLabel;
         this.invoice.invoiceNo = this.createInvoice.value.invoiceNo;
         this.invoice.invoiceDate = this.createInvoice.value.invoiceDate;
         this.invoice.invoiceDueDate = this.createInvoice.value.invoiceDueDate;
         this.invoice.notes = this.createInvoice.value.notes;
         this.invoice.subtotalLabel = this.createInvoice.value.subtotalLabel;
         this.invoice.subtotal = this.createInvoice.value.subtotal;
         this.invoice.taxLabel = this.createInvoice.value.taxLabel;
         this.invoice.tax = this.createInvoice.value.tax;
         this.invoice.discountLabel = this.createInvoice.value.discountLabel;
         this.invoice.discount = this.createInvoice.value.discount;
         this.invoice.totalLabel = this.createInvoice.value.totalLabel;
         this.invoice.total = this.createInvoice.value.total;
         this.invoice.company = company;
         this.invoice.client = client;
         this.invoice.descriptions = descripcion;
  
  }

  saveInvoice(): void{

      this.submitted = true;
      
      if(this.createInvoice.invalid){
          return; 
      }
      this.toFormOutput();

      this.invoiceService.store(this.invoice)
                 .subscribe(data => {
                  alert("the invoice was added correctly")
                  this.rute.navigate(['list-invoice']);
           }, error => {
                   alert("error adding invoice");
       });

  }




}
