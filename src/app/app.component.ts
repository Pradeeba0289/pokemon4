import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  pokemonArray: Array<string> = [];
  pokeAbilities: any;
  pokeAbilitiesArr: any;
  searchText;
  p: number = 1;
  constructor(private router: Router) { }

  ngOnInit() {
    this.fetchPokemonList();
  }
  fetchPokemonList() {
   
    fetch('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0')
    .then(response => response.json())
    .then((allpokemon) => {
     allpokemon.results.forEach((pokemon) => {
       let url = pokemon.url
     fetch(url)
     .then(response => response.json())
     .then((pokeData) => {
       console.log('pokeData',pokeData);
       
       this.pokemonArray.push(pokeData);
       console.log('this.pokemonArray', this.pokemonArray);

     
     })
    }) 
  })
}
redirectPokemonDetails(pokeId){
  this.router.navigate(['/pokedetails']);

}
}
 

