import React from 'react';

const Country = (props) => {
    console.log(props.country)
    const {name, flag, capital ,population, region} = props.country;

    return (
        <div className="country">
            <img src={flag} alt="flag img"/>
            <h4> Country Name : {name} </h4>
            <h5> Capital : {capital} </h5>
            <p>population : {population} </p>
            <p><small>Region : {region}</small></p>
        </div>
    );
};

export default Country;