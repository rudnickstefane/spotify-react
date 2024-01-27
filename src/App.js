import React, { Component } from 'react';
import Header from '../src/componentes/Header/Header';
import './App.css';
import Footer from './componentes/Footer/Footer';
import Main from './componentes/Main/Main';
import Sidebar from './componentes/Sidebar/Sidebar';

class App extends Component {
  render() {
    return (
      <div>
        <Sidebar />
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
