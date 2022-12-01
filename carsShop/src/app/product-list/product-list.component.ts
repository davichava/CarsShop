import { Component, OnInit, } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterOutlet} from '@angular/router';
import { Product, products } from '../products';

import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  product = products;
  // cartService: any;

  addToCart(product: Product) {
    var text;
    if (confirm("Press a button!") == true) {
      this.cartService.addToCart(product);
      text = "You pressed OK!";
    } else if (confirm("Press a Btutton!") == false) {
    } 
    // window.confirm('You product has been added to the cart!');  
    // if (window.confirm('You product has been added to the cart!')) {
    //   this.cartService.addToCart(product);
    // }else {
    //   (window.alert('You Product No Has Been Added To The Cart!'))
    //   this.cartService.addToCart(product);
    // }
  }

  constructor(private route: ActivatedRoute, private cartService: CartService) { }

  share() {
    //los productos han sido compartidos
    window.alert('the products has been shared!!');
  }

  onNotify() {
    //se le notificará cuando el producto salga a la venta
    window.alert('you will be notified when product  goeson sale');
  }

  ngOnInit() {

  }
}
