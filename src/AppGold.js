import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import App from './App';
import Next from './Next';
import Welcome from './Welcome';
import TypeName from './TypeName';

function AppGold() {
  return (
    <div className='App'>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout/>}>
                    <Route index element={<Welcome/>}/>
                    <Route path='next' element={<Next/>}/>
                    <Route path='apppage' element={<App/>}/>
                    <Route path="welcome" element={<Welcome/>}/>
                    <Route path="typename" element={<TypeName/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default AppGold;
