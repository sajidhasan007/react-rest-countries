import React from 'react';
import './Countrys.css';
const Country = (props) => {
    return (
        <div className='countries'>
            <div>
                <img src={props.flag} alt="" />
                <h3>Name: {props.name}</h3>
                <p>Capital: {props.capital}</p>
            </div>
        </div>
    );
};

export default Country;