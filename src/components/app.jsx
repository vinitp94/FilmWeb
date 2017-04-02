import React from 'react';
import Header from './header/header';
import Footer from './footer/footer';

const App = ({ children }) => (
  <div className='body'>
    <Header />
    { children }
    <Footer />
  </div>
);

export default App;
