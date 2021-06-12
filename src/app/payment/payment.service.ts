import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Training } from '../models/training.model';
import { Payment } from '../models/payment.model';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  trainingUrl='http://localhost:8022/trainings';
  paymentUrl="http://localhost:8022/payments";
    constructor(private http:HttpClient) { }
  getTraining(id){
    return this.http.get<Training>(this.trainingUrl+"/"+id);
  }
  postPayment(payment){
    return this.http.post<Payment>(this.paymentUrl,payment);
  }
  updateTraining(training){
    return this.http.put<Training>(this.trainingUrl+"/"+training.id,training)
  }
}

