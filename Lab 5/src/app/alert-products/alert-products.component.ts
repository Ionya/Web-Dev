import { Component, Input, Output, EventEmitter } from '@angular/core';
// import { Component, Input} from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'app-alert-products',
  templateUrl: './alert-products.component.html',
  styleUrls: ['./alert-products.component.css'],
})
export class AlertProductsComponent {
  @Input() product!: Product;
  @Output() notify = new EventEmitter();
}
