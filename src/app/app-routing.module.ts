import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { UsersearchComponent } from './usersearch/usersearch.component';



const routes: Routes = [
  
  {
    path: '',
    redirectTo: '/search',
    pathMatch: 'full'
  },
  {
    path: 'search',
    component: UsersearchComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  }
]


@NgModule({
  exports: [
    RouterModule
  ],
  imports: [RouterModule.forRoot(routes)]
  
})
export class AppRoutingModule { }
