import React from 'react'
import "../component/rajafooter.css"
export default function Rajafooter() {
    return (
        <>
            <footer className="mainFooter">
                <div className="container pt-3">
                    <div className="row">
                        <div className="col-lg-5 col-md-5 col-12">
                            <div className="footer-links px-2">
                                <h2 className="heading4 text-white mb-3">Useful Links</h2>
                                <div className="footer-en">
                                    <ul id="menu-footer-en" className="footer-en-list links">
                                        <li
                                            id="menu-item-7352"
                                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-7352"
                                        >
                                            <a href="/">
                                                About This Website
                                            </a>
                                        </li>
                                        <li
                                            id="menu-item-7358"
                                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-7358"
                                        >
                                            <a href="/">Terms of use</a>
                                        </li>
                                        <li
                                            id="menu-item-7360"
                                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-7360"
                                        >
                                            <a href="/">
                                                Website Policies
                                            </a>
                                        </li>
                                        <li
                                            id="menu-item-7357"
                                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-7357"
                                        >
                                            <a href="/">Site Map</a>
                                        </li>
                                        <li
                                            id="menu-item-7356"
                                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-7356"
                                        >
                                            <a href="/">Help</a>
                                        </li>
                                        <li
                                            id="menu-item-7354"
                                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-7354"
                                        >
                                            <a href="/">Contact Us</a>
                                        </li>
                                        <li
                                            id="menu-item-7355"
                                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-7355"
                                        >
                                            <a href="/">Feedback</a>
                                        </li>
                                        <li
                                            id="menu-item-7359"
                                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-7359"
                                        >
                                            <a href="/">
                                                Web Information Manager
                                            </a>
                                        </li>
                                        <li
                                            id="menu-item-7353"
                                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-7353"
                                        >
                                            <a href="/">
                                                Chief Information Security Officer
                                            </a>
                                        </li>
                                        <li
                                            id="menu-item-7361"
                                            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-7361"
                                        >
                                            <a
                                                href="/"
                                                onclick="return confirm('You are being redirected to an external website. Please note that National Informatics Centre cannot be held responsible for external websites content & privacy policies.');"
                                                aria-label="Recruitment - External site that opens in a new window"
                                                title="Recruitment - External site that opens in a new window"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                Recruitment
                                            </a>
                                        </li>
                                    </ul>
                                </div>{" "}
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-12">
                            <div className="mid-footer px-2">
                                <p className="mb-3 text-white">
                                    Content Owned and Maintained by National Informatics Centre,
                                    Ministry of Electronics &amp; IT (MeitY) | Government of India
                                </p>
                                <p className="mb-3 text-white">
                                    Website is Designed, Developed and Hosted by National Informatics
                                    Centre,Ministry of Electronics &amp; IT (MeitY) | Government of
                                    India
                                </p>
                                <p className="light-grey">Last Updated: April 22, 2025</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-12">
                            <div className="social-section px-2">
                                <div className="row">
                                    <div className="social-inner col-xl-6 col-lg-12 col">
                                        <div className="footerSocial-wrap">
                                            <a
                                                className="swaas-logo"
                                                href="/"
                                                aria-label="S3WaaS website - External site that opens in a new window"
                                                title="Secure, Scalable and Sugamya Website as a Service"
                                                onclick="return confirm('You are being redirected to an external website. Please note that National Informatics Centre cannot be held responsible for external websites content & privacy policies.');"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <img
                                                    src="https://www.nic.in/wp-content/themes/sdo-theme/images/s3waas.svg"
                                                    className="footer-swaas"
                                                    alt="Secure, Scalable and Sugamya Website as a Service"
                                                />
                                            </a>
                                            <div>
                                                <h2 className="heading4 text-white mt-3 mb-3">Follow Us</h2>
                                                <ul className="d-flex">
                                                    <li>
                                                        <a
                                                            href="/"
                                                            title="X"
                                                            onclick="return confirm('You are being redirected to an external website. Please note that National Informatics Centre cannot be held responsible for external websites content & privacy policies.');"
                                                            aria-label="https://x.com/NICMeity - External site that opens in a new window"
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                        >
                                                            <svg
                                                                className="x"
                                                                width={20}
                                                                height={20}
                                                                viewBox="0 0 21 21"
                                                                fill="none"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <path d="M0.0126202 20.9959C0.509014 20.4249 1.00541 19.8498 1.50601 19.2788C3.6893 16.7976 5.8768 14.3164 8.0601 11.8352C8.10637 11.7818 8.14844 11.7284 8.19892 11.6668C5.46875 7.79298 2.74279 3.91919 0 0.01665C0.0799279 0.012542 0.130409 0.00432617 0.180889 0.00432617C2.14543 0.00432617 4.11418 0.00432617 6.07873 0.000218232C6.21755 0.000218232 6.28906 0.0495135 6.36058 0.15632C8.08534 2.61287 9.8101 5.06531 11.5391 7.51775C11.5811 7.57936 11.6274 7.63688 11.6863 7.71493C12.0439 7.30824 12.3888 6.91799 12.7338 6.52773C14.5889 4.42036 16.4483 2.31299 18.2993 0.201507C18.4297 0.0495135 18.5643 -0.00388971 18.762 0.000218232C19.271 0.012542 19.7758 0.00432617 20.3353 0.00432617C17.7061 2.98669 15.1106 5.93619 12.5108 8.8898C12.5571 8.95552 12.5907 9.01303 12.6328 9.07055C15.384 12.9813 18.1352 16.8921 20.8864 20.8069C20.9285 20.8685 20.9621 20.9343 21 21C18.9135 21 16.8311 21 14.7446 21C14.7194 20.9589 14.6983 20.9178 14.6689 20.8768C12.8221 18.2477 10.9712 15.6227 9.1244 12.9936C9.09495 12.9525 9.05709 12.9115 9.01502 12.8622C8.95192 12.9361 8.89303 12.9936 8.83834 13.0552C7.34495 14.7477 5.85577 16.4402 4.36659 18.1327C3.52945 19.0857 2.69231 20.0429 1.85517 20.9959C1.24099 20.9959 0.626803 20.9959 0.0126202 20.9959ZM2.52404 1.36405C2.57873 1.44621 2.60817 1.49962 2.64183 1.54891C6.93269 7.5465 11.2278 13.5441 15.5186 19.5458C15.5944 19.6526 15.6701 19.6978 15.8089 19.6978C16.625 19.6896 17.4453 19.6937 18.2656 19.6937C18.3245 19.6937 18.3792 19.6855 18.4633 19.6772C18.396 19.5828 18.3498 19.517 18.3035 19.4513C15.1569 15.0517 12.006 10.6562 8.85938 6.25661C7.73197 4.68327 6.60877 3.10993 5.48137 1.5407C5.42668 1.46675 5.32993 1.37638 5.25 1.37227C4.35817 1.35995 3.46214 1.36405 2.52404 1.36405Z" />
                                                            </svg>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="/"
                                                            title="linkedin"
                                                            onclick="return confirm('You are being redirected to an external website. Please note that National Informatics Centre cannot be held responsible for external websites content & privacy policies.');"
                                                            aria-label="https://www.linkedin.com/company/nicmeity/ - External site that opens in a new window"
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                        >
                                                            <svg
                                                                width="30px"
                                                                height="30px"
                                                                viewBox="0 0 24 24"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <g>
                                                                    <path fill="none" d="M0 0h24v24H0z" />
                                                                    <path
                                                                        fillRule="nonzero"
                                                                        d="M6.94 5a2 2 0 1 1-4-.002 2 2 0 0 1 4 .002zM7 8.48H3V21h4V8.48zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68z"
                                                                    />
                                                                </g>
                                                            </svg>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="/"
                                                            title="Facebook"
                                                            onclick="return confirm('You are being redirected to an external website. Please note that National Informatics Centre cannot be held responsible for external websites content & privacy policies.');"
                                                            aria-label="https://www.facebook.com/NICIndia - External site that opens in a new window"
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                        >
                                                            <svg
                                                                className="facebook"
                                                                width={30}
                                                                height={30}
                                                                viewBox="0 0 24 25"
                                                                fill="none"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <path d="M9.29325 21.9974H13.2228V14.1285H16.7633L17.1523 10.2186H13.2228V8.24396C13.2228 7.98342 13.3263 7.73354 13.5105 7.54931C13.6948 7.36508 13.9446 7.26158 14.2052 7.26158H17.1523V3.33203H14.2052C12.9025 3.33203 11.6531 3.84954 10.7319 4.7707C9.81076 5.69187 9.29325 6.94124 9.29325 8.24396V10.2186H7.32848L6.93945 14.1285H9.29325V21.9974Z" />
                                                            </svg>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="//"
                                                            title="Instagram"
                                                            onclick="return confirm('You are being redirected to an external website. Please note that National Informatics Centre cannot be held responsible for external websites content & privacy policies.');"
                                                            aria-label="https://www.instagram.com/nicmeity/ - External site that opens in a new window"
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                        >
                                                            <svg
                                                                className="instagram"
                                                                width={30}
                                                                height={30}
                                                                viewBox="0 0 24 25"
                                                                fill="none"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <path d="M7.7286 2.8418H15.9806C19.1243 2.8418 21.6785 5.396 21.6785 8.53964V16.7917C21.6785 18.3028 21.0782 19.7521 20.0096 20.8207C18.9411 21.8892 17.4918 22.4895 15.9806 22.4895H7.7286C4.58497 22.4895 2.03076 19.9353 2.03076 16.7917V8.53964C2.03076 7.02848 2.63107 5.57921 3.69962 4.51066C4.76817 3.4421 6.21744 2.8418 7.7286 2.8418ZM7.53212 4.80657C6.59416 4.80657 5.69462 5.17917 5.03138 5.84241C4.36814 6.50565 3.99553 7.4052 3.99553 8.34316V16.9882C3.99553 18.9431 5.57718 20.5247 7.53212 20.5247H16.1771C17.1151 20.5247 18.0146 20.1521 18.6779 19.4889C19.3411 18.8257 19.7137 17.9261 19.7137 16.9882V8.34316C19.7137 6.38821 18.1321 4.80657 16.1771 4.80657H7.53212ZM17.0122 6.28015C17.3378 6.28015 17.6502 6.40953 17.8805 6.63982C18.1108 6.87011 18.2401 7.18245 18.2401 7.50813C18.2401 7.83381 18.1108 8.14616 17.8805 8.37645C17.6502 8.60674 17.3378 8.73611 17.0122 8.73611C16.6865 8.73611 16.3741 8.60674 16.1438 8.37645C15.9135 8.14616 15.7842 7.83381 15.7842 7.50813C15.7842 7.18245 15.9135 6.87011 16.1438 6.63982C16.3741 6.40953 16.6865 6.28015 17.0122 6.28015ZM11.8546 7.75373C13.1573 7.75373 14.4067 8.27123 15.3279 9.1924C16.2491 10.1136 16.7666 11.3629 16.7666 12.6657C16.7666 13.9684 16.2491 15.2178 15.3279 16.1389C14.4067 17.0601 13.1573 17.5776 11.8546 17.5776C10.5519 17.5776 9.30253 17.0601 8.38136 16.1389C7.4602 15.2178 6.94269 13.9684 6.94269 12.6657C6.94269 11.3629 7.4602 10.1136 8.38136 9.1924C9.30253 8.27123 10.5519 7.75373 11.8546 7.75373ZM11.8546 9.7185C11.073 9.7185 10.3234 10.029 9.77067 10.5817C9.21797 11.1344 8.90747 11.884 8.90747 12.6657C8.90747 13.4473 9.21797 14.1969 9.77067 14.7496C10.3234 15.3023 11.073 15.6128 11.8546 15.6128C12.6363 15.6128 13.3859 15.3023 13.9386 14.7496C14.4913 14.1969 14.8018 13.4473 14.8018 12.6657C14.8018 11.884 14.4913 11.1344 13.9386 10.5817C13.3859 10.029 12.6363 9.7185 11.8546 9.7185Z" />
                                                            </svg>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="/"
                                                            title="Threads"
                                                            onclick="return confirm('You are being redirected to an external website. Please note that National Informatics Centre cannot be held responsible for external websites content & privacy policies.');"
                                                            aria-label="https://www.threads.net/@nicmeity - External site that opens in a new window"
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                        >
                                                            <svg
                                                                aria-label="Threads"
                                                                viewBox="0 0 192 192"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                height={30}
                                                                width={30}
                                                            >
                                                                <path
                                                                    className="x19hqcy"
                                                                    d="M141.537 88.9883C140.71 88.5919 139.87 88.2104 139.019 87.8451C137.537 60.5382 122.616 44.905 97.5619 44.745C97.4484 44.7443 97.3355 44.7443 97.222 44.7443C82.2364 44.7443 69.7731 51.1409 62.102 62.7807L75.881 72.2328C81.6116 63.5383 90.6052 61.6848 97.2286 61.6848C97.3051 61.6848 97.3819 61.6848 97.4576 61.6855C105.707 61.7381 111.932 64.1366 115.961 68.814C118.893 72.2193 120.854 76.925 121.825 82.8638C114.511 81.6207 106.601 81.2385 98.145 81.7233C74.3247 83.0954 59.0111 96.9879 60.0396 116.292C60.5615 126.084 65.4397 134.508 73.775 140.011C80.8224 144.663 89.899 146.938 99.3323 146.423C111.79 145.74 121.563 140.987 128.381 132.296C133.559 125.696 136.834 117.143 138.28 106.366C144.217 109.949 148.617 114.664 151.047 120.332C155.179 129.967 155.42 145.8 142.501 158.708C131.182 170.016 117.576 174.908 97.0135 175.059C74.2042 174.89 56.9538 167.575 45.7381 153.317C35.2355 139.966 29.8077 120.682 29.6052 96C29.8077 71.3178 35.2355 52.0336 45.7381 38.6827C56.9538 24.4249 74.2039 17.11 97.0132 16.9405C119.988 17.1113 137.539 24.4614 149.184 38.788C154.894 45.8136 159.199 54.6488 162.037 64.9503L178.184 60.6422C174.744 47.9622 169.331 37.0357 161.965 27.974C147.036 9.60668 125.202 0.195148 97.0695 0H96.9569C68.8816 0.19447 47.2921 9.6418 32.7883 28.0793C19.8819 44.4864 13.2244 67.3157 13.0007 95.9325L13 96L13.0007 96.0675C13.2244 124.684 19.8819 147.514 32.7883 163.921C47.2921 182.358 68.8816 191.806 96.9569 192H97.0695C122.03 191.827 139.624 185.292 154.118 170.811C173.081 151.866 172.51 128.119 166.26 113.541C161.776 103.087 153.227 94.5962 141.537 88.9883ZM98.4405 129.507C88.0005 130.095 77.1544 125.409 76.6196 115.372C76.2232 107.93 81.9158 99.626 99.0812 98.6368C101.047 98.5234 102.976 98.468 104.871 98.468C111.106 98.468 116.939 99.0737 122.242 100.233C120.264 124.935 108.662 128.946 98.4405 129.507Z"
                                                                />
                                                            </svg>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="/"
                                                            title="You tube"
                                                            onclick="return confirm('You are being redirected to an external website. Please note that National Informatics Centre cannot be held responsible for external websites content & privacy policies.');"
                                                            aria-label="https://www.youtube.com/nationalinformaticscentre - External site that opens in a new window"
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                        >
                                                            <svg
                                                                className="youtube"
                                                                width={30}
                                                                height={30}
                                                                viewBox="0 0 25 25"
                                                                fill="none"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <path d="M10.7004 15.6127L15.799 12.6655L10.7004 9.71836V15.6127ZM22.0568 7.9206C22.1845 8.38232 22.2729 9.00122 22.3319 9.78713C22.4006 10.573 22.4301 11.2509 22.4301 11.8403L22.489 12.6655C22.489 14.8169 22.3319 16.3986 22.0568 17.4104C21.8112 18.2946 21.2414 18.8644 20.3573 19.11C19.8955 19.2377 19.0507 19.3261 17.7539 19.385C16.4768 19.4538 15.3078 19.4833 14.2272 19.4833L12.6652 19.5422C8.54897 19.5422 5.98494 19.385 4.97309 19.11C4.08894 18.8644 3.51916 18.2946 3.27356 17.4104C3.14585 16.9487 3.05743 16.3298 2.99849 15.5439C2.92972 14.758 2.90025 14.0802 2.90025 13.4907L2.84131 12.6655C2.84131 10.5141 2.99849 8.93245 3.27356 7.9206C3.51916 7.03645 4.08894 6.46666 4.97309 6.22107C5.43481 6.09336 6.27966 6.00494 7.57641 5.946C8.85351 5.87723 10.0226 5.84776 11.1032 5.84776L12.6652 5.78882C16.7814 5.78882 19.3454 5.946 20.3573 6.22107C21.2414 6.46666 21.8112 7.03645 22.0568 7.9206Z" />
                                                            </svg>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <button class="accent-secondary-color accent-border-color" id="gototop-btn" title="Go to top"><span class="hide">Go to top</span></button> */}
            </footer>

        </>
    )
}
