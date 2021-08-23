import React, {useState} from 'react';
import TextField, { Input } from '@material/react-text-field';


import logo from '../../assets/logo.svg';

import {Container, Search} from './styles';


const Home = () => {

  const [inputValue, setInputValue] = useState('cachorro');
    return(
      <Container>
        <Search>
          <img src={logo} alt="Logo do restaurante"/>
          <TextField
            label="Pesquisar"
            outlined
          // onTrailingIconSelected={()=> this.setState({ value: 'Pesquisar' })}
          >
          <Input value={inputValue} onChange={(e) => setInputValue(e.target.value)}
          />  
          </TextField>
        </Search>
      </Container>
    );
}
export default Home;