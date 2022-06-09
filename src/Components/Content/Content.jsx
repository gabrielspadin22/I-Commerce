import './Content.css'
import React from 'react';
function Content({children}) {
    
    return (
        <div id='content ' className='content_container bg_1 '>
            {children}
        </div>
    );
}

export default Content;