import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Cheese } from 'src/app/_models/cheese';

@Component({
  selector: 'app-cheese-details-dialog',
  templateUrl: './cheese-details-dialog.component.html',
  styleUrls: ['./cheese-details-dialog.component.css'],
})
export class CheeseDetailsDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: Cheese) {}
}