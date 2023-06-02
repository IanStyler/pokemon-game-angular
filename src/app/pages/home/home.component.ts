import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  pokemon: any;
  pokemonID: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  buscaPokemon() {
    const pokemonIdOrName = this.pokemonID;
    console.log(pokemonIdOrName);
    this.http.get(`https://pokeapi.co/api/v2/pokemon/${pokemonIdOrName}`)
      .subscribe(
        (data: any) => {
          this.pokemon = data;
          this.atacPokemon();
        },
        (error: any) => {
          console.log('Promesa rebutjada!');
        }
      );
  }

  atacPokemon() {
    const pokemonAttack = this.pokemon.stats.find((stat: any) => stat.stat.name === 'attack');
    const pokemonAttackValue = pokemonAttack.base_stat;

    if (pokemonAttackValue < 50) {
      console.log("Promesa rebutjada! El pokémon té menys de 50 d'atac. Atac del Pokémon: " + pokemonAttackValue);
    } else {
      console.log("Atac del Pokémon: " + pokemonAttackValue);
    }
  }
}
