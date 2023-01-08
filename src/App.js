import React, { useState, useEffect } from 'react';
import './App.css';
import { Link } from "react-router-dom";

function App() {

  /* PRELOADER */
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000)
  }, [])

  const [age, setAge] = useState(0);
  const [country, setCountry] = useState(0);
  const [gender, setGender] = useState(0);
  const [mass, setMass] = useState(0);
  const [job, setJob] = useState(0);
  const [education, setEducation] = useState(0);
  const [smoke, setSmoke] = useState(0);
  const [drink, setDrink] = useState(0);
  const [sleep, setSleep] = useState(0);
  const [marriage, setMarriage] = useState(0);
  const [social, setSocial] = useState(0);
  const [sport, setSport] = useState(0);
  const [numlock3, setNumlock3] = useState((country +
    gender + mass + job + education +
    smoke + drink + sleep + marriage + social + sport) - age);

  const handle = () => {
    localStorage.setItem("Age1", age);
    localStorage.setItem("Country1", country);
    localStorage.setItem("Gender1", gender);
    localStorage.setItem("Mass1", mass);
    localStorage.setItem("Job1", job);
    localStorage.setItem("Education1", education);
    localStorage.setItem("Smoke1", smoke);
    localStorage.setItem("Drink1", drink);
    localStorage.setItem("Sleep1", sleep);
    localStorage.setItem("Marriage1", marriage);
    localStorage.setItem("Social1", social);
    localStorage.setItem("Sport1", sport);
    localStorage.setItem("Numlock3", numlock3);
  };

  function sumTogether() {
    setNumlock3(((country + gender +
      mass + job + education + smoke + drink + sleep +
      marriage + social + sport) - age) * 31556926);
  }

  if (loading) {
    return <div className='style-preinput'></div>
  }
  else {
    return (
      <div>
        <div className="App">

          <h4 className='fill-field'>* Please fill in all fields (for the most accurate result) *</h4>
          <div className='border-containers'>
          <div className='select-container'>
            <select onChange={e => setAge(+e.target.value)} className='select-box'>
              <option value="">Age --</option>
              <option type="number" value={15}>15 years old</option>
              <option type="number" value={16}>16 years old</option>
              <option type="number" value={17}>17 years old</option>
              <option type="number" value={18}>18 years old</option>
              <option type="number" value={19}>19 years old</option>
              <option type="number" value={20}>20 years old</option>
              <option type="number" value={21}>21 years old</option>
              <option type="number" value={22}>22 years old</option>
              <option type="number" value={23}>23 years old</option>
              <option type="number" value={24}>24 years old</option>
              <option type="number" value={25}>25 years old</option>
              <option type="number" value={26}>26 years old</option>
              <option type="number" value={27}>27 years old</option>
              <option type="number" value={28}>28 years old</option>
              <option type="number" value={29}>29 years old</option>
              <option type="number" value={30}>30 years old</option>
              <option type="number" value={31}>31 years old</option>
              <option type="number" value={32}>32 years old</option>
              <option type="number" value={33}>33 years old</option>
              <option type="number" value={34}>34 years old</option>
              <option type="number" value={35}>35 years old</option>
              <option type="number" value={36}>36 years old</option>
              <option type="number" value={37}>37 years old</option>
              <option type="number" value={38}>38 years old</option>
              <option type="number" value={39}>39 years old</option>
              <option type="number" value={40}>40 years old</option>
              <option type="number" value={41}>41 years old</option>
              <option type="number" value={42}>42 years old</option>
              <option type="number" value={43}>43 years old</option>
              <option type="number" value={44}>44 years old</option>
              <option type="number" value={45}>45 years old</option>
            </select>
          </div>
          <div className='select-container'>
            <select onChange={e => setCountry(+e.target.value)} className='select-box'>
              <option value="">Country --</option>
              <option type="number" value={64}>Japan</option>
              <option type="number" value={63}>Switzerland</option>
              <option type="number" value={63}>South Korea</option>
              <option type="number" value={63}>Singapore</option>
              <option type="number" value={63}>Spain</option>
              <option type="number" value={63}>Australia</option>
              <option type="number" value={63}>Italy</option>
              <option type="number" value={63}>Norway</option>
              <option type="number" value={62}>Israel</option>
              <option type="number" value={62}>France</option>
              <option type="number" value={62}>Sweden</option>
              <option type="number" value={62}>Iceland</option>
              <option type="number" value={62}>Canada</option>
              <option type="number" value={62}>New Zeland</option>
              <option type="number" value={61}>Ireland</option>
              <option type="number" value={61}>Netherlands</option>
              <option type="number" value={61}>Germany</option>
              <option type="number" value={61}>Austria</option>
              <option type="number" value={61}>Finland</option>
              <option type="number" value={61}>Portugal</option>
              <option type="number" value={61}>Belgium</option>
              <option type="number" value={61}>United Kingdom</option>
              <option type="number" value={61}>Denmark</option>
              <option type="number" value={61}>Greece</option>
              <option type="number" value={61}>Kuwait</option>
              <option type="number" value={60}>Costa Rica</option>
              <option type="number" value={60}>Chile</option>
              <option type="number" value={59}>Peru</option>
              <option type="number" value={59}>Colombia</option>
              <option type="number" value={59}>Czech Republic</option>
              <option type="number" value={58}>Croatia</option>
              <option type="number" value={58}>Turkey</option>
              <option type="number" value={58}>USA</option>
              <option type="number" value={58}>Ecuador</option>
              <option type="number" value={58}>Poland</option>
              <option type="number" value={58}>Albania</option>
              <option type="number" value={57}>Jordan</option>
              <option type="number" value={57}>Cuba</option>
              <option type="number" value={57}>Chinese</option>
              <option type="number" value={57}>Iranian</option>
              <option type="number" value={57}>Qatar</option>
              <option type="number" value={57}>Algeria</option>
              <option type="number" value={57}>Uruguay</option>
              <option type="number" value={57}>Tunisia</option>
              <option type="number" value={56}>Argentina</option>
              <option type="number" value={56}>Hungary</option>
              <option type="number" value={56}>Lebanon</option>
              <option type="number" value={56}>UAE</option>
              <option type="number" value={56}>Armenia</option>
              <option type="number" value={56}>Mexican</option>
              <option type="number" value={55}>Brazil</option>
              <option type="number" value={55}>Serbia</option>
              <option type="number" value={55}>Romania</option>
              <option type="number" value={55}>Bulgaria</option>
              <option type="number" value={54}>Belarusian</option>
              <option type="number" value={54}>Saudi Arabia</option>
              <option type="number" value={53}>Venezuelan</option>
              <option type="number" value={53}>Moldova</option>
              <option type="number" value={53}>Russia</option>
              <option type="number" value={53}>Fas</option>
              <option type="number" value={53}>Morocco</option>
              <option type="number" value={52}>Syria</option>
              <option type="number" value={51}>Egypt</option>
              <option type="number" value={51}>Azerbaijan</option>
              <option type="number" value={51}>Indonesia</option>
              <option type="number" value={50}>India</option>
              <option type="number" value={48}>Senegalese</option>
              <option type="number" value={46}>Ghana</option>
              <option type="number" value={45}>Pakistan</option>
              <option type="number" value={45}>South Africa</option>
            </select>
          </div>
          <div className='select-container'>
            <select onChange={e => setGender(+e.target.value)} className='select-box'>
              <option value="">Gender --</option>
              <option type="number" value={1}>Male</option>
              <option type="number" value={5}>Female</option>
            </select>
          </div>
          <div className='select-container'>
            <select onChange={e => setMass(+e.target.value)} className='select-box'>
              <option value="">Mass --</option>
              <option type="number" value={1}>Underweight</option>
              <option type="number" value={3}>Normal</option>
              <option type="number" value={1}>Overweight</option>
              <option type="number" value={1}>Obese</option>
              <option type="number" value={0}>Extremely Obese</option>
            </select>
          </div>
          <div className='select-container'>
            <select onChange={e => setJob(+e.target.value)} className='select-box'>
              <option value="">Job --</option>
              <option type="number" value={1}>Unemployed</option>
              <option type="number" value={2}>Blue-Collar</option>
              <option type="number" value={3}>White-Collar</option>
            </select>
          </div>
          <div className='select-container'>
            <select onChange={e => setEducation(+e.target.value)} className='select-box'>
              <option value="">Education --</option>
              <option type="number" value={1}>None</option>
              <option type="number" value={1}>Primary School</option>
              <option type="number" value={1}>Middle School</option>
              <option type="number" value={2}>High School</option>
              <option type="number" value={2}>College</option>
            </select>
          </div>
          {/* 2. GRUP */}
          <div className='select-container'>
            <select onChange={e => setSmoke(+e.target.value)} className='select-box'>
              <option value="">Smoke --</option>
              <option type="number" value={3}>No</option>
              <option type="number" value={2}>Little</option>
              <option type="number" value={1}>Normal</option>
              <option type="number" value={0}>Extreme</option>
            </select>
          </div>
          <div className='select-container'>
            <select onChange={e => setDrink(+e.target.value)} className='select-box'>
              <option value="">Drink --</option>
              <option type="number" value={3}>No</option>
              <option type="number" value={2}>Little</option>
              <option type="number" value={1}>Normal</option>
              <option type="number" value={0}>Extreme</option>
            </select>
          </div>
          <div className='select-container'>
            <select onChange={e => setSleep(+e.target.value)} className='select-box'>
              <option value="">Sleep (per day) --</option>
              <option type="number" value={0}>1 Hour</option>
              <option type="number" value={0}>2 Hours</option>
              <option type="number" value={0}>3 Hours</option>
              <option type="number" value={0}>4 Hours</option>
              <option type="number" value={0}>5 Hours</option>
              <option type="number" value={1}>6 Hours</option>
              <option type="number" value={2}>7 Hours</option>
              <option type="number" value={3}>8 Hours</option>
              <option type="number" value={2}>9 Hours</option>
              <option type="number" value={1}>10 Hours</option>
              <option type="number" value={0}>11 Hours</option>
              <option type="number" value={0}>12 Hours</option>
              <option type="number" value={0}>13 Hours</option>
              <option type="number" value={0}>14 Hours</option>
              <option type="number" value={0}>15 Hours</option>
              <option type="number" value={0}>16 Hours</option>
            </select>
          </div>
          <div className='select-container'>
            <select onChange={e => setMarriage(+e.target.value)} className='select-box'>
              <option value="">Marriage --</option>
              <option type="number" value={1}>Yes</option>
              <option type="number" value={0}>No</option>
            </select>
          </div>
          <div className='select-container'>
            <select onChange={e => setSocial(+e.target.value)} className='select-box'>
              <option value="">Social (per day) --</option>
              <option type="number" value={1}>1 Hour</option>
              <option type="number" value={1}>2 Hours</option>
              <option type="number" value={1}>3 Hours</option>
              <option type="number" value={2}>4 Hours</option>
              <option type="number" value={2}>5 Hours</option>
              <option type="number" value={2}>6 Hours</option>
              <option type="number" value={3}>7 Hours</option>
              <option type="number" value={3}>8 Hours</option>
              <option type="number" value={3}>9 Hours</option>
              <option type="number" value={3}>10 Hours</option>
            </select>
          </div>
          <div className='select-container'>
            <select onChange={e => setSport(+e.target.value)} className='select-box'>
              <option value="">Sport (per day) --</option>
              <option type="number" value={1}>Less than 1 Hour</option>
              <option type="number" value={2}>1 Hour</option>
              <option type="number" value={2}>2 Hours</option>
              <option type="number" value={3}>3 Hours</option>
              <option type="number" value={4}>4+ Hours</option>
            </select>
          </div>
          </div>

          <div className='btn-group'>
            <Link to="/welcome"><button className='btn-save'>Welcome</button></Link>
            <Link to="/typename"><button className='btn-save'>Info</button></Link>
            <button className='btn-save' onClick={sumTogether}>Submit!</button>
            <Link to="/next"><button className='btn-save' onClick={handle}>Calculate</button></Link>
          </div>
        </div>
      </div>
    );
  }

}

export default App;
