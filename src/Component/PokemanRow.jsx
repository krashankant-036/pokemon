import React from 'react';
import Button from '@mui/material/Button';

function PokemanRow({ pokeman, setPokeman}) {
  
// console.log(pokeman);
  return (
    <tr key={pokeman.id}>
      <td>{pokeman.name.english}</td>
      <td>{pokeman.type.join(", ")}</td>  {/* Joins types with a comma and space */}
      <td>
        <Button 
          variant="contained" 
          color="primary"
           onClick={() => setPokeman(pokeman)}  // Call the onClick handler with the Pokémon
        >
          More Info
        </Button>
      </td>
    </tr>
  );
}

export default PokemanRow;
