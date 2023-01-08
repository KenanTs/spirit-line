import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "./TypeName.css";

const TypeName = () => {

    /* PRELOADER */
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 1000)
    }, [])

    if (loading) {
        return <div className='style-typename'></div>
    }
    else {
        return (
            <div>
                <div className='info-page'>
                    <h2>INFO PAGE</h2>
                    <p><span className='header-words'>Age: </span>15-45 age range</p>
                    <p><span className='header-words'>Country: </span> Choose from 70 countries</p>
                    <p><span className='header-words'>Gender: </span>Choose gender</p>
                    <p><span className='header-words'>Mass: </span><br />
                        Underweight BMI less than 18.5<br />
                        Normal 18.5 - 24.9<br />
                        Overweight 25 - 29.9<br />
                        Obese 30-34.9<br />
                        Extremely Obese 35+
                    </p>
                    <p><span className='header-words'>Job: </span><br />
                        Blue Collar: Someone who does manual labor and is in the working class.<br />
                        White Collar: As a social class, does professional, managerial or administrative work.
                    </p>
                    <p><span className='header-words'>Education: </span>Your current education level</p>
                    <p><span className='header-words'>Smoke: </span>1 pack is considered normal</p>
                    <p><span className='header-words'>Drink: </span>Your alcohol consumption rate</p>
                    <p><span className='header-words'>Sleep: </span>1-16 hours sleep range</p>
                    <p><span className='header-words'>Marriage: </span>Marital status</p>
                    <p><span className='header-words'>Social: </span>Your interaction with people</p>
                    <p><span className='header-words'>Sport: </span>Your average for walking or another sport </p>

                </div>
                    <div className='btn-main'>
                        <Link to="/welcome"><button className='btn-rotate'>Back</button></Link>
                        <Link to="/apppage"><button className='btn-rotate'>Start!</button></Link>
                    </div>
            </div>
        )
    }
}

export default TypeName;