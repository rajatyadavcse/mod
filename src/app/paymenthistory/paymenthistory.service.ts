import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Payment } from '../models/payment.model';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class PaymenthistoryService {
  private paymentUrl="http://locahost/payments"
  constructor(private http: HttpClient) { }
  public getPayments()
  {
    // return this.http.get<Payment[]>()
  }
}
