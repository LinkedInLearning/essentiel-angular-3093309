import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  message: string = "";

  onAffiche(arg: string) {
    return this.message = "Merci d'avoir voté pour l'article : " + arg;
  }

  liste = [
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
}
