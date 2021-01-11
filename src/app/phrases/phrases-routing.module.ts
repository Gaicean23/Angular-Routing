import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CanDeactivateGuardService } from '../shared/can-deactivate-guard.service';
import { PhraseDetailsComponent } from './phrase-details/phrase-details.component';
import { PhraseHomeComponent } from './phrase-home/phrase-home.component';
import { PhraseListComponent } from './phrase-list/phrase-list.component';


const routes: Routes = [
  { path: '', redirectTo: '/phrases', pathMatch: 'full' },
  {
    path: 'phrases',
    component: PhraseHomeComponent,
    children: [
      {
        path: '',
        component: PhraseListComponent,
        children: [
          {
            path: ':id',
            canDeactivate: [CanDeactivateGuardService],
            component: PhraseDetailsComponent
          },
          { path: '', component: PhraseDetailsComponent }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PhrasesRoutingModule { }
