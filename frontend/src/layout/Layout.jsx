import React from 'react';
import Footer from "../components/Footer.jsx";
import Nav from "../components/Nav.jsx";

const Layout = ({children}) => {
  return (
    <div className='flex flex-col min-h-screen'>
        <Nav />
        <div className="flex-1  mx-auto">
        {children}
        </div>
        <Footer />
    </div>
  )
}

export default Layout