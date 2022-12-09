import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,
} from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

import CalculatorPage from './components/CalculatorPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Quote from './components/Quote';
import Home from './components/Home';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="calculator">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/calculator" element={<CalculatorPage />} />
            <Route path="/quote" element={<Quote />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
