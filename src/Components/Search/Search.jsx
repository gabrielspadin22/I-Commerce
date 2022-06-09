import './Search.css'
import React from 'react';


function Search( {text, btn}) {

    return (
        <form className='search_form' action="">
                <div className='search '>
                    <input type="text" placeholder='Buscá tu compra' className='controls' onChange={text}/>
                    <button type="submit" className='controls hover_text_2' onClick={btn}><i className='material-icons icon_s'>search</i></button>
                </div>
        </form>
    );
}

export default Search;