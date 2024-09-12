import styled from '@emotion/styled';
import { useContext } from 'react'; // Use useContext to access context
import PokemanContext from '../PokemanContext';
//import PokemonContext from '../PokemonContext'; // Ensure correct import

const Input = styled.input`
  width: 100%;
  border-radius: 5px;
  padding: 0.2rem;
  font-size: large;
`;

function PokemonFilter() {
  // Use useContext to get the filter and filterSet from context
  const { filter, filterSet } = useContext(PokemanContext);

  // console.log('filter:', filter); // Correct the syntax here

  return (
    <Input
      value={filter}
      type="text"
      onChange={(event) => filterSet(event.target.value)} // Use onChange for text input
    />
  );
}

export default PokemonFilter;

