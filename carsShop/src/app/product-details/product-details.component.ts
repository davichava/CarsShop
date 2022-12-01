import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  // ESTA FUNCION SE PASA AL PRODUCT-LIST PARA QUE LA IMAGEN QUEDE COMO BOTON
  
  // addToCart(product: Product){
  //   this.cartService.addToCart(product);
  //   window.alert('You product has been added to the cart!'); 
  // }

  product: Product | undefined;

  constructor(private route: ActivatedRoute, private cartService: CartService) { }

  ngOnInit() {
    //Primero obtenga la identificación del producto de la ruta actual
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams['get']('productId'));

    //Encuentre el producto que corresponda con la identificación proporcionada en la ruta.
    this.product = products.find(product => product.id === productIdFromRoute);
  }

}
