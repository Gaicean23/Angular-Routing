import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Phrase } from '../../shared/phrase.class';
import { PhraseService } from '../../shared/phrase.service';



@Component({
  selector: 'app-phrase-list',
  templateUrl: './phrase-list.component.html',
  styleUrls: ['./phrase-list.component.scss']
})
export class PhraseListComponent implements OnInit {

  phrases: Phrase[];

  constructor(private svc: PhraseService, private router: Router) { }

  ngOnInit(): void {
    this.svc.getAll().then(res => this.phrases = res)
  }

  onSelect(selected: Phrase): void {

    // идём в /phrase 1 к примеру
    this.router.navigate(['/phrase', selected.id])
  }
}
