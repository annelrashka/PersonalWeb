import React, { Component } from "react";
import {Link} from "react-router-dom";

const PortfolioListContent = [
    {
        image: 'image-0',
        category: 'Design and Development',
        title: 'Event Management System'
    },
    {
        image: 'image-1',
        category: 'Design and Development',
        title: 'E-commerce website : Nyampah.co'
    },
    {
        image: 'image-2',
        category: 'Development and Maintenance',
        title: 'Official Website Kabinet KM ITB'
    },
    {
        image: 'image-5',
        category: 'Design',
        title: 'Edunex Revamp'
    },
    {
        image: 'image-3',
        category: 'Development',
        title: 'Official Website : IEEE ITB SB'
    },
    {
        image: 'image-7',
        category: 'Development',
        title: 'Project Exercise : Investment Calculator'
    },
    {
        image: 'image-6',
        category: 'Development',
        title: 'Official Website : Wisuda April 2021'
    },
    {
        image: 'image-4',
        category: 'Business Case',
        title: 'Case Solving Report: Nike Entering Metaverse'
    }
   
]

class PortfolioList extends Component{
    render(){
        const {column , styevariation } = this.props;
        const list = PortfolioListContent.slice(0 , this.props.item);
        return(
            <React.Fragment> 
                {list.map((value , index) => (
                    <div className={`${column}`} key={index}>
                        <div className={`portfolio ${styevariation}`} >
                            <div className="thumbnail-inner">
                                <div className={`thumbnail ${value.image}`}></div>
                                <div className={`bg-blr-image ${value.image}`}></div>
                            </div>
                            <div className="content">
                                <div className="inner">
                                    <p>{value.category}</p>
                                    <h4><a href={`/portfolio-details-${index}`}>{value.title}</a></h4>
                                    <div className="portfolio-button">
                                        <a className="rn-btn" href={`/portfolio-details-${index}`}>View Details</a>
                                    </div>
                                </div>
                            </div>
                            <Link className="link-overlay" to = {`/portfolio-details-${index}`}></Link>
                        </div>
                    </div>
                ))}
               
            </React.Fragment>
        )
    }
}
export default PortfolioList;