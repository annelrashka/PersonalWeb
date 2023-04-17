import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import {FaTwitter ,FaInstagram ,FaFacebookF , FaLinkedinIn} from "react-icons/fa";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/Header";
import FooterTwo from "../component/footer/FooterTwo";

const SocialShare = [
    
    {Social: <FaLinkedinIn /> , link: 'https://www.linkedin.com/in/annel-rashka-perdana-ab5380151/'},
    {Social: <FaInstagram /> , link: 'https://www.instagram.com/annelrashka'},
    
]

class PortfolioNyampah extends Component{
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
                <div className="rn-page-title-area pt--120 pb--190 bg_image bg_image--4"  data-black-overlay="7">
                    
                </div>
                {/* End Breadcrump Area */}

                {/* Start Portfolio Details */}
                <div className="rn-portfolio-details ptb--120 bg_color--1">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="portfolio-details">
                                    <div className="inner">
                                        <h2>Nyampah.Co</h2>
                                        <p></p>
                                        <p className="description">This project is in partnership with Badan Riset dan Inovasi Nasional (BRIN) involves creating an online platform where individuals and businesses can buy and sell waste materials for recycling or reuse. The project would be supervised by the expertise and resources from BRIN to promote innovation in waste management and encourage sustainable practices. The website would feature a user-friendly interface for buyers and sellers to connect, negotiate prices, and arrange for the pickup or delivery of the waste materials.</p>
                                        <p className="description">As a key contributor to Nyampah.co, I led the UI/UX design and frontend development efforts. Using Figma as design tool and Angular as frontend framework, My work helped create an intuitive and user-friendly platform that allowed for easy trading of waste materials, promoting sustainability and responsible waste management. </p>

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
                                                <span>Presentation</span>
                                                <h4><a href="https://www.canva.com/design/DAFgXmfblJk/1CBmsiKLzI7lMWcJEVZbPA/view?utm_content=DAFgXmfblJk&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink" target="_blank" rel="noopener noreferrer">View Project</a></h4>
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
                                            <img src="/assets/images/portfolio/nyampah/1.png" alt="Portfolio Images"/>
                                        </div>

                                        <div className="thumb">
                                            <img src="/assets/images/portfolio/nyampah/2.png" alt="Portfolio Images"/>
                                        </div>
                                        <div className="thumb">
                                            <img src="/assets/images/portfolio/nyampah/3.png" alt="Portfolio Images"/>
                                        </div>
                                        <div className="thumb">
                                            <img src="/assets/images/portfolio/nyampah/4.png" alt="Portfolio Images"/>
                                        </div>
                                        <div className="thumb">
                                            <img src="/assets/images/portfolio/nyampah/5.png" alt="Portfolio Images"/>
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
        )
    }
}
export default PortfolioNyampah;
