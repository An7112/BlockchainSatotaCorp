import React from "react";

import Content from "../Container/Content";

import { images } from "../../constants";
import "./Homebody.css";

const HomeBody = () => (
    <div className="homebody">
        <div className="homebody__header">
            <p className="homebody__header-title">Home</p>
            <div className="homebody__list">
                <div className="homebody__list-item_ethereum">
                    <img src={images.Rectangle287} alt="rectangle" />
                    <p className="homebody__list-item_ethereum-text">
                        Ethereum
                    </p>
                </div>
                <div className="homebody__list-item_notify">
                    <img
                        className="img-bell"
                        src={images.NotificationsIcon}
                        alt="notify"
                    />
                    <img
                        className="img-alert"
                        src={images.Notificationalert}
                        alt="notifyalert"
                    />
                </div>
                <div className="homebody__list-item_avatar">
                    <img src={images.ProfilePic} alt="profile" />
                </div>
            </div>
        </div>
        <Content />
    </div>
);

export default HomeBody;
