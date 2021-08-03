import { Component, OnInit, Inject } from '@angular/core';
import { ProductsService } from '../_services/cheeses.service';
import { CartService } from '../_services/cart.service';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CheeseCardInfo } from '../cheese-card-info/cheese-card-info.component';
import { Cheese } from '../_models/cheese';

@Component({
  selector: 'app-cheeses-tab',
  templateUrl: './cheeses-tab.component.html',
  styleUrls: ['./cheeses-tab.component.css'],
})
export class CheesesTabComponent implements OnInit {
  cheeses: [] = [];
  products: [] = [];


  contentLoadedSups: boolean = false;
  contentLoadedProds: boolean = false;
  _currency = 'CDF';
  serverMsg: string;
  errorMsg: any;
  currency: Object;
  constructor(
    private productService: ProductsService,
    private cartService: CartService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    //fetch products
    this.productService.getCheeses().subscribe((prods) => {
      this.products = prods;
      this.contentLoadedProds = true;
    });
  }

  //Add to cart function
  addToCart(id: number,$event:any) {
    $event.stopPropagation();
    console.log('Added to cart');
    console.log(id);
    this.cartService.AddProductToCart(id);
  }

  openDialog(cheese: Cheese) {
    const dialogRef = this.dialog.open(CheeseCardInfo, {
      data: cheese
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  
}


