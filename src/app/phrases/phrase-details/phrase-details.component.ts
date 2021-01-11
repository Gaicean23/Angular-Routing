import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/shared/auth.service';
import { CanComponentDeactivate } from 'src/app/shared/can-deactivate-guard.service';
import { Phrase } from '../../shared/phrase.class';
import { PhraseService } from '../../shared/phrase.service';

@Component({
  selector: 'app-phrase-details',
  templateUrl: './phrase-details.component.html',
  styleUrls: ['./phrase-details.component.scss']
})
export class PhraseDetailsComponent implements OnInit, CanComponentDeactivate {

  phrase: Phrase;
  editValue: string;
  editLanguage: string;

  constructor(private svc: PhraseService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    public authService: AuthService) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe((params: Params) => {
      this.svc
        .getPhrase(+params.id)
        .then(res => {
          this.phrase = res;
          if (this.phrase) {
            this.editValue = this.phrase.value;
            this.editLanguage = this.phrase.language;
          }
        });
    });
  }


  isChanged(): boolean {
    return !(this.phrase.value === this.editValue && this.phrase.language === this.editLanguage);
  }

  save(): void {
    this.phrase.value = this.editValue;
    this.phrase.language = this.editLanguage;

    console.log(this.phrase);

  }

  goToPhraseList(): void {
    const phraseID = this.phrase ? this.phrase.id : null;

    this.router.navigate(['../', { id: phraseID, param1: 'test1', param2: '123' }]);
  }

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.phrase) {
      return true;
    } else if (!this.isChanged()) {
      return true;
    }

    return confirm('Вы не сохранили изменения. \nДанные будут потеряны. \nУйти со страницы в любом случае');
  }

}


//1.15.00