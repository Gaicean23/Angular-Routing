import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Phrase } from './phrase.class';
import { PhraseService } from './phrase.service';

@Injectable({
  providedIn: 'root'
})
export class PhraseDetailsResolveService implements Resolve<any> {

  constructor(private svc: PhraseService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot): Observable<Phrase | boolean> | Promise<Phrase | boolean> {


    return this.svc
      .getPhrase(+route.params.id)
      .then(phrase => {
        if (phrase) {
          return phrase
        } else {
          this.router.navigate(['/phrases']);
          return false;
        }
      });
  }
}
