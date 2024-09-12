import React, { useContext } from 'react'
import PokemanContext from '../PokemanContext'

function PokemanInfo() {
    const{selectPokeman} = useContext(PokemanContext);
    console.log("selectPokeman",selectPokeman);
  return selectPokeman ?(
    <div>
      <h2>{selectPokeman.name.english}</h2>
      <table>
        <td>
        {Object.keys(selectPokeman.base).map((key)=>
        (
          <tr key={key}>
            <td>
                 {key}
            </td>
            <td>{selectPokeman.base[key]}</td>
          </tr>
        )
        )}
        </td>
      </table>
    </div>
  ):null
}

export default PokemanInfo
