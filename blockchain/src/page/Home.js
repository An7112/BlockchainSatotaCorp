import React from 'react';
import Swap from '../components/Swap/Swap';
import SideBar from '../components/SideBar/SideBar';
import HomeBody from '../components/HomeBody/HomeBody';

const Home = () => (
    <div className='home'>
        <SideBar />
        <HomeBody />
        <Swap />
    </div>
);

export default Home;
