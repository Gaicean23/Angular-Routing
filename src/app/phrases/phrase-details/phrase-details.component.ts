import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Phrase } from '../../shared/phrase.class';
import { PhraseService } from '../../shared/phrase.service';

@Component({
  selector: 'app-phrase-details',
  templateUrl: './phrase-details.component.html',
  styleUrls: ['./phrase-details.component.scss']
})
export class PhraseDetailsComponent implements OnInit {

  phrase: Phrase;

  constructor(private svc: PhraseService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

    this.activatedRoute.params.forEach((params: Params) => {
      const id = +params.id;

      this.svc.getPhrase(id).then(res => this.phrase = res);
    });
  }

  goToPhrasesList(): void {
    // /phrases
    this.router.navigate(['/phrases']);
  }
}
