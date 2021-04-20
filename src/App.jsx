import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

// Components
import Home from './Home/Home';
import About from './About/About';
import Work from './Work/Work';
import Blog from './Blog/Blog';
import Contact from './Contact/Contact';

// CSS
import './App.css';

const App = () => (
  <Router>
    <div className='container mx-auto'>
      <div className='flex flex-col'>
        <header className='flex flex-row py-2'>
          <Link id='site-logo' to='/'>
            <span id='logo-text'>MM</span>
          </Link>
          <nav className='flex-grow'>
            <div>
              <Link to='/about'>about</Link>
              <Link to='/work'>work</Link>
              <Link to='/blog'>blog</Link>
              <Link to='/contact'>contact</Link>
            </div>
          </nav>
        </header>
        <Switch>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/work'>
            <Work />
          </Route>
          <Route path='/blog'>
            <Blog />
          </Route>
          <Route path='/contact'>
            <Contact />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </div>
    </div>
  </Router>
);

export default App;
