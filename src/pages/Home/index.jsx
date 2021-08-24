import React, {useState} from 'react';
import Slider from 'react-slick';
import TextField, { Input } from '@material/react-text-field';
import SearchIcon from '@material-ui/icons/Search';

//import logo from '../../assets/logo.svg';
import logo2 from '../../assets/logo.png'
import restaurante from '../../assets/restaurante-fake.png';
import {Card, RestaurantCard} from '../../components';


//Styles
import {Wrapper, Container, Search, Logo, Map, Carousel, CarouselTitle} from './styles';


const Home = () => {

  const [inputValue, setInputValue] = useState('');
  
  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slideToScroll: 4,
    adaptiveHeight: true,
  };
  
  return(
    <Wrapper>
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
          <CarouselTitle>Na sua Área</CarouselTitle>
          <Carousel {...settings}>
            <Card photo ={restaurante} title= "rest0"/>
            <Card photo ={restaurante} title= "rest1" />
            <Card photo ={restaurante} title= "rest2" />
            <Card photo ={restaurante} title= "rest3" />
            <Card photo ={restaurante} title= "rest4" />            
          </Carousel>
        </Search>
        <RestaurantCard/>
      </Container>
      <Map/>
    </Wrapper>
  );
}
export default Home;