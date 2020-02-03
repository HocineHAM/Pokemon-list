import { Component, OnInit } from '@angular/core';
import { PokemonModel } from '../pokemon/pokemon.model';
import data from '../../assets/pokemon.data';
import { element } from 'protractor';
@Component({
  selector: 'pkd-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css']
})
export class PokedexComponent implements OnInit {
  pokemons: PokemonModel[] = new Array();

  constructor() { }


  ngOnInit() {
      data.forEach(element => {
      let specie = element.specie;
      let description = element.description;
      let  types = element.types;
       let pokemon = new PokemonModel(specie, description, types);
       this.pokemons.push(pokemon); 

    });
  console.log(this.pokemons);
  }

}
