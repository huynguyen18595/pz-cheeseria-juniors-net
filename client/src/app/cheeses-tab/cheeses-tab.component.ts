import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../_services/cheeses.service';
import { CartService } from '../_services/cart.service';
import { Cheese } from '../_models/cheese';
import { CheeseDetailsDialogComponent } from './cheese-details-dialog/cheese-details-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-cheeses-tab',
  templateUrl: './cheeses-tab.component.html',
  styleUrls: ['./cheeses-tab.component.css'],
})
export class CheesesTabComponent implements OnInit {
  cheeses: [] = [];
  products: Cheese[] = [];

  contentLoadedSups: boolean = false;
  contentLoadedProds: boolean = false;
  _currency = 'CDF';
  serverMsg: string;
  errorMsg: any;
  currency: Object;
  constructor(
    private productService: ProductsService,
    private cartService: CartService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    //fetch products
    this.productService.getCheeses().subscribe((prods) => {
      this.products = prods;
      this.contentLoadedProds = true;
    });
  }

  showCheeseDetails(product: Cheese) {
    this.dialog.open(CheeseDetailsDialogComponent, {
      data: product,
      width: '450px',
      height: '750px',
    });
  }

  //Add to cart function
  addToCart(id: number) {
    console.log('Added to cart');
    console.log(id);
    this.cartService.AddProductToCart(id);
  }
}
