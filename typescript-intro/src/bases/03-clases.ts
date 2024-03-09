import axios from 'axios';
import { PokeapiResponse } from '../interfaces/pokeapi-response.interface';

//Forma mas larga de representar las clases
export class Pokemon {
    public id: number;
    public name: string;

    constructor(id:number, name:string) {
        this.id = id;
        this.name = name;
        console.log('Constructor llamado')
    }

}

//Forma mas corta de representar las clases
export class PokeClass {

    get imageUrl():string{
        return `https://pokemon.com/${this.id}.jpg`
    }

    constructor(
        public readonly id:number, //Esta propiedad no puede ser modificada al instanciar la clase
        public name:string
        ) { }

    //Metodo que puede ser llamado fuera de la clase
    public scream() {
        console.log(`${this.name} says "Woah!"`)
        this.speak()
    }

    //Metodo que puede ser llamado solo dentro de la clase
    private speak() {
        console.log(`${this.id} es el ID`)
    }

    async getMoves() {
        const resp = await axios.get<PokeapiResponse>('https://pokeapi.co/api/v2/pokemon/4')
        console.log(resp.data.moves[0].move)
    }

}

export const poke = new Pokemon(1, 'byd')

export const poke2 = new PokeClass(2, 'jetour')

export const poke3 = new PokeClass(4, 'Getter')

console.log(poke3)

poke3.scream()

console.log(poke3.getMoves())