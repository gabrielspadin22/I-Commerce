import './Content.css'
import React, { useState, useEffect} from 'react';
function Content({children}) {
    
    return (
        <div id='content' className='content_container bg_1 shadow1'>
            {children}
        </div>
    );
}

export default Content;