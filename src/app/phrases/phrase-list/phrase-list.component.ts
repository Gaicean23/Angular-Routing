import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Phrase } from '../../shared/phrase.class';
import { PhraseService } from '../../shared/phrase.service';



@Component({
  selector: 'app-phrase-list',
  templateUrl: './phrase-list.component.html',
  styleUrls: ['./phrase-list.component.scss']
})
export class PhraseListComponent implements OnInit {

  phrases: Phrase[];
  selectedID: number;

  constructor(private svc: PhraseService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.selectedID = +params.id;
      this.svc
        .getAll()
        .then(res => this.phrases = res);

    });
  }

  onSelect(selected: Phrase): void {

    // идём в /phrase 1 к примеру
    this.router.navigate(['/phrases', selected.id])
  }
  isSelected(phrase: Phrase): boolean {
    return phrase.id === this.selectedID;
  }
}
