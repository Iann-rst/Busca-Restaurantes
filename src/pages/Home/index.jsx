import React, {useState} from 'react';
import TextField, { Input } from '@material/react-text-field';

import SearchIcon from '@material-ui/icons/Search';

//import logo from '../../assets/logo.svg';
import logo2 from '../../assets/logo.png'
import {Container, Search, Logo} from './styles';


const Home = () => {

  const [inputValue, setInputValue] = useState('cachorro');
    return(
      <Container>
        <Search>
          <Logo src={logo2} alt="Logo do restaurante"/>
          <TextField
            label="Pesquisar Restaurantes"
            outlined
          // onTrailingIconSelected={()=> this.setState({ value: 'Pesquisar' })}
            trailingIcon={<SearchIcon role="button" icon="search" />}
          >
          <Input value={inputValue} onChange={(e) => setInputValue(e.target.value)}
          />  
          </TextField>
        </Search>
      </Container>
    );
}
export default Home;