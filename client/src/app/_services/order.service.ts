import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Order } from '../_models/order';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private server_url = environment.serverURL;

  constructor(private http: HttpClient) {}

  sendOrder(order: Order) {
    console.log('Order sent');
    return this.http.post(this.server_url + '/Order', order);
  }

  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(this.server_url + '/Order');
  }
}
