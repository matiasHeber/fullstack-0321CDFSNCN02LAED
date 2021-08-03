import React from 'react';

const Section = ({title, children}) => {
    
    return (
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">{title}</h5>
                </div>
                <div className="card-body">
                    {children}
                </div>
            </div>
        </div>
    );
}

export default Section;
