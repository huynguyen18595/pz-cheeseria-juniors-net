import { Component, OnInit } from '@angular/core';
import { CartService } from '../_services/cart.service';
import { CartModelPublic } from '../_models/cart';
import { Cheese } from '../_models/cheese';
import { PurchaseHistoryInfoComponent } from '../purchase-history-info/purchase-history-info.component';
import { MatDialog } from '@angular/material/dialog';

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
  purchaseHistory: any = [];

  constructor(private cartService: CartService,public dialog: MatDialog) {}

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
  openDialog() {
    this.cartService.getPurchaseHistory().subscribe((pros) =>{
      this.purchaseHistory = pros;
        
      const dialogRef = this.dialog.open(PurchaseHistoryInfoComponent, {
        data: this.purchaseHistory,
        width: "600px",
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
      });
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
  // calculates the total cart cost
  purchase() {
    let param = {
      totalAmount: this.calculateTotal(),
      cheeseList: Object.keys(this.cartData).map((key) => ({id:key,quantity:this.cartData[key]}))
    };
    this.cartService.purchase(param).subscribe((data) => {
      this.cartService.clearCart();
    });
  }
  
}