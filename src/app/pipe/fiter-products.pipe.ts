import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from '../models/product';

@Pipe({
  name: 'fiterProducts',
})
export class FiterProductsPipe implements PipeTransform {
  transform(products: IProduct[], search: string): IProduct[] {
    if (search.length === 0) return products;
    return products.filter((p) =>
      p.title.toLowerCase().includes(search.toLowerCase())
    );
  }
}
