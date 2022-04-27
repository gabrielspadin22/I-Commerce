import React from 'react';

function Content({texto, children}) {
    
    return (
        <div className='content_container bg_1 shadow1'>
            {texto} 
            {children}
        </div>
    );
}

export default Content;