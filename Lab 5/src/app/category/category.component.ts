import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, products } from '../products';
// import { ProductListComponent} from 'product-list/ProductListComponent';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent {
  products = products;
  // share(id: number) {
  //   window.open(
  //     `https://t.me/share/url?url=http://localhost:4200/products/http://localhost:51791/products/` +
  //       id,
  //     'blank'
  //   );
  //   window.alert('Product has been shared!');
  // }
  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }

  showPhoneCat(cat: string) {
    let result = [];
    for (let i = 0; i < products.length; i++) {
      if (products === cat) {
        result.push(products[i]);
      }
    }
    this.products = result;
  }
}
