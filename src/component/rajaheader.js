import React from 'react'
import "../component/rajaheader.css"
export default function Rajaheader(props) {
    const {scrollTonew, scrollToContact ,scrollToService ,scrollToabout}=props
    return (
        <>
            <header id="mainHeader">

                <div className="header-wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-3 col-xs-12">
                                <div className="logo">
                                    <a
                                        href="/home"
                                        title="Go to home"
                                        className="site_logo"
                                        rel="home"
                                    >
                                        <img
                                            className="emblem state-emb"
                                            id="logo"
                                            src="https://cdnbbsr.s3waas.gov.in/s3dcf6070a4ab7f3afbfd2809173e0824b/uploads/2024/10/20241009217618493.svg"
                                            alt="NIC logo"
                                        />
                                        <div className="logo_text">
                                            <strong lang="hi"></strong>
                                            <span className="site_name_english" />
                                        </div>
                                    </a>
                                </div>{" "}
                            </div>
                            <div className="col-lg-6 col-md-6 col-xs-12">
                                <form
                                    role="search"
                                    method="get"
                                    className="search-container"
                                    action="https://www.nic.in/"
                                    onsubmit="return search_validation()"
                                >
                                    <div className="input-group">
                                        <label htmlFor="s" className="visually-hidden">
                                            Search
                                        </label>
                                        <input
                                            type="text"
                                            defaultValue=""
                                            name="s"
                                            id="s"
                                            className="search-bar"
                                            placeholder="Search..."
                                        />
                                        <button
                                            type="submit"
                                            className="btn search-icon"
                                            title="Search"
                                            aria-label="Search"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                width="24px"
                                                height="24px"
                                            >
                                                <path d="M 9 2 C 5.1458514 2 2 5.1458514 2 9 C 2 12.854149 5.1458514 16 9 16 C 10.747998 16 12.345009 15.348024 13.574219 14.28125 L 14 14.707031 L 14 16 L 19.585938 21.585938 C 20.137937 22.137937 21.033938 22.137938 21.585938 21.585938 C 22.137938 21.033938 22.137938 20.137938 21.585938 19.585938 L 16 14 L 14.707031 14 L 14.28125 13.574219 C 15.348024 12.345009 16 10.747998 16 9 C 16 5.1458514 12.854149 2 9 2 z M 9 4 C 11.773268 4 14 6.2267316 14 9 C 14 11.773268 11.773268 14 9 14 C 6.2267316 14 4 11.773268 4 9 C 4 6.2267316 6.2267316 4 9 4 z" />
                                            </svg>
                                            <span
                                                className="d-none"
                                                data-translation-id="translation-1728019621274-4"
                                            >
                                                Search
                                            </span>
                                        </button>
                                    </div>
                                </form>
                            </div>
                            {/* <div className="col-lg-3 col-md-3 col-xs-12">
                                <div className="header-right hidden-xs push-right">
                                    <a
                                        aria-label="swach bharat-abhiyan - External site that opens in a new window"
                                        href="https://swachhbharatmission.ddws.gov.in/"
                                        target="_blank"
                                        title="swach bharat-abhiyan"
                                        onclick="return confirm('You are being redirected to an external website. Please note that National Informatics Centre cannot be held responsible for external websites content & privacy policies.');"
                                        rel="noopener noreferrer"
                                    >
                                        <img
                                            className="sw-logo"
                                            src="https://cdnbbsr.s3waas.gov.in/s3dcf6070a4ab7f3afbfd2809173e0824b/uploads/2024/12/20241206946318286.svg"
                                            alt="Swach bharat-abhiyan"
                                        />
                                    </a>
                                    <a
                                        aria-label="Digital India - External site that opens in a new window"
                                        href="https://www.digitalindia.gov.in/"
                                        target="_blank"
                                        title="Digital India"
                                        onclick="return confirm('You are being redirected to an external website. Please note that National Informatics Centre cannot be held responsible for external websites content & privacy policies.');"
                                        rel="noopener noreferrer"
                                    >
                                        <img
                                            className="sw-logo"
                                            src="https://cdnbbsr.s3waas.gov.in/s3dcf6070a4ab7f3afbfd2809173e0824b/uploads/2024/12/202412061445137587.svg"
                                            alt="Digital India"
                                        />
                                    </a>
                                </div>{" "}
                            </div> */}
                        </div>
                    </div>
                </div>
                {/*header middle end*/}
                {/*main menu start*/}
                <div className="menuWrapper">
                   
                    <div className="container">
                        <nav className="menu">
                            <ul id="menu-main-header-en" className="nav clearfix">
                                <li
                                    id="menu-item-9329"
                                    className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-9329 active "
                                >
                                    <a style={{color:" #6a5de6",fontSize:"20px",fontWeight:"600"}} href="/home">Home</a>
                                </li>
                                <li
                                    id="menu-item-4982"
                                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-4982 has-sub"
                                >
                                    <a style={{color:" #6a5de6",fontSize:"20px",fontWeight:"600"}} onClick={scrollToabout} aria-haspopup="true" aria-expanded="false">
                                        About Us
                                        <span className="indicator" />
                                    </a>
                                    
                                </li>
                                <li
                                    id="menu-item-5005"
                                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-5005 has-sub"
                                >
                                    <a style={{color:" #6a5de6",fontSize:"20px",fontWeight:"600"}} onClick={scrollToContact} aria-haspopup="true" aria-expanded="false">
                                        Contact
                                        <span className="indicator" />
                                    </a>
                                  
                                </li>
                                <li
                                    id="menu-item-5013"
                                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-5013 has-sub"
                                >
                                    <a style={{color:" #6a5de6",fontSize:"20px",fontWeight:"600"}}  onClick={scrollTonew} aria-haspopup="true" aria-expanded="false">
                                        News
                                        <span className="indicator" />
                                    </a>
                                </li>
                                <li
                                    id="menu-item-5010"
                                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-5010 has-sub"
                                >
                                    <a style={{color:" #6a5de6",fontSize:"20px",fontWeight:"600"}} onClick={scrollToService} aria-haspopup="true" aria-expanded="false">
                                        Services
                                        <span className="indicator" />
                                    </a>
                                </li>
                            </ul>
                        </nav>{" "}
                    </div>
                </div>
            </header>

        </>
    )
}
