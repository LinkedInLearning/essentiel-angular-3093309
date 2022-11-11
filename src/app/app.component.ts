import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  secondes: number = 0;

  constructor() { }

  ngOnInit(): void {
    const compteur = interval(1000);

    compteur.subscribe({
      next: (v) => this.secondes = v,
      error: (e) => console.error(e),
      complete: () => console.info('complete')
    })
  }

}
