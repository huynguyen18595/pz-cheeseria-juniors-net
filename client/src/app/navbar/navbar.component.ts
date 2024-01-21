import { Component, OnInit } from '@angular/core';
import { CartService } from '../_services/cart.service';
import { CartModelPublic } from '../_models/cart';
import { Cheese } from '../_models/cheese';
import { OrderService } from '../_services/order.service';
import { OrderItem } from '../_models/orderItem';
import { Order } from '../_models/order';
import { MatDialog } from '@angular/material/dialog';
import { OrderHistoryDialogComponent } from './order-history-dialog/order-history-dialog.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  cartData: CartModelPublic;
  cartSize: number;
  cartTotal: number;
  _message: string;
  products: Cheese[];

  store: any = [];
  logo: any;

  constructor(
    private cartService: CartService,
    private orderService: OrderService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    // set the products locally
    this.cartService.productData$.subscribe((data) => {
      this.products = data;
    });

    this.cartService.cartDataObs$.subscribe((data) => {
      this.cartData = data;
      this.cartSize = Object.entries(data).reduce(
        (total, val) => total + val[1],
        0
      );
    });
  }

  // Increments the number of items in cart if value is positive,
  // or decrements if negative
  changeItemAmount(id: string, value: number) {
    this.cartService.ModifyProductCount(id, value);
  }

  // returns the details for the specified cheese
  getDetails(id: string): Cheese {
    const details = this.products.filter(
      (product) => product.id === parseInt(id)
    );
    return details[0];
  }

  // calculates the total cart cost
  calculateTotal() {
    return Object.entries(this.cartData).reduce(
      (total, [key, value]) => total + this.getDetails(key).price * value,
      0
    );
  }

  sendOrder(cartData: CartModelPublic) {
    const orderItems: OrderItem[] = Object.entries(cartData).map(
      ([key, value]) =>
        ({
          cheese: this.getDetails(key),
          quantity: value,
        } as OrderItem)
    );

    this.orderService
      .sendOrder({
        orderItems,
        total: this.calculateTotal(),
        createdDate: new Date(),
      } as Order)
      .subscribe(() => {
        this.cartData = null;
        this.cartSize = 0;
        this.cartTotal = 0;
      });
  }

  showOrderHistory() {
    this.orderService.getOrders().subscribe((orders) => {
      this.dialog.open(OrderHistoryDialogComponent, {
        data: orders,
        width: '750px',
        height: '750px',
      });
      console.log(orders);
    });
  }
}
