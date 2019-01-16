import React, { Component } from 'react';
import './App.css';
import Home from './Component/Home/Home';
import Skills from './Component/Skills/Skills';
import Works from './Component/Works/Works';
import Form from './Component/Form/Form';
import Navbar from './Component/Navbar/Navbar';
import { Route} from 'react-router-dom';
import Footer from './Component/Footer/Footer';
import Services from './Component/Services/Services';


class App extends Component {

  render() {
    return (
      <div className="App">
        <Navbar/>
        <Route path='/'  exact component={Home}/>
        <Route path='/skills'  exact component={Skills}/>
        <Route path='/services'  exact component={Services}/>
        <Route path='/works'  exact component={Works}/>
        <Route path='/form'  exact component={Form}/>
        <Footer/>
      </div>
    );
  }
}

export default App;
