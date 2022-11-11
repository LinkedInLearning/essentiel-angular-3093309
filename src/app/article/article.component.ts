import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  titreArticle: string = "Titre de l'article";
  prixArticle: number = 12;

  constructor() { }

  ngOnInit(): void {
  }

}
