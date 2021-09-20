import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css';

const Countries = () => {
   const [countries, setCountries] = useState([]);
   useEffect(()=>{
       fetch('https://restcountries.eu/rest/v2/all')
       .then(res=>res.json())
       .then(data => setCountries(data))
   },[])
    return (
        <div>
            <h2>All Country Name : {countries.length}</h2>
            <div className="grid">
            {
                // countries.map(country => <Country 
                //     country={country}
                //     name ={country.name} 
                //     capital = {country.capital}
                //     population = {country.population}
                //     ></Country>)
                countries.map(country => <Country country={country} ></Country>)

             
            }
            </div>
        </div>
    );
};

export default Countries;