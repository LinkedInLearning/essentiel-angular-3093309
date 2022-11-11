import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms';

@Component({
  selector: 'app-ajouter',
  templateUrl: './ajouter.component.html',
  styleUrls: ['./ajouter.component.css']
})
export class AjouterComponent implements OnInit {
  titleToAdd = '';
  priceToAdd = '';

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: Form) {
    const newTitle = this.titleToAdd;
    const newPrice = this.priceToAdd;
    console.log("newTitle : " + newTitle);
    console.log("newPrice : " + newPrice);
  }

}
