import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  secondes;

  constructor() { }

  ngOnInit(): void {
    const compteur = interval(1000).pipe(
      filter(value => value % 2 === 0),
      map(value => value % 2 === 0 ?
        `${value} est pair` :
        `${value} est impair`
      )
    );

    compteur.subscribe({
      next: (v) => this.secondes = v,
      error: (e) => console.error(e),
      complete: () => console.info('complete')
    })
  }

}
