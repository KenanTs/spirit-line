import React, { useState, useEffect } from 'react';
import "./Welcome.css";
import { Link } from 'react-router-dom';

const Welcome = () => {

    /* PRELOADER */
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 1000)
    }, [])

    if (loading) {
        return <div className='style-prewelcome'></div>
    }
    else {
        return (
        <div>
            <h2 className='site-name' data-text="&nbsp;♢ Spirit Line ♢&nbsp;">&nbsp;♢ Spirit Line ♢&nbsp;</h2>
            <div className='how-it-works'>
                <h1>HOW IT WORKS?</h1>
                <p>〪 Have you ever wondered how long you have left?</p>
                <p>〪 Fill in all fields</p>
                <p>〪 Make your own choices</p>
                <p>〪 Submit your changes and click Calculate</p>
                <p>〪 It is purely for entertainment purposes</p>
                <p>〪 There is no scientific certainty. Cannot be referenced!</p>
                <h2>What is the purpose of the app?</h2>
                <p>〪 To remind you that time is the most precious treasure we have...</p>
                <p>〪 Have fun. Don't forget to invite your friends.</p>
            </div>
            <Link to="/typename"><button className='btn-go'>Let's Go!</button></Link>
        </div>
        )
    }
}

export default Welcome