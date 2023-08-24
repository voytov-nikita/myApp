import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from '../components/data/product';
import { products } from '../components/data/products';

@Pipe({
  name: 'filterProducts'
})
export class FilterProductsPipe implements PipeTransform {

  transform(product:IProduct[], search:string):IProduct[] {
    return products.filter(p => p.title.toLowerCase().includes(search.toLowerCase()))
  }

}
