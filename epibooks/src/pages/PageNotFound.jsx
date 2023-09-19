import React from 'react';
import Container from "react-bootstrap/Container";
import MainLayout from "../layouts/MainLayout";
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";
const PageNotFound = () => {
    return (
        <MainLayout>
            <h1 style={{textAlign: "center"}}>Error 404 Page Not Found</h1>
            <div className="d-flex justify-content-center align-items-center">
            <Button >
                <Link to="/" style={{color: 'white'}}>Torna alla home</Link>
            </Button>
            </div>
        </MainLayout>
    );
};

export default PageNotFound;
