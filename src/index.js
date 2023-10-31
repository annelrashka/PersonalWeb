// React Required
import React, { Component } from 'react';
import ReactDOM from 'react-dom';


// Create Import File
import './index.scss';
import PageScrollTop from './component/PageScrollTop';
import DarkPortfolioLanding from './dark/PortfolioLanding';

// Element Layout
import error404 from "./elements/error404";


import { BrowserRouter, Switch, Route  } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import PortfolioNyampah from './elements/PortfolioNyampah';
import PortfolioEduvita from './elements/PortfolioEduvita';
import PortfolioKM from './elements/PortfolioKM';
import PortfolioIEEE from './elements/PortfolioIeee';
import PortfolioWispril from './elements/PortfolioWispril';
import PortfolioBiscase1 from './elements/PortfolioBiscase1';
import PortfolioEventManagement from './elements/PortfolioEventManagement';
import PortfolioInvestmentCalculator from './elements/PortfolioInvestmentCalculator';


class Root extends Component{
    render(){
        return(
            <BrowserRouter basename={'/'}>
                <PageScrollTop>
                    <Switch>
                        <Route exact path={`${process.env.PUBLIC_URL}/`} component={DarkPortfolioLanding}/>

                        {/* Element Layot */}
                        <Route exact path={`${process.env.PUBLIC_URL}/portfolio-details-0`} component={PortfolioEventManagement}/>
                        <Route exact path={`${process.env.PUBLIC_URL}/portfolio-details-1`} component={PortfolioNyampah}/>
                        <Route exact path={`${process.env.PUBLIC_URL}/portfolio-details-2`} component={PortfolioKM}/>
                        <Route exact path={`${process.env.PUBLIC_URL}/portfolio-details-3`} component={PortfolioEduvita}/>
                        <Route exact path={`${process.env.PUBLIC_URL}/portfolio-details-4`} component={PortfolioIEEE}/>
                        <Route exact path={`${process.env.PUBLIC_URL}/portfolio-details-5`} component={PortfolioInvestmentCalculator}/>
                        <Route exact path={`${process.env.PUBLIC_URL}/portfolio-details-6`} component={PortfolioWispril}/>
                        <Route exact path={`${process.env.PUBLIC_URL}/portfolio-details-7`} component={PortfolioBiscase1}/>
                        <Route path={`${process.env.PUBLIC_URL}/404`} component={error404}/>
                        <Route component={error404}/>
                        

                    </Switch>
                </PageScrollTop>
            </BrowserRouter>
            
            
        )
    }
}

ReactDOM.render(<Root/>, document.getElementById('root'));
serviceWorker.register();