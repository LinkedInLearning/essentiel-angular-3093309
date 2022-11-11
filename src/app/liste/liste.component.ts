import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {
  message: string = "";

  liste = [
    {
      id: 1,
      titreArticle: "Vélo",
      prixArticle: 80,
      description: "Un super vélo tout terrain",
      urlImg: "../assets/images/velo.jpeg",
      textAltImg: "Un vélo",
      dispo: false
    },
    {
      id: 2,
      titreArticle: "TV",
      prixArticle: 230,
      description: "Très bonne qualité d'écran",
      urlImg: "../assets/images/tv.jpeg",
      textAltImg: "Une télévision",
      dispo: true
    },
    {
      id: 3,
      titreArticle: "Jouet",
      prixArticle: 15,
      description: "Neuf, jamais utilisé",
      urlImg: "../assets/images/jouet.jpeg",
      textAltImg: "Un jouet pour enfant",
      dispo: true
    }
  ]


  constructor(private dataService: DataService) { }

  /**
   *  Supprimer la variable liste de la ligne 12 à 40 
   *  et décommenter les lignes 51, 54 et 58
   *  afin de tester la connexion serveur avec HttpClient
   */

  //liste: any = [];

  ngOnInit(): void {
    //this.getList();
  }

  getList() {
    //this.dataService.getListFromServer().subscribe(liste => { this.liste = liste });
  }

  onAffiche(arg: string) {
    return this.message = "Merci d'avoir voté pour l'article : " + arg;
  }

}
