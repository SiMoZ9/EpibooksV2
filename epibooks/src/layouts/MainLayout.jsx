import React from 'react';
import Footer from "../compontens/footer/Footer";
import Navigation from "../compontens/navbar/Navbar";
const MainLayout = ({children}) => {
    return (
        <>
            <Navigation/>
            {children}
            <Footer/>
        </>
    )
};

export default MainLayout;