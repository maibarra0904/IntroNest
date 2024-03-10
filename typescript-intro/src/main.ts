import './style.css'
import { setupCounter } from './counter.ts'
import { age, name } from './bases/01-types.ts'
import { pokemonId, personas} from './bases/02-objects.ts'
import { poke, poke2 } from './bases/03-clases.ts'
import { charmander } from './bases/06-decorators2.ts'
//import { charmander } from './bases/05-decorators.ts'
//import { charmander } from './bases/04-injections.ts'

//charmander.getMoves();
charmander.speak();
charmander.speak2();

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
     ${poke.name} es el nombre con la clase larga <br />
     ${poke2.name} es el nombre con la clase corta
    </p>
    <p class="read-the-docs">
     ${name} tiene ${age} anios y es de genero ${personas[0].gender}
    </p>
    <p>
      ${pokemonId}
    </p>
    <p>
      ${personas[1].name}
    </p>
    <p>

    </p>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
