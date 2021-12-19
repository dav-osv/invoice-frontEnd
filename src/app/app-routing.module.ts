import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ListInvoiceComponent } from './components/list-invoice/list-invoice.component';
import { InvoiceComponent } from './components/invoice/invoice.component';


const routes: Routes = [

  {
    path: '',
    redirectTo: 'invoice',
    pathMatch: 'full',
  },

  { path: 'list-invoice', component: ListInvoiceComponent},
  { path: 'invoice', component: InvoiceComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'invoice' }

 

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  //  RouterModule.forRoot(routes, { useHash: true })
       RouterModule.forRoot(routes)
  ],
   exports: [RouterModule]
})
export class AppRoutingModule { }
