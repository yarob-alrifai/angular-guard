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
import { DataComponent } from './components/data/data.component';
import { ResolveService } from './guards/resolve.service';
import { CanLoadService } from './guards/can-load.service';

const routes: Routes = [

  // green CanActivate
  // blue Prevents unauthorized users from accessing certain routes.
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [canActivateGuard]
  },


  // green canActivateChild
  // blue Prevents unauthorized users from accessing child routes.
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
// blue Prevents users from accidentally leaving a route if there are unsaved changes
  {
    path: 'form',
    component: FormComponent,
    canDeactivate: [canDeactivateGuard]
  },

// green resolve guard, for laod data befor load the component
// blue Fetches data before the route is activated.
  {
    path: 'data',
    component: DataComponent,
    resolve: { data: ResolveService }
  },
// green canLoad to prevent lazyloading if the user does not authorized
// blue Prevents lazy-loaded modules from being loaded if the user is not authorized
  {
    path: 'admin',
    loadChildren: () => import('./components/admin/admin.module').then(m => m.AdminModule),
    canLoad: [CanLoadService]
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
