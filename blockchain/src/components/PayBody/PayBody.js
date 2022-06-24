import React from "react";
import { BiDollar, BiCircle } from "react-icons/bi";
import { AiOutlineSwap } from "react-icons/ai";
import { images } from "../../constants";
import { useState } from "react";
import { Button } from "react-bootstrap";
import "./Paybody.css";

function PayBody() {
  const [buttonText, setButtonText] = useState(true);
  return (
    <div className="homebody">
      <div className="homebody__header">
        <div className="homebody__head-logo">
          <img src={images.DynamicIcon} alt="dynamicicon" />
        </div>
        <p className="homebody__header-title">Pay</p>
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
      <div className="paybody__content">
        <div className="PayAndReceive">
          <div className="PagePayHead">
            <div className="Send">
              <div className="TextSend">
                <p>Send</p>
              </div>
            </div>
            <div className="Receive">
              <div className="TextReceive">
                <p>Receive</p>
              </div>
            </div>
          </div>
          <div className="PageForm">
            <div className="IconO">
              <div className="DolarO">
                <div className="iconDolar">
                  <BiDollar />
                </div>
                <div className="O">
                  <BiCircle style={{ width: "100%" }} />
                </div>
              </div>
              <div className="ButtonSwapText">
                <button
                  className="buttonIcon"
                  onClick={() => {
                    setButtonText((prevState) => ({
                      buttonText: !prevState.buttonText,
                    }));
                  }}
                >
                  <div className="Swap">
                    <AiOutlineSwap
                      style={{ width: "100%", height: "100%", color: "white" }}
                    />
                  </div>
                </button>

                <div className="SwapText">
                  {buttonText.buttonText !== true ? (
                    <p style={{ paddingLeft: "5px" }}>ETH</p>
                  ) : (
                    <p>USDC</p>
                  )}
                </div>
              </div>
            </div>
            {/*  */}
            <div className="FormPay">
              <form>
                <div className="PayWithMain">
                  <div className="TextPayWith">
                    <p>Pay With</p>
                    <select class="select">
                      {buttonText.buttonText !== true ? (
                        <option>ETH</option>
                      ) : (
                        <option>USDC</option>
                      )}
                      {buttonText.buttonText !== true ? (
                        <option>USDC</option>
                      ) : (
                        <option>ETH</option>
                      )}
                    </select>
                  </div>
                  <div className="TextTo">
                    <p>To</p>
                    <input
                      className="input"
                      name="addr"
                      placeholder="@Address"
                    ></input>
                  </div>
                  <div className="Amount">
                    <p>Amount</p>
                    <input
                      className="input"
                      name="ether"
                      placeholder="Amount"
                    ></input>
                  </div>
                  <div className="TextNote">
                    <p>Note</p>
                    <input
                      className="input"
                      placeholder="Leave a message"
                    ></input>
                  </div>
                </div>

                <Button className="button" type="submit">
                  <h3>Continue</h3>
                </Button>
                <div className="BalanceAdd">
                  <h3 className="BalanceText">ETH Balance</h3>
                  <h3 className="Balance">{/* <h3>{data.Balance}</h3> */}</h3>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="Recent">
          <div className="TitleRecent">Recent Activity</div>
          <div className="TextRecent"> </div>
          <div className="TextRecent"> </div>
          <div className="TextRecentBottom"> </div>
        </div>
      </div>
      {/* <div className="Message">
        <ErrorMessage message={error} />
        <TxList txs={txs} />
      </div> */}
    </div>
  );
}

export default PayBody;
