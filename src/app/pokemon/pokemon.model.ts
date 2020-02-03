enum Type {
    Plante, Poison, Feu, Vol, Eau, Electrique}

export class PokemonModel {
 specie: string;
 description: string;
 types: Type;
constructor(specie: string, description: string, types: Type) {
    this.specie = specie;
    this.description = description;
    this.types = types;
}
}
