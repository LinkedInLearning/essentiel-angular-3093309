import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  titreArticle: string = "Titre de l'article";
  prixArticle: number = 12;
  textAltImg: string = "Titre alternative de l'image";
  urlImg: string = "https://via.placeholder.com/400x250";

  constructor() { }

  ngOnInit(): void {
  }

}
