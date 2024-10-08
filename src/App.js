import { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Layout from './components/Layout/Layout';
import SecondLayout from './components/SecondLayout/SecondLayout';
import Findme from './components/Findme/Findme';
import Footer from './components/Footer/Footer';

class App extends Component {
  handleClick = () => {
    alert("Button Clicked");
  };

  render() {
    return (
      <div>
        <Header />
        <Layout />
        <SecondLayout />
        <Findme />
        <Footer />
      </div>
    );
  }
}

export default App;
