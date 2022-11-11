import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {

  message: string = "";
  liste: any = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getList();
  }

  onAffiche(arg: string) {
    return this.message = "Merci d'avoir voté pour l'article : " + arg;
  }

  getList() {
    this.dataService.getListFromServer().subscribe(liste => { this.liste = liste });
  }

}
