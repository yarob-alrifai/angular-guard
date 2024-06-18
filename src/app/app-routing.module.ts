import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { canActivateGuard } from './guards/can-activate.guard';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [canActivateGuard]
  },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
