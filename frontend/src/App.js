import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './Components/Header'
import Footer from './Components/Footer'
import {Container} from 'react-bootstrap'
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen'

function App() {
  const mofe = 'here from app'
  return (
    <Router>
   
    <Header teeth={mofe}/>
    <main className='py-3'>
    <Container>
    <Route path='/' component={HomeScreen} exact/>  
    <Route path='/product/:id' component={ProductScreen}/>

    </Container>
    </main>
    <Footer/>   

    </Router>
    
  );
}

export default App;
