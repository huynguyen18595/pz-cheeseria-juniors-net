
import { Inject } from '@angular/core';
import { Component } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Cheese } from '../_models/cheese';

@Component({
    selector: 'cheese-card-info-dialog',
    styleUrls: ['./cheese-card-info.component.css'],
    templateUrl: './cheese-card-info.component.html',
  })
  export class CheeseCardInfo {
    constructor(@Inject(MAT_DIALOG_DATA) public data: Cheese) {}
  };