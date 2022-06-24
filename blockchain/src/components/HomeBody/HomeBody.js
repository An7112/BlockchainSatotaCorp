import React, { useState } from 'react';
import { images } from '../../constants';
import './Homebody.css';
import AccountPopup from '../AccountPopup/AccountPopup'


function HomeBody() {
    const [isOpen, setIsOpen] = useState(false)
    return (
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
                    <div className='homebody__list-item_avatar'>
                        <a><img src={images.ProfilePic} alt='profile' onClick={() => setIsOpen(true)} /></a>
                        <AccountPopup open= {isOpen} onClose={() => setIsOpen(false)}>
                            <AccountPopup/>
                        </AccountPopup>
                    </div>
                    
                </div>
            </div>
        </div>
    )
};


export default HomeBody;
