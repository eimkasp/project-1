import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsTableComponent } from './products-table/products-table.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ProductsDetailsComponentComponent } from './products-details-component/products-details-component.component';


// Cia aprasysime visus savo aplikacijos puslapius
const routes: Routes = [
  // Pradinis puslapis
  { path: '', component: ProductsTableComponent },

  // Produktu puslapiai

  // Produkto informacijos puslapis, su dinaminiu :id parametru,
  // kuri perduosime, kad atvaizduoti konkretu produkta
  { path: 'products/:id', component: ProductsDetailsComponentComponent },

  // Kontaktu puslapis
  { path: 'contacts', component: ContactFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
