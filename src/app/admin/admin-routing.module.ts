import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from '../shared/auth-guard.service';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { ManagePhrasesComponent } from './manage-phrases/manage-phrases.component';
import { ManageUsersComponent } from './manage-users/manage-users.component';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminHomeComponent,
    canActivate: [AuthGuardService],
    children: [
      { path: 'phrases', component: ManagePhrasesComponent },
      { path: 'users', component: ManageUsersComponent },
      { path: '', redirectTo: 'phrases', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
