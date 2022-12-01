import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ProductListComponent } from './product-list/product-list.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { AppComponent } from './app.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { ShippingComponent } from './shipping/shipping.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Import angular material
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    ProductListComponent,
    TopBarComponent,
    ProductAlertsComponent,
    AppComponent,
    ProductDetailsComponent,
    CartComponent,
    ShippingComponent,
    // MatCardModule
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: ProductListComponent },
      // { path: 'products/:productId', component: ProductDetailsComponent },
      { path: 'cart', component: CartComponent},
      { path: 'shipping/:shppingId', component: ShippingComponent},
      { path: 'products/:productId', component: ProductListComponent}
    ]),
    BrowserAnimationsModule
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
