import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalService } from 'src/app/services/modal.service';
import { ProductService } from 'src/app/services/products.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

form = new FormGroup ({
  title: new FormControl<string>('', [Validators.required, Validators.minLength(6)])
})
constructor( private productService:ProductService,
  private modalService: ModalService){

}

ngOnInit(): void {
  
}

get title() {
  return this.form.controls.title as FormControl
}

submit() {
 this.productService.create({
  title: this.form.value.title as string,
  price: 109.95,
  description:"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
  image: 'http://i.pravatar.cc',
  category:"men's clothing",
  rating: {
    rate: 4.2,
    count: 1
  }
 }).subscribe(()=> {
  this.modalService.close()
 })
}

}
