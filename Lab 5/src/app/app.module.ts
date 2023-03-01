import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  Router,
  ActivatedRoute,
  ParamMap,
  RouterModule,
  Routes,
} from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { AlertProductsComponent } from './alert-products/alert-products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { RatingModule } from 'ng-starrating';
import { CategoryComponent } from './category/category.component';

const routes: Routes = [
  { path: '', component: ProductListComponent },
  { path: 'products/:productId', component: ProductDetailsComponent },
  { path: 'category/:category.id', component: CategoryComponent },
  {
    path: 'alert-products/:alert-products.id',
    component: AlertProductsComponent,
  },
];

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    RatingModule,
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    AlertProductsComponent,
    ProductDetailsComponent,
    CategoryComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
