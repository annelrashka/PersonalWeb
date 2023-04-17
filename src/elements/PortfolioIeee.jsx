import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import {FaInstagram  , FaLinkedinIn} from "react-icons/fa";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/Header";
import FooterTwo from "../component/footer/FooterTwo";

const SocialShare = [
    {Social: <FaLinkedinIn /> , link: 'https://www.linkedin.com/in/annel-rashka-perdana-ab5380151/'},
    {Social: <FaInstagram /> , link: 'https://www.instagram.com/annelrashka'},
]

class PortfolioIEEE extends Component{
    constructor () {
        super()
        this.state = {
          isOpen: false
        }
        this.openModal = this.openModal.bind(this)
    }
    openModal () {
        this.setState({isOpen: true})
    }
    render(){
        return(
            <React.Fragment>
                <PageHelmet pageTitle='Portfolio Details' />

                <Header headertransparent="header--transparent" colorblack="color--black" logoname="logo.png" />
                
                {/* Start Breadcrump Area */}
                <div className="rn-page-title-area pt--120 pb--190 bg_image bg_image--7"  data-black-overlay="7">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Breadcrump Area */}

                {/* Start Portfolio Details */}
                <div className="rn-portfolio-details ptb--120 bg_color--1">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="portfolio-details">
                                    <div className="inner">
                                        <h2>Website IEEE ITB SB</h2>
                                        <p></p>
                                        <p>IEEE is the world's largest technical professional organization and we are one of IEEE's Student Branches from Indonesia with a strong vision of "Engineering Human Excellence". IEEE ITB is an organization where passionate engineering students exchange their experiences and learn from industry experts and academias to bring real impacts to society. Through IEEE, students are able to enhance their hard and interpersonal skills through training and learning with professional figures.</p>
                                        <p>As a key contributor to the IEEE ITB SB website project, I played a vital role in creating a user-friendly and engaging website for the organization. My work focused on implementing the IEEE homepage using React.js, which improved the website's speed, performance, and overall user experience.</p>
                                        <p>In addition, I created a vision section for the IASC's website, which showcased the organization's goals and values and helped to increase engagement and participation among members. This section helped to promote the organization's mission and provided a clear and inspiring vision for its members.</p>
                                        <p>Moreover, I ensured that the web pages were compatible with the browser and devices commonly used by visitors, which ensured a consistent and smooth user experience across different platforms. This helped to maximize user engagement and minimize any potential issues or problems.</p>

                                        <div className="portfolio-view-list d-flex flex-wrap">
                                            <div className="port-view">
                                                <span>Branch</span>
                                                <h4>Development</h4>
                                            </div>

                                            <div className="port-view">
                                                <span>Project Types</span>
                                                <h4>Website</h4>
                                            </div>

                                            <div className="port-view">
                                                <span>Website</span>
                                                <h4><a href="https://ieee-itb.netlify.app/" target="_blank" rel="noopener noreferrer">View Project</a></h4>
                                            </div>
                                        </div>

                                        <div className="portfolio-share-link mt--20 pb--70 pb_sm--40">
                                            <ul className="social-share rn-lg-size d-flex justify-content-start liststyle mt--15">
                                                {SocialShare.map((val , i) => (
                                                    <li key={i}><a href={`${val.link}`}>{val.Social}</a></li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="portfolio-thumb-inner">
                                        
                                        <div className="thumb mb--30">
                                            <img src="/assets/images/portfolio/ieee/image5.png" alt="Portfolio Images"/>
                                        </div> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Portfolio Details */}

                

                {/* Start Back To Top */}
                <div className="backto-top">
                    <ScrollToTop showUnder={160}>
                        <FiChevronUp />
                    </ScrollToTop>
                </div>
                {/* End Back To Top */}
                
                <FooterTwo />  


            </React.Fragment>
        )
    }
}
export default PortfolioIEEE;
