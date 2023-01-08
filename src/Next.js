import React, { useState, useRef, useEffect } from 'react';
import "./Next.css";
import { Link } from 'react-router-dom';
import "./Countdown.css";

const formatTime = (time) => {
    let year = Math.floor(time / 31104000)
    let month = Math.floor((time / 2592000) % 12)
    let day = Math.floor((time / 86400) % 30)
    let hours = Math.floor((time / 3600) % 24)
    let minutes = Math.floor((time / 60) % 60)
    let seconds = Math.floor((time - minutes * 60) % 60)

    if (year < 10) year = "0" + year;
    if (month < 10) month = "0" + month;
    if (day < 10) day = "0" + day;
    if (hours < 10) hours = "0" + hours;
    if (minutes < 10) minutes = "0" + minutes;
    if (seconds < 10) seconds = "0" + seconds;
    return year + ":" + month + ":" + day + ":" + hours + ":" + minutes + ":" + seconds
}

function Next() {

    /* PRELOADER */
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 2000)
    }, [])



    function CountDown({ seconds }) {
        const [countdown, setCountdown] = useState(seconds)

        const timerId = useRef()

        useEffect(() => {
            timerId.current = setInterval(() => {
                setCountdown(prev => prev - 1)
            }, 1000)
            return () => clearInterval(timerId.current)
        }, [])

        useEffect(() => {
            if (countdown <= 0) {
                clearInterval(timerId.current)
            }
        }, [countdown])

        return (
            <h2 className='cd-header'>{formatTime(countdown)}</h2>
        )
    }

    if (loading) {
        return <div className='style-prenext'></div>
    }
    else {
        return (
            <div>
                <h2 className='quote-life'> · LIFE HAS TO END, LOVE DOESN'T · </h2>

                <address className='quote-a'>
                    Death is not the greatest <br />
                    loss in life. The greatest <br />
                    los is what dies inside<br />
                    us while we live.<br />
                    <br />
                    - Norman Cousins
                </address>
                <address className='quote-b'>
                    "We all die. The <br />
                    goal isn't to live forever, the goal <br />
                    is to create <br />
                    something that <br />
                    will" <br />
                    <br />
                    - Chuck Palahniuk
                </address>
                <address className='quote-c'>
                    Only a person who has lived <br />
                    totally can die gracefully. <br />
                    <br />
                    - Sadhguru
                </address>
                <address className='quote-d'>
                    Death is a challenge. It <br />
                    tells us not to waste <br />
                    time. It tells us to tell <br />
                    each other right now <br />
                    that we love each other <br />
                    <br />
                    - Leo Buscaglia
                </address>
                <address className='quote-e'>
                    It always seems <br />
                    impossible until it's done. <br />
                    <br />
                    - Nelson Mandela
                </address>
                <address className='quote-f'>
                    - In the end, we only <br />
                    regret the chances <br />
                    we didn't take. -
                </address>
                <address className='quote-g'>
                    "If you get tired, LEARN TO REST not to quit!" <br />
                    <br />
                    - Bansky
                </address>

                {/*
                {localStorage.getItem("Numlock3") && (
                    <div>
                        <h2>Toplanan: {localStorage.getItem("Numlock3")}</h2>
                    </div>
                )}
            */}

                <div className='border-style'></div>

                <h1 className="header-remain">REMAIN TIME</h1>

                <CountDown seconds={localStorage.getItem("Numlock3")} />

                <h2 className='sub-paragraph'>Years &emsp;&emsp;&emsp;&emsp;
                    Month &emsp;&emsp;&emsp;&emsp;
                    Day &emsp;&emsp;&emsp;&emsp;
                    Hours &emsp;&emsp;&emsp;
                    Minutes &emsp;&emsp;&emsp;
                    Seconds</h2>

                <Link to="/apppage">
                    <button className='btn-back'>Back</button>
                </Link>
            </div>
        );
    }

}

export default Next;
