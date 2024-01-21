import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Order } from 'src/app/_models/order';

@Component({
  selector: 'app-order-history-dialog',
  templateUrl: './order-history-dialog.component.html',
  styleUrls: ['./order-history-dialog.component.css'],
})
export class OrderHistoryDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: Order[]) {}
}
