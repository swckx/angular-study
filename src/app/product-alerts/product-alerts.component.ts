import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'app-product-alerts',/*Angular component selectors begin with the prefix app-, followed by the component name.*/
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent implements OnInit {

  @Input() product!: Product|undefined;
  @Output() notify=new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

}
