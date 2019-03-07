import React from 'react';
import { Header, Footer } from '../components';

const LandingLayout = ({ children }) => (
  <div>
    <Header />
    {children}
    <Footer />
  </div>
);

export default LandingLayout;
