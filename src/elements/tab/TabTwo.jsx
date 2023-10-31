import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

class TabsTwo extends Component{
    render(){
        let 
        tab1 = "Main skills",
        tab2 = "Awards",
        tab3 = "Experience",
        tab4 = "Education";
        const { tabStyle } = this.props
        return(
            <div>
                {/* Start Tabs Area */}
                <div className="tabs-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <Tabs>
                                    <TabList  className={`${tabStyle}`}>
                                        <Tab>{tab1}</Tab>
                                        <Tab>{tab2}</Tab>
                                        <Tab>{tab3}</Tab>
                                        <Tab>{tab4}</Tab>
                                    </TabList>

                                    <TabPanel>
                                        <div className="single-tab-content">
                                            <ul>
                                                <li>
                                                    <a>UI/UX Design <span> - Design</span></a>
                                                    Figma, Adobe XD, Photoshop
                                                </li>
                                                <li>
                                                    <a>Web Development<span> - Development</span></a>
                                                    ReactJS, VueJS, ExpressJS
                                                </li>
                                                <li>
                                                    <a>Video Editing <span> - Animation</span></a>
                                                    Adobe Premier Pro, Adobe After Effect, Adobe Audition
                                                </li>
                                            </ul>
                                        </div>
                                    </TabPanel>

                                    <TabPanel>
                                       <div className="single-tab-content">
                                           <ul>
                                               <li>
                                                   <a href="https://docs.google.com/presentation/d/1hQAHcGYoz8BCt5hl7xLLClkpvZrb_CgBETwYHZE-MXk/edit#slide=id.p">  Top 6 Business Case Competition <span>- Accounting Fair Universitas Negeri Yogyakarta</span></a> 2022
                                               </li>
                                               <li>
                                                   <a >Top 5 graduate in acceleration class. <span>- SMAN 1 Gadingrejo</span></a> 2019
                                               </li>
                                               <li>
                                                   <a >Finalist in Olimpiade Fisika ITERA 4 <span>- Institut Teknologi Sumatera </span></a> 2018
                                               </li>
                                               <li>
                                                   <a >Finalist in Olimpiade Fisika Himafi UNILA <span>- Universitas Lampung </span></a> 2018
                                               </li>
                                               <li>
                                                   <a >Best Film Editor in Gebyar Seni Smanding <span>- SMAN 1 Gadingrejo </span></a> 2018
                                               </li>
                                           </ul>
                                       </div>
                                    </TabPanel>



                                    <TabPanel>
                                       <div className="single-tab-content">
                                           <ul>
                                                <li>
                                                   <a >Full-Stack Developer<span> - Astra Honda Motor</span></a> July 2023 – Aug 2023 
                                               </li>
                                               <li>
                                                   <a >Front-End Developer Freelance<span> - Badan Riset dan Inovasi Nasional</span></a> March 2023 – Mei 2023
                                               </li>
                                               <li>
                                                   <a >Head Of  IT Division<span> - Kabinet KM ITB</span></a> July 2022 – April 2023
                                               </li>
                                               <li>
                                                   <a >Front-End Developer	<span> - IEEE ITB SB </span></a> May 2021 – Jan 2022
                                               </li>
                                               <li>
                                                   <a >Front-End Developer	<span> - IMPACT STEI 2021 </span></a> Marc 2021 - May 2021
                                               </li>
                                               <li>
                                                   <a >Front-End Developer	<span> - Wisuda April ITB 2021 </span></a> Feb 2021 - Apr 2021
                                               </li>
                                           </ul>
                                       </div>
                                    </TabPanel>

                                    <TabPanel>
                                       <div className="single-tab-content">
                                           <ul>
                                               <li>
                                                   <a href="https://www.itb.ac.id/program-studi-sarjana-sistem-dan-teknologi-informasi">Information System and Technology<span> - Bandung Institute of Technology</span></a> 2020 - 2024 (expected)
                                               </li>
                                               <li>
                                                   <a >Math & Natural Science<span> - SMAN 1 Gadingrejo</span></a> 2017 - 2019
                                               </li>
                                               
                                           </ul>
                                       </div>
                                    </TabPanel>
                                    
                                </Tabs>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Tabs Area */}
            </div>
        )
    }
}



export default TabsTwo;