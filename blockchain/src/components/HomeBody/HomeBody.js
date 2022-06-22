import React from 'react';

import APY from '../APY/APY';

import {images} from '../../constants';
import './Homebody.css';

const HomeBody = () => (
    <div className='homebody'>
        <div className='homebody__header'>
            <p className='homebody__header-title'>SWap</p>
            <div className='homebody__list'>
                <div className='homebody__list-item_ethereum'>
                    <img src={images.Rectangle287} alt='rectangle' />
                    <p className='homebody__list-item_ethereum-text'>
                        Ethereum
                    </p>
                </div>
                <div className='homebody__list-item_notify'>
                    <img
                        className='img-bell'
                        src={images.NotificationsIcon}
                        alt='notify'
                    />
                    <img
                        className='img-alert'
                        src={images.Notificationalert}
                        alt='notifyalert'
                    />
                </div>
                <div className='homebody__list-item_avatar'>
                    <img src={images.ProfilePic} alt='profile' />
                </div>
            </div>
        </div>

        {/* <div className='APY__container'>
            <APY index='#1' src={images.DOTIcon} text='10.07% APY' />
            <APY index='#2' src={images.USDTIcon} text='9.58% APY' />
            <APY index='#3' src={images.AVAXIcon} text='5.19% APY' />
            <APY index='#4' src={images.USDCIcon} text='4.05% APY' />
            <APY index='#5' src={images.MATICIcon} text='3.90% APY' />
            <APY index='#6' src={images.BTCIcon} text='3.18% APY' />
        </div> */}
    </div>
);

export default HomeBody;
