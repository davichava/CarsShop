import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';
import { Shipping, shippings } from '../shippings';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.scss']
})
export class ShippingComponent implements OnInit {

  addToShippingPrice(shipping: Shipping) {
    this.cartService.addToShipping(shipping);
    window.alert('You shipping price has been added to the cart!');
  }

   shipping: Shipping | undefined;   

   shippingCosts = this.cartService.getShippingPrices();

  constructor(private cartService: CartService, private route: ActivatedRoute) { }
  

  ngOnInit() {
    //Primero obtenga la identificación del producto de la ruta actual
    const routeParams = this.route.snapshot.paramMap;
    const shippingIdFromRoute = Number(routeParams['get']('shippingId'));

    //Encuentre el producto que corresponda con la identificación proporcionada en la ruta.
    this.shipping = shippings.find(shipping => shipping.id === shippingIdFromRoute);
  }

}


