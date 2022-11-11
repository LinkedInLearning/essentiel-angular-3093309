import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  listeArticles = [
    {
      titreArticle: "Vélo",
      prixArticle: 80,
      description: "Un super vélo tout terrain",
      urlImg: "../assets/images/velo.jpeg",
      textAltImg: "Un vélo",
      dispo: false
    },
    {
      titreArticle: "TV",
      prixArticle: 230,
      description: "Très bonne qualité d'écran",
      urlImg: "../assets/images/tv.jpeg",
      textAltImg: "Une télévision",
      dispo: true
    },
    {
      titreArticle: "Jouet",
      prixArticle: 15,
      description: "Neuf, jamais utilisé",
      urlImg: "../assets/images/jouet.jpeg",
      textAltImg: "Un jouet pour enfant",
      dispo: true
    }
  ]

  constructor() { }
}
