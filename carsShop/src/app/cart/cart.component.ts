import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  //para almacenar los productos al carrito
  items = this.cartService.getItems();

  //para almacenar el precio del envio al carro
  item = this.cartService.getItem();

  checkoutForm = this.formBuilder.group({
    name: '',
    address: ''
  });
  //product:Product
  deleteCart():void{
    console.log('delete Cart');
    // this.cartService.deleteCart(product:id);
  }
//shipping: Shipping
  deleteShipping():void{
    console.log('Delete Shipping');
    // this.cartService.deleteShipping()
    // window.location.reload()
  }
  
  constructor(private cartService: CartService, private formBuilder: FormBuilder) { }

  onSubmit(): void{
    //Procesar datos de pago aquí
    this.items = this.cartService.clearCart();
    console.warn('Your has been submitted', this.checkoutForm.value);
    this.checkoutForm.reset();
  }

  ngOnInit(): void {    
  }

} 
