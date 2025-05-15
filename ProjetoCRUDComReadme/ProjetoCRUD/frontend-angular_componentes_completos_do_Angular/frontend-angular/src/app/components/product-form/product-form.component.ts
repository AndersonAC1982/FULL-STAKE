
import { Component } from '@angular/core';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent {
  product: Product = { id: 0, name: '', price: 0 };

  constructor(private productService: ProductService) {}

  onSubmit(): void {
    if (this.product.name && this.product.price > 0) {
      this.productService.addProduct(this.product).subscribe(() => {
        alert('Produto cadastrado com sucesso!');
        this.product = { id: 0, name: '', price: 0 };
      });
    } else {
      alert('Preencha os campos corretamente.');
    }
  }
}
