import React from 'react'
import "./dropdown.css"
import avata from '../assets/blockie-4.png'
import close from '../assets/close.png'
import background from '../assets/Opacity.png'


function Account_popup() {
  return (
    <div className='home'>
      <img src={background} alt={background}  />
      <div className="dropdown">
        <div className="dropdown-rectangle"></div>
        <img src={close} alt={close} className="img-close" />
        <div className="profile-pic"></div>
        <img src={avata} alt={avata} className='profile-pic'/>
        <div><p className="text-paren">@cameron</p></div>
        <div><p className="text-child">cameron@email.com</p></div>
        <div className='button-rectangle'></div>
        <a href='/' className='text-settings'>Settings</a>
        <a href='/' className='text doc'>Docs</a>
        <div className='line line1'></div>
        <a href='/' className='text referrals'>Referrals</a>
        <div className='line line2'></div>
        <a href='/' className='text help-center'>Help Center</a>
        <div className='line line3'></div>
        <a href='/' className='text notifications'>Notifications</a>
        <div className='line line4'></div>
        <a href='/' className='text sign-out'>Sign out</a>
      </div>
      

    </div>
  )
}

export default Account_popup;
