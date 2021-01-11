import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhrasesRoutingModule } from './phrases-routing.module';
import { PhraseListComponent } from './phrase-list/phrase-list.component';
import { PhraseDetailsComponent } from './phrase-details/phrase-details.component';
import { PhraseHomeComponent } from './phrase-home/phrase-home.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    PhraseListComponent,
    PhraseDetailsComponent,
    PhraseHomeComponent
  ],
  imports: [
    CommonModule,
    PhrasesRoutingModule,
    FormsModule
  ]
})
export class PhrasesModule { }
