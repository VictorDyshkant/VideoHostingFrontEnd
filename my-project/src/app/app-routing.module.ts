import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { Guard } from './enviroment/guard';
import { TempComponent } from './temp/temp.component';
import { GuardUpdate } from './enviroment/guardupdate';


const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'registration',
    loadChildren: () => import('./registration/registration.module').then(m => m.RegistrationModule),
  },
  {
    path: 'forgetpassword',
    loadChildren: () => import('./forget-password/forget-password.module').then(m => m.ForgetPasswordModule),
  },
  {
    path: 'main',
    loadChildren: () => import('./main/main.module').then(m => m.MainModule),
    canActivate:[Guard]  
  },
  {
    path: 'updateuser/:id',
    loadChildren: () => import('./update-user/update-user.module').then(m=>m.UpdateUserModule),
     canActivate:[GuardUpdate]
  },
  {
    path:'temp',
    component:TempComponent
  },
  {
    path : '',
    redirectTo : 'main',
    pathMatch:'prefix'
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers : [Guard,GuardUpdate]
})
export class AppRoutingModule { }
