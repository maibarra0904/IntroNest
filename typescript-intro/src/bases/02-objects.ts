export const pokemonId = [1,21,32,43,54]

pokemonId.push(+'65')

console.log(pokemonId)


interface Sujeto {
    id: number;
    name: string;
    age?: number; //Este parametro puede venir o no
    gender: string | undefined; //Este parametro debe venir de una forma u otra pero obligatoriamente
}

export const mario:Sujeto = {
    id: 1,
    name: 'Mario',
    gender: 'masculino'
}

export const evelyn:Sujeto = {
    id: 2,
    name: 'Evelyn',
    gender: 'femenino'
}

export const personas: Sujeto[] = [];

personas.push(mario, evelyn)