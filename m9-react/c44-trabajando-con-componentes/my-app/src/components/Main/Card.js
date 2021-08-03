import React from 'react';

const Card = ({title, total, color, icon}) => {
    
    const laCajita = `card border-left-${color} shadow h-100 py-2`;
    const iconClass = `fas ${icon} fa-2x text-gray-300`
    const text = `text-xs font-weight-bold text-${color} text-uppercase mb-1`
    return (
        <div className="col-md-4 mb-4">
            <div className={laCajita}>
                <div className="card-body">
                    <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                            <div className={text}>{title}</div>
                            <div className="h5 mb-0 font-weight-bold text-gray-800">{total}</div>
                        </div>
                        <div className="col-auto">
                            <i className={iconClass}></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;
