import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminCartComponent } from './shared/components/admin-cart/admin-cart.component';
import { CartComponent } from './shared/components/cart/cart.component';
import { DashboardComponent } from './shared/components/dashboard/dashboard.component';
import { LoginComponent } from './shared/components/login/login.component';
import { ProductFormComponent } from './shared/components/product-form/product-form.component';
import { AuthGuardService } from './shared/service/auth-guard.service';

const routes: Routes = [
  {path : '', redirectTo : 'dashboard', pathMatch : 'full'},
  {path : 'dashboard', component : DashboardComponent},
  {
    path : 'login', component : LoginComponent
  },
  {
    path : 'admincart', component : AdminCartComponent, canActivate : [AuthGuardService]
  },
  {
    path : 'cart', component : CartComponent
  },
  {
    path : 'productform', component : ProductFormComponent
  },
  {
    path : 'productform/:id', component : ProductFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
