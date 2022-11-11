import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  message: string = "";
  liste;
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.liste = this.dataService.listeArticles;
  }

  onAffiche(arg: string) {
    return this.message = "Merci d'avoir voté pour l'article : " + arg;
  }

}
