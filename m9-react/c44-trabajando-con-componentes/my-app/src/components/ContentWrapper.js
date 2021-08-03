import React, { Fragment } from 'react';
import TopBar from './TopBar';
import ContentRowTop from './ContentRowTop';
import Table from './Table';
import Footer from './Footer';

function ContentWrapper(){
    return (
        <Fragment>
            {/*<!-- Content Wrapper -->*/}
            <div id="content-wrapper" className="d-flex flex-column">
                {/*<!-- Main Content -->*/}
                <div id="content">
                    <TopBar />
                    <ContentRowTop />
                    <Table />
                    <Footer />
                </div>
            </div>    
        </Fragment>
    )
}

export default ContentWrapper;