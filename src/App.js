import styled from '@emotion/styled';
import './App.css';
import { useState, useEffect } from 'react';
import PokemanFilter from './Component/PokemanFilter';
import PokemanTable from './Component/PokemanTable';
import PokemanContext from './PokemanContext';
import { useAuth0 } from '@auth0/auth0-react';
import { Button } from '@mui/material';
import PokemanInfo from './Component/PokemanInfo';
import './Component/Star'
const Title = styled.h1`text-align :center`;
const PageContainer = styled.div`
  margin: auto;
  width: 800px;
  padding-top: 1em;
`;

const ButtonContainer = styled.div`
  margin: auto;
  width: 40px;
  padding-top: 20em;
  display :flex;
  justify-content:space-around;
  padding:4em;
  margin: auto;
`;
const TwoColumnLayout = styled.div`
  display:grid;
  grid-template-columns: 80% 20%;
  grid-column-gap :1rem;
`


function App() {
  const [pokeman, pokemanSet] = useState(null);
  const [filter, filterSet] = useState("");
  const [selectPokeman, selectPokemanSet] = useState(null);

  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();
  // console.log(isAuthenticated, user);

  useEffect(() => {
    fetch("http://localhost:3004/pokeman")
      .then(res => res.json())
      .then(data => pokemanSet(data));
  }, []);

  if (!pokeman) {
    return <div>Loading...</div>;
  }

  return (
    
    <PokemanContext.Provider value={{
      filter,
      pokeman,
      filterSet,
      selectPokeman,
      selectPokemanSet
    }}>
      {!isAuthenticated && (
        <ButtonContainer>
          <Button
            variant="contained"
            color="primary"
            onClick={() => loginWithRedirect()}>
            Login
          </Button>
        </ButtonContainer>
      )}

      {isAuthenticated && (
        <>
          <ButtonContainer>
            <h4>hii {user.given_name}</h4>
            <Button
              variant="contained"
              color="primary"
              onClick={() => logout({ returnTo: window.location.origin })}>
              Logout
            </Button>
          </ButtonContainer>

          <PageContainer>
            <Title>Pokeman Search</Title>
            <TwoColumnLayout>
              <div>
                <PokemanFilter />
                <PokemanTable />
              </div>

              <PokemanInfo />
            </TwoColumnLayout>
          </PageContainer>
        </>
      )}
    </PokemanContext.Provider>
  );
}

export default App;
