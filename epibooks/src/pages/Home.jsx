import React from 'react';
import MainLayout from "../layouts/MainLayout";
import LatestRelease from "../compontens/lastestRelease/LatestRelease";
import Welcome from "../compontens/welcome/Welcome";

const Home = () => {
    return (
        <MainLayout>
            <Welcome />

        </MainLayout>
    );
}

export default Home;