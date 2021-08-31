import React, {useState} from 'react';
import { useSelector } from 'react-redux';
import TextField, { Input } from '@material/react-text-field';
import SearchIcon from '@material-ui/icons/Search';

//import logo from '../../assets/logo.svg';
import logo2 from '../../assets/logo.png'
import restaurante from '../../assets/restaurante-fake.png';
import {Card, RestaurantCard, Modal, Map} from '../../components';


//Styles
import {Wrapper, Container, Search, Logo, Carousel, CarouselTitle} from './styles';


const Home = () => {
  const [inputValue, setInputValue] = useState('');
  const [query, setQuery] = useState(null);
  const [modalOpened, setModalOpened] = useState(true);
  const { restaurants } = useSelector((state) => state.restaurants);

  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slideToScroll: 4,
    adaptiveHeight: true,
  };
  
  function handleKeyPress(e) {
    if (e.key === 'Enter') {
      setQuery(inputValue);
    }
  }

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
          <Input 
            value={inputValue} 
            onKeyPress={handleKeyPress} 
            onChange={(e) => setInputValue(e.target.value)}
          />  
          </TextField>
          <CarouselTitle>Na sua Área</CarouselTitle>
          <Carousel {...settings}>
            {restaurants.map((restaurant) =>
              <Card key={restaurant.place_id}
                photo={restaurant.photos ? restaurant.photos[0].getUrl():restaurante} 
                title={restaurant.name} 
              />
            )}            
          </Carousel>
        </Search>
        {restaurants.map((restaurant) => (
          <RestaurantCard restaurant={restaurant}/>
        ))}
      </Container>
      <Map query={query}/>
      {/*<Modal open={modalOpened} onClose = {() => setModalOpened(!modalOpened)}/>*/}
    </Wrapper>
  );
}
export default Home;