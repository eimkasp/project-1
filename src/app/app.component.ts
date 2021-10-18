import { Component } from '@angular/core';


// Reikia modifikuoti šiuos duomenis į
// https://stackblitz.com/edit/angular-bcxw8b?file=src%2Fapp%2Fproducts.ts

// Papildomai: Pabandykite perkelti duomenis i atskira faila, products.ts
const ELEMENT_DATA: Object[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'project-a';

  // Data source yra musu duomenu masyvas, kuri perduosime i mat-table komponenta
  dataSource = ELEMENT_DATA;

  // DisplayedColumns - stulpeliai, kuriuos atvaizduosime lenteleje
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
}
