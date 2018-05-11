import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailedViewComponent } from './detailed-view/detailed-view.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './AuthGuard';

const routes: Routes = [
  { path:'', redirectTo:'/login', pathMatch:'full' },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'detailed/:id', component: DetailedViewComponent, canActivate: [AuthGuard] },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
