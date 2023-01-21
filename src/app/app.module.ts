import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';

import { AppComponent } from './app.component';
import { DashboardComponent } from './shared/components/dashboard/dashboard.component';
import { AdminCartComponent } from './shared/components/admin-cart/admin-cart.component';
import { CartComponent } from './shared/components/cart/cart.component';
import { CardComponent } from './shared/components/card/card.component';
import { LoginComponent } from './shared/components/login/login.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductFormComponent } from './shared/components/product-form/product-form.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AdminCartComponent,
    CartComponent,
    CardComponent,
    LoginComponent,
    HeaderComponent,
    ProductFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
