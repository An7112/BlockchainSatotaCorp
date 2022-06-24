import React from "react";
import { AiFillSetting } from "react-icons/ai";
import "./Swap.css";
import { images } from "../../constants";
import "../HomeBody/HomeBody";

// const Swap = ({ index, src, text }) => (
function SwapBody({ index, src, text }) {
  return (
    <div className="homebody">
      <div className="homebody__header">
        <div className="homebody__head-logo">
          <img src={images.DynamicIcon} alt="dynamicicon" />
        </div>
        <p className="homebody__header-title">Swap</p>
        <div className="homebody__list">
          <div className="homebody__list-item_ethereum">
            <img src={images.Rectangle287} alt="rectangle" />
            <p className="homebody__list-item_ethereum-text">Ethereum</p>
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

          <div className="dash" />
          <div className="homebody__list-item_avatar">
            <img src={images.ProfilePic} alt="profile" />
          </div>
        </div>
      </div>

      <div className="Swapbody__content">
        <div className="Swaps">
          <div className="Swap_Chain">
            <div className="Same_Chain">
              <p>Same Chain</p>
            </div>
            <div className="Cross_Chain">
              <p>Cross Chain</p>
            </div>
          </div>
          <div className="Swap_Body">
            <div className="HeaderSwap">
              <div className="header_swap">Swap</div>
              <AiFillSetting className="icon" />
            </div>

            <div className="Swap_USDC">
              <div className="wrapper_USDC">
                <div className="num_USDC">
                  <p>0.00</p>
                </div>
                <div className="limit">
                  <p>Max</p>
                </div>
              </div>
              <div className="USDC">
                <img src={images.Rectangle141} alt="rectangle141" />
                <p>USDC</p>
                <img src={images.Dropdown} alt="dropdown" />
              </div>
            </div>
            <div className="Swap_AVAX">
              <div className="wrapper_AVAX">
                <div className="num_AVAX">
                  <p>0.00</p>
                </div>
              </div>
              <div className="AVAX">
                <img src={images.Rectangle237} alt="rectangle237" />
                <p>AVAX</p>
                <img src={images.Dropdown} alt="dropdown" />
              </div>
            </div>
            <div className="Begin_Swap">
              <p>Begin Swap</p>
            </div>
            <div className="arrow">
              <img src={images.Rectangle146} alt="rectangle146" />
            </div>
            <div className="footer">
              <div className="sec">
                <p className="s"></p>
                <p className="text_footer">Finality</p>
              </div>
              <div className="percent">
                <p className="pt">0.50%</p>
                <p className="free">Free</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
// );

export default SwapBody;
