import React from 'react';
import ContentRowCenter from './ContentRowCenter';
import ContentRowMovies from './ContentRowMovies';
import Chart from './Chart';
import { Switch, Route } from 'react-router-dom';

function ContentRowTop(){
    return(
        <React.Fragment>
				{/*<!-- Content Row Top -->*/}
				<div className="container-fluid">
					<div className="d-sm-flex aligns-items-center justify-content-between mb-4">
						<h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
					</div>

					{/*<!-- Switch-->*/}
					<Switch>

						<Route path="/metrics" component={ContentRowMovies} />
						<Route path="/categories" component={ContentRowCenter} />
						<Route path="/table" component={Chart} />
						<Route path="*">
							<h2>Error 404 NOT FOUND</h2>
						</Route>
						
					</Switch>
	
				</div>
				{/*<!--End Content Row Top-->*/}

        </React.Fragment>
    )

}
export default ContentRowTop;