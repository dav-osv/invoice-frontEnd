import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { invoice } from '../interfaces/invoice.interface';

@Injectable({
  providedIn: 'root'
})

export class InvoiceService {
   
  /* Crud FrontEnd API */

  private API_REST  = 'http://localhost/invoice-Back/public/invoice';

      
  private httpHeader = new HttpHeaders(
                                              {
                                                'Content-Type' : 'application/json' ,
                                                 Authorization: 'RcgkvUAAOpGckyWonLANuTAZEFtU7VkZ'
                                              }
  );

  constructor(private http: HttpClient){

  }

   listInvoices(): Observable<any[]> {
      return this.http.get<invoice[]>(this.API_REST);
   }

   show(id:number): Observable<any>  {
       return this.http.get<invoice>(this.API_REST + '/' + id);
   }

   store(newInvoice: invoice): Observable<any>{
      return this.http.post( this.API_REST , newInvoice, { headers: this.httpHeader});
   }

   update(invoice: invoice): Observable<any> {
      return this.http.put<invoice>( this.API_REST + '/' + invoice.id, invoice , { headers: this.httpHeader});
   }

   delete(id: number): Observable<any>{
        return this.http.delete( this.API_REST + '/' + id ,{ headers: this.httpHeader});
   }
  
}
