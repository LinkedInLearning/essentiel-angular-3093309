import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  listeArticles: any = [];

  constructor(private httpClient: HttpClient) { }

  getArticle(id: number) {
    const articles = this.listeArticles.find((a) => {
      return a.id == id;
    });
    return articles;
  }

  /*
  *  Veuillez placer le fichier de référence data.json sur un serveur 
  *  Puis récupérer l'adresse URL correspondante afin de tester votre requête
  */

  getListFromServer() {
    return this.httpClient.get<any[]>("lien_vers_serveur");
  }

}
