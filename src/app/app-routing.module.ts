import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { canActivateGuard } from './guards/can-activate.guard';
import { HomeComponent } from './components/home/home.component';
import { canActivateChildGuard } from './guards/can-activate-child.guard';
import { AdminComponent } from './components/admin/admin.component';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { SettingsComponent } from './components/admin/settings/settings.component';
import { FormComponent } from './components/form/form.component';
import { canDeactivateGuard } from './guards/can-deactivate.guard';

const routes: Routes = [

  // green CanActivate
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [canActivateGuard]
  },


  // green canActivateChild
  {
    path: 'admin',
    component: AdminComponent,
    canActivateChild: [canActivateChildGuard],
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'settings', component: SettingsComponent }
    ]
  },

// green canDeactivate
  {
    path: 'form',
    component: FormComponent,
    canDeactivate: [canDeactivateGuard]
  },







];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
