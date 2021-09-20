import React, { useEffect, useState } from 'react';
import Country from '../Coutries/Country';
import './country-name.css';
const Countrys = () => {

    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.eu/rest/v2/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])

    return (
        <div>
            <h1>Below is all Countries Infromations</h1>
            <div className='country-name'>

                {countries.map(country => <Country name={country.name} flag={country.flag} capital={country.capital}></Country>)}
            </div>
        </div>
    );
};

export default Countrys;