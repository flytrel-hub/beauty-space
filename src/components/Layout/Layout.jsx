import React from 'react';
import './Layout.scss';
import Header from './Header/Header';
import Footer from './Footer/Footer';

console.log('Layout component rendering...');

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <main className="main-content">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
