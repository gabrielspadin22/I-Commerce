import './Search.css'
import React from 'react';

function Seach() {
    return (
        <form className='search_form' action="">
                <div className='search '>
                    <input type="text" name="" id="" placeholder='Buscá tu producto' className='controls '/>
                    <button type="submit" className='controls hover_text_2' ><i className='material-icons icon_s'>search</i></button>
                </div>
        </form>
    );
}

export default Seach;