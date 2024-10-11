import { Component } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Layout from './components/Layout/Layout';
import SecondLayout from './components/SecondLayout/SecondLayout';
import Findme from './components/Findme/Findme';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Resume from './components/Resume/Resume';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Routes>
            <Route path='/' element={<Navigate to={"/home"} />} /> 
            <Route path="/home" element={<><Layout /><SecondLayout /><Findme /></>} /> {/* Home */}
            <Route path="/about" element={<><About /><Findme /></>} /> {/* Hakkında sayfası */}
            <Route path="/projects" element={<Projects />} /> {/* Projeler sayfası */}
            <Route path="/resume" element={<Resume />} /> {/* Özgeçmiş sayfası */}
          </Routes>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
