import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import ModalVideo from 'react-modal-video';
import {FaTwitter ,FaInstagram ,FaFacebookF , FaLinkedinIn} from "react-icons/fa";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/Header";
import FooterTwo from "../component/footer/FooterTwo";

const SocialShare = [
    {Social: <FaLinkedinIn /> , link: 'https://www.linkedin.com/in/annel-rashka-perdana-ab5380151/'},
    {Social: <FaInstagram /> , link: 'https://www.instagram.com/annelrashka'},
]

class PortfolioBiscase1 extends Component{
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
                <div className="rn-page-title-area pt--120 pb--190 bg_image bg_image--1"  data-black-overlay="7">
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
                                        <h2>Nike Entering Metaverse</h2>
                                        <p></p>
                                        <p>I was a participant in the Accounting Fair Business Case Competition 2022 held by Accounting Major of Universitas Yogyakarta, where I worked on a project that examined the feasibility of Nike entering the Metaverse. Through extensive research and analysis, I developed a comprehensive strategic plan for Nike that helped me secure a top-six position and recognition as one of the best papers in the competition.</p>
                                        <p>My contribution to the project included conducting extensive research, and analyzing market trends. I also collaborated with my team members to develop a well-organized and effectively communicated paper that showcased our strategic recommendations for Nike's potential entry into the Metavers</p>
                                        <p>My experience in the "Business Case Competition" has honed my skills in research, analysis, and strategic planning. It has also demonstrated my ability to work effectively in a team and deliver results under pressure. Overall, this project was an excellent opportunity for me to showcase my competencies and enhance my professional skills, which I am eager to apply to future projects and roles.</p>
                                        <div className="portfolio-view-list d-flex flex-wrap">
                                            <div className="port-view">
                                                <span>Branch</span>
                                                <h4>Business Case</h4>
                                            </div>

                                            <div className="port-view">
                                                <span>Project Types</span>
                                                <h4>Paper</h4>
                                            </div>

                                            <div className="port-view">
                                                <span>Paper</span>
                                                <h4><a href="https://drive.google.com/file/d/1pPxLcjO7X8w2ae0i81NLlOHAyoVhoxSe/view?usp=sharing" target="_blank" rel="noopener noreferrer">View Paper</a></h4>
                                            </div>
                                            <div className="port-view">
                                                <span>Presentation</span>
                                                <h4><a href="https://docs.google.com/presentation/d/1Q_ZPDSKiJEBWdGffv9qAqlSoeaGYEdkDFvEFz69sRi8/edit?usp=sharing" target="_blank" rel="noopener noreferrer">View PPT</a></h4>
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
                                            <img src="/assets/images/portfolio/bisces1.jpg" alt="Portfolio Images"/>
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
export default PortfolioBiscase1;
