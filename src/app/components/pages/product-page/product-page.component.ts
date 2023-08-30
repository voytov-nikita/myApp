import { Component, OnInit } from '@angular/core';
// import { IProduct } from './components/data/product';
import { ProductService } from '../../../services/products.service';
// import {Observable, tap} from 'rxjs'
import { ModalService } from '../../../services/modal.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {
  title = 'myApp';
  author = "Nikita";
  loading = false
  term = ''
  // products$: Observable<IProduct[]>

  constructor(
    public productService: ProductService,
    public modalService: ModalService
    ) {
  }

  ngOnInit(): void {
    this.loading = true
    // this.products$ = this.productService.getAll().pipe(
    //   tap( () => this.loading = false)
    // )
    this.productService.getAll().subscribe(products =>{
      this.loading= false
    })

  } 
}
