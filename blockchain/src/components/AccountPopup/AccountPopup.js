import React from 'react'
import './AccountPopup.css'
import { images } from '../../constants'
import '../../page/Home'
import { Link } from 'react-router-dom'
import Home from '../../page/Home'

export default function AccountPopup({ children, open, onClose }) {
    if (!open) return null
    return (
        <div className={Home}>
            <div className="dropdown" >
                <div className='dropdown-box-close'>
                    <div className="dropdown-rectangle">
                        <img src={images.Close} onClick={onClose} alt='' className="img-close" />
                    </div>
                </div>

                <div className="dropdown-box-avata">
                    <div className="dropdown-profile-pic">
                        <img src={images.Avata} alt='' className='profile-pic' />
                    </div>
                </div>
                <div>
                    <p className="text-paren">@cameron</p>
                </div>
                <div>
                    <p className="text-child">cameron@email.com</p>
                </div>
                <div className='button-rectangle'>
                    <a href='#' className='text-settings'>Settings</a>
                </div>

                <a href='#' className='text'>Docs</a>
                <div className='line-acc line1'></div>
                <a href='#' className='text'>Referrals</a>
                <div className='line-acc line2'></div>
                <a href='#' className='text'>Help Center</a>
                <div className='line-acc line3'></div>
                <a href='#' className='text'>Notifications</a>
                <div className='line-acc line4'></div>
                <a href='#' className='text sign-out'>Sign out</a>
            </div>
            {children}
        </div>
    )
}

