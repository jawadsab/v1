import React from 'react'
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../styles/global.css"


const Layout = ({children}) => {
  return (
    <div className="bg-darkBlue min-h-screen " style={{minHeight:"100vh"}}>
        <Navbar />
        <div className="m-auto relative" style={{maxWidth:"1023px"}}>
            {children}
        </div>
        <Footer />
    </div>
  )
}

export default Layout