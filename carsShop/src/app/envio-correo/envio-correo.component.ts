import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CartService } from '../cart.service';
import * as Notiflix from 'notiflix';

@Component({
  selector: 'app-envio-correo',
  templateUrl: './envio-correo.component.html',
  styleUrls: ['./envio-correo.component.scss']
})
export class EnvioCorreoComponent {


  // //para almacenar los productos al carrito
  // items = this.cartService.getItems();

  // //para almacenar el precio del envio al carro
  // item = this.cartService.getItem();

  // checkoutForm = this.formBuilder.group({
  //   name: '',
  //   address: ''
  // });

  datos: FormGroup;

  constructor(private httpClient:HttpClient, private cartServices: CartService) {
    this.datos = new FormGroup({
      nombre: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email])
    })
  }
  envio(){
    Notiflix.Loading.standard('Cargando...');
    let params = {
      nombre:this.datos.value.nombre,
      email:this.datos.value.email
    }
    // console.log(params);
    this.httpClient.post('http://localhost:3000/envio', params).subscribe(resp => {
      console.log(resp);
      Notiflix.Loading.remove();
      Notiflix.Notify.success('Enviado Correctamente');
    })
  }
  // onSubmit(): void{
  //   //Procesar datos de pago aquí
  //   this.items = this.cartService.clearCart();
  //   console.warn('Your has been submitted', this.checkoutForm.value);
  //   this.checkoutForm.reset();
  // }

}
