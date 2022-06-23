import React from "react";
import "./container.css";
import { images } from "../../constants";

export default function Content() {
    return (
        <div className="container">
            <div className="header">
                <div className="header-title">
                    <h2>Stable</h2>
                    <span>.Sort by API</span>
                </div>
                <div className="header-button">
                    <a href="#">
                        <button className="btn-header active">Lend</button>
                    </a>
                    <a href="#">
                        <button className="btn-header">Borrow</button>
                    </a>
                </div>
            </div>
            <div className="content-grid">
                <div className="box-usdc">
                    <div className="usdc-item">
                        <img
                            style={{ height: "100px" }}
                            src={images.USDCIcon}
                            alt="balance"
                        ></img>

                        <div className="hactitle">
                            <div className="title-left">
                                <span>Vaults</span>
                                <h3>USDC</h3>.<br />
                                <span className="balance-title">Balance</span>
                                <div>
                                    <p className="title-right-p">_</p>
                                </div>
                            </div>
                            <div className="title-right">
                                <span>APY</span>
                                <h3>7,42%</h3>
                                <br />
                                <span className="balance-title">Earnings</span>
                                <div>
                                    <p className="title-left-p">_</p>
                                </div>
                            </div>
                        </div>
                        <div className="dynamic-icon">
                            <img
                                className="icon-dynamic"
                                src={images.DynamicIcon}
                            ></img>
                        </div>
                    </div>
                </div>
                <div className="box-usdc">
                    <div className="usdc-item">
                        <img
                            style={{ height: "100px" }}
                            src={images.USDTIcon}
                            alt="balance"
                        ></img>
                        <div className="hactitle">
                            <div className="title-left">
                                <span>Vaults</span>
                                <h3>USDT</h3>
                                <br />
                                <span>Balance</span>
                                <div>
                                    <p className="title-right-p">_</p>
                                </div>
                            </div>
                            <div className="title-right">
                                <span>APY</span>
                                <h3>9,58%</h3>
                                <br />
                                <span>Earning</span>
                                <div>
                                    <p className="title-left-p">_</p>
                                </div>
                            </div>
                        </div>
                        <div className="dynamic-icon">
                            <img
                                className="icon-dynamic"
                                src={images.DynamicIcon}
                            ></img>
                        </div>
                    </div>
                </div>
                <div className="box-usdc">
                    <div className="usdc-item">
                        <img
                            style={{ height: "100px" }}
                            src={images.BUSDICon}
                            alt="balance"
                        ></img>
                        <div className="hactitle">
                            <div className="title-left">
                                <span>Vaults</span>
                                <h3>BUSD</h3>
                                <br />
                                <span>Balance</span>
                                <div>
                                    <p className="title-right-p">_</p>
                                </div>
                            </div>
                            <div className="title-right">
                                <span>APY</span>
                                <h3>3,77%</h3>
                                <br />
                                <span>Earning</span>
                                <div>
                                    <p className="title-left-p">_</p>
                                </div>
                            </div>
                        </div>
                        <div className="dynamic-icon">
                            <img
                                className="icon-dynamic"
                                src={images.DynamicIcon}
                            ></img>
                        </div>
                    </div>
                </div>
            </div>
            <div className="content-grid">
                <div className="box-usdc">
                    <div className="usdc-item">
                        <img
                            style={{ height: "100px" }}
                            src={images.BTCIcon}
                            alt="balance"
                        ></img>
                        <div className="hactitle">
                            <div className="title-left">
                                <span>Vaults</span>
                                <h3>BTC</h3>
                                <br />
                                <span>Balance</span>
                                <div>
                                    <p className="title-right-p">_</p>
                                </div>
                            </div>
                            <div className="title-right">
                                <span>APY</span>
                                <h3>3,64%</h3>
                                <br />
                                <span>Earning</span>
                                <div>
                                    <p className="title-left-p">_</p>
                                </div>
                            </div>
                        </div>
                        <div className="dynamic-icon">
                            <img
                                className="icon-dynamic"
                                src={images.DynamicIcon}
                            ></img>
                        </div>
                    </div>
                </div>
                <div className="box-usdc">
                    <div className="usdc-item">
                        <img
                            style={{ height: "100px" }}
                            src={images.ETHIcon}
                            alt="balance"
                        ></img>
                        <div className="hactitle">
                            <div className="title-left">
                                <span>Vaults</span>
                                <h3>ETH</h3>
                                <br />
                                <span>Balance</span>
                                <div>
                                    <p className="title-right-p">_</p>
                                </div>
                            </div>
                            <div className="title-right">
                                <span>APY</span>
                                <h3>4,82%</h3>
                                <br />
                                <span>Earning</span>
                                <div>
                                    <p className="title-left-p">_</p>
                                </div>
                            </div>
                        </div>
                        <div className="dynamic-icon">
                            <img
                                className="icon-dynamic"
                                src={images.DynamicIcon}
                            ></img>
                        </div>
                    </div>
                </div>
                <div className="box-usdc">
                    <div className="usdc-item">
                        <img
                            style={{ height: "100px" }}
                            src={images.BNBIcon}
                            alt="balance"
                        ></img>
                        <div className="hactitle">
                            <div className="title-left">
                                <span>Vaults</span>
                                <h3>BNB</h3>
                                <br />
                                <span>Balance</span>
                                <div>
                                    <p className="title-right-p">_</p>
                                </div>
                            </div>
                            <div className="title-right">
                                <span>APY</span>
                                <h3>5,19%</h3>
                                <br />
                                <span>Earning</span>
                                <div>
                                    <p className="title-left-p">_</p>
                                </div>
                            </div>
                        </div>
                        <div className="dynamic-icon">
                            <img
                                className="icon-dynamic"
                                src={images.DynamicIcon}
                            ></img>
                        </div>
                    </div>
                </div>
            </div>
            <div className="content-grid">
                <div className="box-usdc">
                    <div className="usdc-item">
                        <img
                            style={{ height: "100px" }}
                            src={images.AVAXIcon}
                            alt="balance"
                        ></img>
                        <div className="hactitle">
                            <div className="title-left">
                                <span>Vaults</span>
                                <h3>AVAX</h3>
                                <br />
                                <span>Balance</span>
                                <div>
                                    <p className="title-right-p">_</p>
                                </div>
                            </div>
                            <div className="title-right">
                                <span>APY</span>
                                <h3>4,12%</h3>
                                <br />
                                <span>Earning</span>
                                <div>
                                    <p className="title-left-p">_</p>
                                </div>
                            </div>
                        </div>
                        <div className="dynamic-icon">
                            <img
                                className="icon-dynamic"
                                src={images.DynamicIcon}
                            ></img>
                        </div>
                    </div>
                </div>
                <div className="box-usdc">
                    <div className="usdc-item">
                        <img
                            style={{ height: "100px" }}
                            src={images.DOTIcon}
                            alt="balance"
                        ></img>
                        <div className="hactitle">
                            <div className="title-left">
                                <span>Vaults</span>
                                <h3>USDC</h3>
                                <br />
                                <span>DOT</span>
                                <div>
                                    <p className="title-right-p">_</p>
                                </div>
                            </div>
                            <div className="title-right">
                                <span>APY</span>
                                <h3>3,98%</h3>
                                <br />
                                <span>Earning</span>
                                <div>
                                    <p className="title-left-p">_</p>
                                </div>
                            </div>
                        </div>
                        <div className="dynamic-icon">
                            <img
                                className="icon-dynamic"
                                src={images.DynamicIcon}
                            ></img>
                        </div>
                    </div>
                </div>
                <div className="box-usdc">
                    <div className="usdc-item">
                        <img
                            style={{ height: "100px" }}
                            src={images.MATICIcon}
                            alt="balance"
                        ></img>
                        <div className="hactitle">
                            <div className="title-left color-text">
                                <span>Vaults</span>
                                <h3>MATIC</h3>
                                <br />
                                <span className="balance">Balance</span>
                                <div>
                                    <p className="title-right-p">_</p>
                                </div>
                            </div>
                            <div className="title-right color-text">
                                <span>APY</span>
                                <h3>2,63%</h3>
                                <br />
                                <span>Earning</span>
                                <div>
                                    <p className="title-left-p">_</p>
                                </div>
                            </div>
                        </div>
                        <div className="dynamic-icon">
                            <img
                                className="icon-dynamic"
                                src={images.DynamicIcon}
                            ></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
