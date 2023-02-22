import { Component } from '@angular/core';

import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  products = [...products];

  share(src: string | URL | undefined) {
    // window.alert('The product has been shared!');
    window.open("https://wa.me/79172907400?text=Хочу приобрести товар по ссылке " + src,  'menubar=off,toolbar=off')
  }

  Buy(src: string | URL | undefined) {
    window.open(src);
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/