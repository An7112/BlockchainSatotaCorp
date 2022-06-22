import React from 'react'
import './notifications.css'
import linked from '../../assets/linked.png'
import congrats from '../../assets/congrats.png'

function Notifications() {
  return (
    <div className='background'>
      <div className="div-nofications">
        <p className='account-activity '>Account activity</p>
        <p className='content-notification '>You deposited 169.5 AVAX in the vault</p>
        <p className='time-notification'>9:24am</p>
        <p className="monney-notification ">+5,000 USDC</p>
        <p className="monney-notification-pluss ">+$5,000.00</p>
        <div className="line"></div>

        <p className='account-activity title'>Account activity</p>
        <p className='content-notification content'>You traded $5,000 USDC for 169.50 AVAX</p>
        <p className='time-notification time'>9:24am</p>
        <p className="monney-notification monney">+169.5 AVAX</p>
        <p className="monney-notification-pluss monney-pluss">-$5,000.00</p>
        <div className="line line-22"></div>

        <p className='account-activity title-3'>Account activity</p>
        <p className='content-notification content-3'>You deposited $500 in the USDC vault</p>
        <p className='time-notification time-3'>9:24am</p>
        <p className="monney-notification monney-3">+5,00 USDC</p>
        <p className="monney-notification-pluss monney-pluss-3">+$5,00.00</p>
        <div className="line line-23"></div>

        <p className='account-activity title-4'>Interest earnings</p>
        <p className='content-notification content-4'>Received $290.34 from Dynamic</p>
        <p className='time-notification time-4'>6:45am</p>
        <p className="monney-notification monney-4">+290.34 USDC</p>
        <p className="monney-notification-pluss monney-pluss-4">+$290.34</p>
        <div className="line line-24"></div>

        <p className='account-activity title-5'>Account activity</p>
        <p className='content-notification content-5'>You funded your account with $500 </p>
        <p className='time-notification time-5'>May 19</p>
        <p className="monney-notification monney-5">+500 USDC</p>
        <p className="monney-notification-pluss  monney-pluss-5">+$500.00</p>
        <div className="line line-25"></div>

        <p className='account-activity title-6'>Account activity</p>
        <p className='content-notification content-6'>You deposited $1,000 in the USDC vault</p>
        <p className='time-notification time-6'>May 16</p>
        <p className="monney-notification monney-6">+1,000 USDC</p>
        <p className="monney-notification-pluss  monney-pluss-6">+$1,000.00</p>
        <div className="line line-26"></div>

        <p className='account-activity title-7'>Account activity</p>
        <p className='content-notification content-7'>You funded your account with $1,000</p>
        <p className='time-notification time-7'>May 13</p>
        <p className="monney-notification monney-7">+10,000 USDC</p>
        <p className="monney-notification-pluss  monney-pluss-7">+$10,000.00</p>
        <div className="line line-27"></div>

        <p className='account-activity title-8'>Account activity</p>
        <p className='content-notification content-8'>Chase Bank 0245 has been connected</p>
        <p className='time-notification time-8'>May 11</p>
        <img src={linked} alt="linked" className='icon linked'/>
        <p className='linked-text text-contro'>Linked</p>
        <div className="line line-28"></div>

        <p className='account-activity title-9'>Account activity</p>
        <p className='content-notification content-9'>KYC complete! Deposits enabled.</p>
        <p className='time-notification time-9'>May 11</p>
        <img src={congrats} alt="congrats" className='icon congrats'/>
        <p className='congrats-text text-contro'>Congrats</p>
      
      </div>

    </div>
  )
}

export default Notifications