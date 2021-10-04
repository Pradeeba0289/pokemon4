import { NgModule } from '@angular/core';
import { Routes, RouterModule,ActivatedRoute } from '@angular/router';
import { PokeDetailsComponent } from './poke-details.component';


const routes: Routes = [
  
  { path: 'pokedetails', component: PokeDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
