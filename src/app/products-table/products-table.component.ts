import { Component, OnInit } from '@angular/core';

import { ELEMENT_DATA } from '../elements';

@Component({
  selector: 'app-products-table',
  templateUrl: './products-table.component.html',
  styleUrls: ['./products-table.component.scss']
})
export class ProductsTableComponent implements OnInit {

    // Data source yra musu duomenu masyvas, kuri perduosime i mat-table komponenta
    dataSource = ELEMENT_DATA;

    // DisplayedColumns - stulpeliai, kuriuos atvaizduosime lenteleje
    displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'button'];


  constructor() { }

  ngOnInit(): void {
  }

}
