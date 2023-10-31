import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/Header";
import FooterTwo from "../component/footer/FooterTwo";

const SocialShare = [
  {
    Social: <FaLinkedinIn />,
    link: "https://www.linkedin.com/in/annel-rashka-perdana-ab5380151/",
  },
  { Social: <FaInstagram />, link: "https://www.instagram.com/annelrashka" },
];

class PortfolioEventManagement extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
    };
    this.openModal = this.openModal.bind(this);
  }
  openModal() {
    this.setState({ isOpen: true });
  }
  render() {
    return (
      <React.Fragment>
        <PageHelmet pageTitle="Portfolio Details" />

        <Header
          headertransparent="header--transparent"
          colorblack="color--black"
          logoname="logo.png"
        />

        {/* Start Breadcrump Area */}
        <div
          className="rn-page-title-area pt--120 pb--190 "
          data-black-overlay="7"
        ></div>
        {/* End Breadcrump Area */}

        {/* Start Portfolio Details */}
        <div className="rn-portfolio-details ptb--120 bg_color--1">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="portfolio-details">
                  <div className="inner">
                    <h2>Event Management System</h2>
                    <p>
                      The Event Management Application is a web-based software
                      platform crafted to assist companies in
                      orchestrating every facet of their event planning,
                      execution, and monitoring. This multifaceted application
                      encompasses a series of features, including invitation
                      creation, participant registration, event data management,
                      and reporting. The primary objective of the Event
                      Management Application is to enhance efficiency and
                      effectiveness in event organization, streamline
                      administrative processes, and provide greater visibility
                      throughout the entire event lifecycle, from planning to
                      results reporting.
                    </p>

                    <h3>Key Features:</h3>
                    <ul>
                      <li>
                        <p><strong>Invitation Creation:</strong> Seamlessly design
                        and send out event invitations, ensuring a professional
                        and engaging touch to the event outreach.</p>
                      </li>
                      <li>
                        <p><strong>Participant Registration:</strong> Simplify
                        participant enrollment and tracking, making it
                        convenient for attendees to confirm their presence at
                        the events.</p>
                      </li>
                      <li>
                        <p><strong>Event Data Management:</strong> Centralize all
                        event-related information, making it effortlessly
                        accessible for event organizers, reducing the risk of
                        data silos.</p>
                      </li>
                      <li>
                        <p><strong>Efficient Reporting:</strong> Generate detailed
                        reports, offering insights into the success and areas
                        for events improvement .</p>
                      </li>
                    </ul>

                    <h3>Technology Stack:</h3>
                    <p>
                      This project is built using PERN Stack, ensuring a responsive and dynamic
                      web application that empowers event management with a
                      user-friendly interface and seamless functionality.
                    </p>

                    <h3>Why this Project Matters:</h3>
                    <p>
                      The Event Management Application holds significant
                      importance in today's corporate landscape. As businesses
                      constantly strive to enhance their event management
                      capabilities, this application becomes an indispensable
                      tool. It helps streamline the planning process, reduce
                      administrative overhead, and ensure a seamless event
                      experience for both organizers and participants. With its
                      real-time monitoring and reporting capabilities, it
                      provides a comprehensive view of an event's entire
                      lifecycle, empowering organizations to make informed
                      decisions and continually refine their event strategies.
                    </p>

                    <div className="portfolio-view-list d-flex flex-wrap">
                      <div className="port-view">
                        <span>Branch</span>
                        <h4>Development</h4>
                      </div>

                      <div className="port-view">
                        <span>Project Types</span>
                        <h4>Website</h4>
                      </div>
                    </div>

                    <div className="portfolio-share-link mt--20 pb--70 pb_sm--40">
                      <ul className="social-share rn-lg-size d-flex justify-content-start liststyle mt--15">
                        {SocialShare.map((val, i) => (
                          <li key={i}>
                            <a href={`${val.link}`}>{val.Social}</a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="portfolio-thumb-inner">
                    <div className="thumb mb--30">
                      <img
                        src="/assets/images/portfolio/eventman/1.png"
                        alt="Portfolio Images"
                      />
                    </div>

                    <div className="thumb">
                      <img
                        src="/assets/images/portfolio/eventman/2.png"
                        alt="Portfolio Images"
                      />
                    </div>
                    <div className="thumb">
                      <img
                        src="/assets/images/portfolio/eventman/3.png"
                        alt="Portfolio Images"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Portfolio Details */}

        {/*                 
                <div className="portfolio-related-work pb--120 bg_color--1">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title text-center">
                                    <span className="theme-color font--18 fontWeight600">Related Work</span>
                                    <h2>Our More Projects</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row mt--10">
                           
                            <div className="col-lg-6 col-md-6 col-12">
                                <div className="related-work text-center mt--30">
                                    <div className="thumb">
                                        <a href="/portfolio-details">
                                            <img src="/assets/images/portfolio/related-image-01.jpg" alt="Portfolio-images"/>
                                        </a>
                                    </div>
                                    <div className="inner">
                                        <h4><a href="/portfolio-details">Digital Analysis</a></h4>
                                        <span className="category">Technique</span>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-lg-6 col-md-6 col-12">
                                <div className="related-work text-center mt--30">
                                    <div className="thumb">
                                        <a href="/portfolio-details">
                                            <img src="/assets/images/portfolio/related-image-02.jpg" alt="Portfolio-images"/>
                                        </a>
                                    </div>
                                    <div className="inner">
                                        <h4><a href="/portfolio-details">Plan Management</a></h4>
                                        <span className="category">PLANNING</span>
                                    </div>
                                </div>
                            </div>
                             
                        </div>
                    </div>
                </div>
                 */}

        {/* Start Back To Top */}
        <div className="backto-top">
          <ScrollToTop showUnder={160}>
            <FiChevronUp />
          </ScrollToTop>
        </div>
        {/* End Back To Top */}

        <FooterTwo />
      </React.Fragment>
    );
  }
}
export default PortfolioEventManagement;
