import React from 'react';

import APY from '../APY/APY';
import Portfolio from '../Portfolio/Portfolio';
import Fund from '../Fund/Fund';
import Assets from '../Assets/Assets';

import {images} from '../../constants';
import './Homebody.css';

const HomeBody = () => (
    <div className='homebody'>
        <div className='homebody__header'>
            <p className='homebody__header-title'>Home</p>
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

                <div className='dash' />
                <div className='homebody__list-item_avatar'>
                    <img src={images.ProfilePic} alt='profile' />
                </div>
            </div>
        </div>

        <div className='APY__container'>
            <APY index='#1' src={images.DOTIcon} text='10.07% APY' />
            <APY index='#2' src={images.USDTIcon} text='9.58% APY' />
            <APY index='#3' src={images.AVAXIcon} text='5.19% APY' />
            <APY index='#4' src={images.USDCIcon} text='4.05% APY' />
            <APY index='#5' src={images.MATICIcon} text='3.90% APY' />
            <APY index='#6' src={images.BTCIcon} text='3.18% APY' />
        </div>

        <div className='portfolio-funding__container'>
            <Portfolio />
            <Fund />
        </div>

        <div className='assets__container'>
            <div className='assets__head'>
                <p className='assets__head-title'>Assets</p>
                <p className='assets__head-title_sub'>in vaults</p>
                <p className='assets__head-desc'>outside vaults</p>
            </div>

            <div className='assets__content'>
                <div className='assets__content-list'>
                    <p className='assets__content-item_name'>Name</p>
                    <p className='assets__content-item_balance'>Balance</p>
                    <p className='assets__content-item_interest'>Interest</p>
                    <p className='assets__content-item_allocation'>
                        Allocation
                    </p>
                </div>
                <Assets
                    src={images.USDCIcon}
                    title='USD Coin'
                    sub='USDC'
                    balancePrice='$131,359.34'
                    balanceSub='131,359.34 USDC'
                    interestPrice='$9,131.78'
                    interestSub='+$9,131.78'
                    percent='38.3%'
                />
                <Assets
                    src={images.BTCIcon}
                    title='Bitcoin'
                    sub='BTC'
                    balancePrice='$112,193.19'
                    balanceSub='3.81 BTC'
                    interestPrice='$9,131.78'
                    interestSub='+$9,131.78'
                    percent='32.8%'
                />
                <Assets
                    src={images.AVAXIcon}
                    title='USD Coin'
                    sub='USDC'
                    balancePrice='$131,359.34'
                    balanceSub='131,359.34 USDC'
                    interestPrice='$9,131.78'
                    interestSub='+$9,131.78'
                    percent='12.1%'
                />
                <Assets
                    src={images.DOTIcon}
                    title='USD Coin'
                    sub='USDC'
                    balancePrice='$131,359.34'
                    balanceSub='131,359.34 USDC'
                    interestPrice='$9,131.78'
                    interestSub='+$9,131.78'
                    percent='7.7%'
                />
            </div>
        </div>
    </div>
);

export default HomeBody;
