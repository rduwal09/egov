
import React from 'react'
import "../component/home.css"
import FeCarousel from '../extra/carousel'
import nicccc from "../extra/nicccc.jpg"


export default function Home(props) {
  const { newef, aboutkRef, contactkRef, serviceRef } = props
  const products = [
    {
      title: "Data Centre",
      image: "https://cdnbbsr.s3waas.gov.in/s3dcf6070a4ab7f3afbfd2809173e0824b/uploads/2024/09/202410211665878118.svg",
      link: "https://www.nic.in/service/data-centre/",
    },
    {
      title: "Centralised Aadhaar Vault",
      image: "https://cdnbbsr.s3waas.gov.in/s3dcf6070a4ab7f3afbfd2809173e0824b/uploads/2024/09/20241021808626655.svg",
      link: "https://www.nic.in/service/centralised-aadhaar-vault/",
    },
    {
      title: "NIC API eXchange",
      image: "https://cdnbbsr.s3waas.gov.in/s3dcf6070a4ab7f3afbfd2809173e0824b/uploads/2024/09/202410211625925863.svg",
      link: "/",
    },
    {
      title: "National Knowledge Network",
      image: "https://cdnbbsr.s3waas.gov.in/s3dcf6070a4ab7f3afbfd2809173e0824b/uploads/2024/09/202410211982003397.svg",
      link: "/",
    },
    {
      title: "Sandes",
      image: "https://cdnbbsr.s3waas.gov.in/s3dcf6070a4ab7f3afbfd2809173e0824b/uploads/2024/09/202410212082988466.svg",
      link: "https://www.nic.in/service/sandes/",
    },
    {
      title: "Remote Sensing & GIS",
      image: "https://cdnbbsr.s3waas.gov.in/s3dcf6070a4ab7f3afbfd2809173e0824b/uploads/2024/09/20241021691043802.svg",
      link: "/",
    },
    {
      title: "Command and Control Centre",
      image: "https://cdnbbsr.s3waas.gov.in/s3dcf6070a4ab7f3afbfd2809173e0824b/uploads/2024/09/202410212134246597.svg",
      link: "/",
    },
    {
      title: "NIC NETWORK",
      image: "https://cdnbbsr.s3waas.gov.in/s3dcf6070a4ab7f3afbfd2809173e0824b/uploads/2024/09/202410212113399417.svg",
      link: "/",
    },
    {
      title: "Domain Registration",
      image: "https://cdnbbsr.s3waas.gov.in/s3dcf6070a4ab7f3afbfd2809173e0824b/uploads/2024/09/202410212012315548.svg",
      link: "/",
    },
    {
      title: "Webcast",
      image: "https://cdnbbsr.s3waas.gov.in/s3dcf6070a4ab7f3afbfd2809173e0824b/uploads/2024/09/2024102122481336.svg",
      link: "/",
    },
    {
      title: "Government Local Area Networks (LANs)",
      image: "https://cdnbbsr.s3waas.gov.in/s3dcf6070a4ab7f3afbfd2809173e0824b/uploads/2024/09/202410211557740092.svg",
      link: "/",
    },
    {
      title: "Messaging",
      image: "https://cdnbbsr.s3waas.gov.in/s3dcf6070a4ab7f3afbfd2809173e0824b/uploads/2024/09/202410211839715408.svg",
      link: "https://www.nic.in/service/messaging/",
    },
  ];
  const newsCards = [
    {
      image: "https://giwmscdnone.gov.np/media/carousels/WhatsApp%20Image%202024-08-28%20at%202.13.10%20PM_6sw6scq.jpeg",
      date: "5 March 2025",
      text: "Third Meeting of E-governance Commission",
    },
    {
      image: "https://giwmscdnone.gov.np/media/albums/E-gov-Policy_t4gysqT6Tv_6apcmls_5QJ422E3GW_z2suact.jpeg",
      date: "5 February 224",
      text: "Discussion and Feedback Collection on the preliminary draft of eGovernance Policy",
    },
    {
      image: "https://giwmscdntwo.gov.np/media/albums/%E0%A4%9A%E0%A4%BF%E0%A4%B5%E0%A4%BF%E0%A4%B2%E0%A4%B6%E0%A5%8B%E0%A4%9A%E0%A4%BF%E0%A5%87%E0%A4%A4%E0%A4%AF_3bWCkXtKq1_4ayytzh.png",
      date: "5 January 2025",
      text: "Consultation with Civil Society on E-Governance Blueprint and Data Protection Policy",
    },
    {
      image: "https://giwmscdnone.gov.np/media/albums/WhatsApp%2520Image%25202025-01-05%2520at%252011.15.12%2520AM_eJjs6ss8s4_rzbxecg_j6t649VZ1N_uqhdsjq.jpeg",
      date: "5 December 2024",
      text: "Interaction held on data standardization practices, challenges, and future directions",
    },
    {
      image: "https://cdnbbsr.s3waas.gov.in/s3dcf6070a4ab7f3afbfd2809173e0824b/uploads/bfi_thumb/202504041025252375-r3uya2td8i6so0j6ch37x2ie694egiv66d8yf3hdz4.jpg",
      date: "5 November 2024",
      text: "Launch of the web portal for Odisha Judicial Academy by Honb’le Chief Justice, High Court of Orissa.",
    },
    {
      image: "https://cdnbbsr.s3waas.gov.in/s3dcf6070a4ab7f3afbfd2809173e0824b/uploads/bfi_thumb/202504031959745986-r3t2gx4tx6fedog7zrqytl5aqba0v8mzjrb6dt0fls.jpeg",
      date: "5 October 2024",
      text: "Hon’ble CM, Rajasthan launched AI-based Mobile App for assessing & improving reading proficiency among children, Student Attendance App, and Digital Praveshotsav App in the State.",
    },
    {
      image: "https://cdnbbsr.s3waas.gov.in/s3dcf6070a4ab7f3afbfd2809173e0824b/uploads/bfi_thumb/202503281715215937-r3ifq023ce4k813k799jc5dutftcl2aasfxpq15hc0.jpeg",
      date: "5 September 2024",
      text: "Hon’ble Union Minister of Jal Shakti launched the DBIM-compliant website of the Department of Drinking Water & Sanitation.",
    },
  ];
  return (
    <div>
      <section id="home" className="home">
        <h1>Welcome to National Informatics Centre</h1>

        <FeCarousel />
      </section>
      <section id="news" ref={newef} className="news">
        <h2>What's New</h2>
        <div>
          <div className="newall">
            {newsCards.map((card, index) => (
              <div className="card" style={{ width: "20rem" }} key={index}>
                <img src={card.image} className="card-img-top" alt="News item" />
                <div className="card-body">
                  <div className="date-title">
                    <p>{card.date}</p>
                  </div>
                  <p className="card-text">{card.text}</p>
                </div>
              </div>
            ))}
          </div>        </div>
      </section>
      <section id="services" ref={serviceRef} className="services">
        <h2>Services</h2>
        <h3>Our core services towards a Digital Nation</h3>
        <p>NIC is closely associated with the government in different aspects of governance by establishing a nationwide state-of-the-art ICT infrastructure and services for Central Government, State Governments, UT Administrations, Districts and other Government bodies. It offers a wide range of services which includes multi gigabit nationwide networks NICNET, NKN, National Data Centres, National Cloud, pan India VC infrastructure, Command and Control Centre, multi-layered GIS based platform, Domain Registration and Webcast. This plays a significant role in delivering citizen centric e-services.</p>
        <div>
          <div className="row equal-height">
            {products.map((product, index) => (
              <div className="col-md-3 product-card-outer" key={index}>
                <div className="products-card">
                  <div className="productsListing">
                    <div className="productsImage">
                      <img decoding="async" src={product.image} alt={product.title} />
                    </div>
                    <div className="productsContent">
                      <h2>{product.title}</h2>
                    </div>
                    <a href={product.link} className="read-more">
                      Read More{" "}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
      {/* <section id="contact" className="contact">
        <h2>Contact Us</h2>
        <ul>
          <li>Digital India Program</li>
          <li>e-Governance Solutions</li>
          <li>Open Data Initiatives</li>
        </ul>
      </section> */}
      <section id="about" ref={aboutkRef} className="about">
        <h2>About Us </h2>
        <div className='abous'>
          <div>
            <p>
              National Informatics Centre (NIC) under the Ministry of Electronics and Information Technology (MeitY) is the technology partner of the Government of India. NIC was established in the year 1976 with the objective to provide technology-driven solutions to Central and State Governments, NIC mandate is:

            </p>
            <ul>
              <li>Technology partner of the Government</li>
              <li>Design and Develop IT Systems for the Government</li>
              <li>Provide ICT Infrastructure to the Government</li>
              <li>Explore & Advise on use of Emerging Technologies</li>
            </ul>
          </div>
          <div className="vc_column-inner">
            <div className="wpb_wrapper">
              <div className="wpb_single_image wpb_content_element vc_align_left">
                <figure className="wpb_wrapper vc_figure">
                  <div className="vc_single_image-wrapper   vc_box_border_grey"
                  >
                    <img id='nic'
                      decoding="async"
                      src={nicccc}
                      className="vc_single_image-img attachment-full"
                      alt=""
                      title="Frame"
                    />
                  </div>
                </figure>
              </div>
            </div>
          </div>

        </div>
      </section>

      <section id="contact" ref={contactkRef} className="contact">
        <h2>Contact Us</h2>
        <div className="row">
          <div className="col-xs-12">
            <section className="wpb-content-wrapper">
              <div className="vc_row wpb_row vc_row-fluid vc_custom_1730790863676 vc_row-o-equal-height vc_row-flex">
                <div className="box-shadow wpb_column vc_column_container vc_col-sm-6 vc_col-has-fill">
                  <div className="vc_column-inner vc_custom_1731393894662">
                    <div className="wpb_wrapper">
                      <div className="wpb_text_column wpb_content_element  vc_custom_1743049752156">
                        <div className="wpb_wrapper">
                          <div className="box mr-top-none mr-bottom-none">
                            <p
                              className="d-flex contactline heading5"
                              style={{ alignItems: "start" }}
                            >
                              <img
                                decoding="async"
                                className="contact-icon"
                                src="https://cdnbbsr.s3waas.gov.in/s3dcf6070a4ab7f3afbfd2809173e0824b/uploads/2024/10/20241022258453242.svg"
                                alt="icon"
                                aria-hidden="true"
                              />
                              National Informatics Centre
                              <br />
                              Lokanthali-4
                              <br />
                              Bhaktapur
                            </p>
                            <p className="d-flex contactline heading5">
                              <img
                                decoding="async"
                                className="contact-icon"
                                src="https://cdnbbsr.s3waas.gov.in/s3dcf6070a4ab7f3afbfd2809173e0824b/uploads/2024/10/20241022439695796.svg"
                                alt=""
                                aria-hidden="true"
                              />{" "}
                              9841000000 , 9810000000
                            </p>
                            <p className="d-flex contactline heading5">
                              <img
                                decoding="async"
                                className="contact-icon"
                                src="https://cdnbbsr.s3waas.gov.in/s3dcf6070a4ab7f3afbfd2809173e0824b/uploads/2024/10/202410222145555805.svg"
                                alt="icon"
                                aria-hidden="true"
                              />{" "}
                              helpdesk
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="box-shadow wpb_column vc_column_container vc_col-sm-6 vc_col-has-fill">
                  <div className="vc_column-inner vc_custom_1731394029224">
                    <div className="wpb_wrapper">
                      <div className="wpb_text_column wpb_content_element  vc_custom_1731394092849">
                        <div className="wpb_wrapper">
                          <div className="box border-radius2">
                            <p className="heading5">
                              <strong>
                                Feedback Form
                              </strong>
                            </p>
                            <div className="d-flex nic-service-desk-wrap">
                              <form>
                                <div className="form-group">
                                  <label htmlFor="exampleInputEmail1">Email</label>
                                  <input
                                    type="email"
                                    className="form-control"
                                    id="exampleInputEmail1"
                                    aria-describedby="emailHelp"
                                    placeholder="Enter email"
                                  />
                                  <small id="emailHelp" className="form-text text-muted">
                                    Your Feedback will be delivered to us once you submit.
                                    
                                  </small>
                                </div>
                                <div className="form-group">
                                  <label htmlFor="exampleInputs">Message</label>
                                  <textarea
                                    
                                    className="form-control"
                                    id="exampleInputs"
                                    placeholder="Write Your Feedback"
                                  />
                                </div>
                               
                                <button type="submit" className="btn btn-success">
                                  Submit
                                </button>
                              </form>

                            </div>

                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>{" "}
          </div>
        </div>

      </section>
    </div>
  )
}

