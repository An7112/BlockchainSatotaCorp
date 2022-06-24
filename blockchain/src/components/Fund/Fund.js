import React from "react";

import { images } from "../../constants";
import "./Fund.css";

const Fund = () => (
  <div className="fund">
    <p className="fund__title">Funding</p>

    <div className="fund__chasebank">
      <div className="fund__chasebank-check">
        <img src={images.ChaseBankIcon} alt="chasebank" />
        <div className="fund__chasebank-check_text">
          <p className="fund__chasebank-check_text-title">Chase Bank 0245</p>
          <p className="fund__chasebank-check_text-desc">Checking account</p>
        </div>
      </div>

      <div className="fund__chasebank-btn">
        <a href="#popup1" class="btnn">
          Change
        </a>
        <div id="popup1" class="popup">
          <a href="/" class="close">
            &times;
          </a>
          <div className="TitleFunHead">
            <h2>Funding Source</h2>
          </div>
          <div className="boxinBox">
            <div className="listBox">
              <div className="TextListBox">
                <h2>Bank account</h2>
                <h5>Connect new</h5>
              </div>
              <div className="ButtonlistBox">
                <button type="submit" className="buttons">
                  Current
                </button>
              </div>
            </div>
            <div className="listBox">
              <div className="TextListBox">
                <h2>Debit / Credit</h2>
                <h5>Add card</h5>
              </div>
            </div>
            <div className="listBox">
              <div className="TextListBox">
                <h2>Wire transfer</h2>
                <h5>More info</h5>
              </div>
            </div>
            <div className="listBoxBottom">
              <div className="TextListBox">
                <h2>Crypto</h2>
                <h5>...</h5>
              </div>
            </div>
          </div>
        </div>

        <a href="#" class="close-popup"></a>
      </div>
    </div>

    <div className="fund__input-first">
      <p>0.00</p>
      <div className="fund__input-btn">$200</div>
      <div className="fund__input-btn">$500</div>
      <div className="fund__input-btn">$1,000</div>
      <img src={images.Switch} alt="switch" />
    </div>

    <div className="fund__input-second">
      <p>0.00</p>
      <div className="fund__input-btn">
        <img src={images.USDCIcon} alt="USDCIcon" />
        <p>USDC</p>
        <img src={images.DropdownIcon} alt="DropdownIcon" />
      </div>
    </div>

    <button type="button" className="btn-fund btn__fund-acc">
      Fund Account
    </button>

    <button type="button" className="btn-fund btn__fund-withdraw">
      Withdraw Funds
    </button>
  </div>
);

export default Fund;
