import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Cheese } from '../_models/cheese';
import { CheeseList } from '../_models/cheeseList';
import { CartService } from '../_services/cart.service';


@Component({
  selector: 'app-purchase-history-info',
  templateUrl: './purchase-history-info.component.html',
  styleUrls: ['./purchase-history-info.component.css']
})
export class PurchaseHistoryInfoComponent {
  products: Cheese[];
  constructor(@Inject(MAT_DIALOG_DATA) public data, private cartService: CartService) {
    
  }

  ngOnInit() {
    // set the products locally
    this.cartService.productData$.subscribe((data) => {
      this.products = data;
    });
  }

  // returns the details for the specified cheese
  getDetails(id: string): Cheese {
    const details = this.products.filter(
      (product) => product.id === parseInt(id)
    );
    return details[0];
  }
  getTotalQuantity(cheeseList: CheeseList []){
    var sum =  0;
    cheeseList.forEach(element => {
      sum = sum + element.quantity;
    });
    return sum;
  }
}
