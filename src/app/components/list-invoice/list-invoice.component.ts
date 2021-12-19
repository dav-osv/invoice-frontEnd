import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-invoice',
  templateUrl: './list-invoice.component.html',
  styleUrls: ['./list-invoice.component.css']
})
export class ListInvoiceComponent implements OnInit {


  constructor(private rute: Router) {


  }

  ngOnInit(): void {
  }

  latestInvoice(){
       this.rute.navigate(['invoice']);
  }

}
