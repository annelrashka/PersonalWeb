import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import ModalVideo from 'react-modal-video';
import {FaInstagram ,FaLinkedinIn} from "react-icons/fa";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/Header";
import FooterTwo from "../component/footer/FooterTwo";

const SocialShare = [
    {Social: <FaLinkedinIn /> , link: 'https://www.linkedin.com/in/annel-rashka-perdana-ab5380151/'},
    {Social: <FaInstagram /> , link: 'https://www.instagram.com/annelrashka'},
]

class PortfolioEduvita extends Component{
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
                <div className="rn-page-title-area pt--120 pb--190 bg_image bg_image--5"  data-black-overlay="7">
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
                                        <h2>Edunex Revitalization</h2>
                                        <p></p>
                                        <p>Edunex is a Learning Management System (LMS) developed by the ITB to facilitate online learning and course management for its students and faculty members. It provides a centralized platform for creating, sharing, and managing educational content, assessments, and learning activities.  </p>
                                        <p>One potential UI/UX problem with the Edunex Learning Management System (LMS) is the complexity of its user interface. The current design may be overwhelming for some users, making it difficult for them to navigate and find the information they need. Additionally, some users may find the interface too cluttered or busy, which can cause frustration and detract from the learning experience. Another issue is that some of the features and functionalities may not be intuitive or easy to use, which can lead to confusion and errors. Overall, improving the usability and simplicity of the Edunex LMS interface could enhance user satisfaction and engagement, leading to a more effective learning experience for students and instructors alike.</p>
                                        <p>My key contributions to solving UI/UX problems in the Edunex Learning Management System have been focused on improving the Assignment and Exam List interfaces. </p>
                                        <p>My design for the Assignment has made it much easier for students to submit and track their progress. By simplifying the assignment creation process, I've helped to streamline the workflow and reduce confusion for students.</p>
                                        <p>Similarly, my design for the Exam List has made it much easier for students to access exam materials and results. I've created a more organized and structured interface, which has made the process of exam management more efficient and less stressful for all users.</p>
                                        <p>Overall, my contributions have helped enhance the usability and functionality of the Edunex LMS, promoting a more engaging and effective learning experience for all users. I'm proud to have played a key role in solving these problems and improving the platform for everyone.</p>

                                        <div className="portfolio-view-list d-flex flex-wrap">
                                            <div className="port-view">
                                                <span>Branch</span>
                                                <h4>Design</h4>
                                            </div>

                                            <div className="port-view">
                                                <span>Project Types</span>
                                                <h4>UI/UX Design</h4>
                                            </div>

                                            <div className="port-view">
                                                <span>Presentation</span>
                                                <h4><a href="https://www.canva.com/design/DAFTOrcI74M/O6ZIJhNCMMUUqsi8JcIDMw/view?utm_content=DAFTOrcI74M&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink" target="_blank" rel="noopener noreferrer">View Presentation</a></h4>
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
                                        <div className="thumb position-relative mb--30">
                                            <img src="../../assets/images/portfolio/eduvitaVid.png" alt="Thumnail Eduvita"/>
                                            <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='zyxreJ4u1cU' onClose={() => this.setState({isOpen: false})} />
                                            <button className="video-popup position-top-center" onClick={this.openModal}><span className="play-icon"></span></button>
                                        </div>
                                        
                                        <div className="thumb mb--30">
                                            <img src="../../assets/images/portfolio/eduvita/Leaflet1.jpg" alt="Portfolio Images"/>
                                        </div>

                                        <div className="thumb">
                                            <img src="../../assets/images/portfolio/eduvita/Leaflet2.jpg" alt="Portfolio Images"/>
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
export default PortfolioEduvita;
