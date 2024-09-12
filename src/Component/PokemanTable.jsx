

import React ,{useContext} from "react";
import PokemanContext from "../PokemanContext";
import PokemanRow from './PokemanRow';

function PokemanTable() {
  const { pokeman, filter, selectPokemanSet } = useContext(PokemanContext);
//  console.log(pokeman);
  return (
    <table width='100%'>
      <tbody>
        {pokeman.filter((value)=>
          value.name.english.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
        ).slice(0, 10).map((p) => (
          <PokemanRow 
            key={p.id} 
            pokeman={p}  // Correctly pass the individual Pokémon object
            setPokeman={() => selectPokemanSet(p)}  // Pass the Pokémon object to the handler
          />
        ))}
      </tbody>
    </table>
  );
}

export default PokemanTable;






//ncYjtaN6mosPIUFGtTlpuZlVZHKUj9w9