import './SuperContainer.css'
import React from 'react';

function SuperContainer({children}) {
    return (
        <div className='sup_cont bg_1'>
            {children}
        </div>
    );
}

export default SuperContainer;