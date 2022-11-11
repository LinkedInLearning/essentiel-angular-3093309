import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  //titreArticle: string = "Titre de l'article";
  //prixArticle: number = 12;
  textAltImg: string = "Titre alternative de l'image";
  urlImg: string = "https://via.placeholder.com/400x250";
  totalNbrLike: number = 0;
  comment: string = "Ceci est un commentaire";
  dispo: boolean = false;

  @Input() titreArticle: string;
  @Input() prixArticle: number;
  @Output() info = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onLike() {
    this.totalNbrLike++;
    this.info.emit(this.titreArticle);
  }

}
