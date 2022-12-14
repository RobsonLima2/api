import React, {Component} from "react";
import {BrowserRouter, Link, Routes, Route} from 'react-router-dom'
import Home from '../services/Home'
import Movies from "../services/movies";
import Series from '../services/Series'

class Header extends Component {
 
  render(){
    return(
     <BrowserRouter>
        <h1>DevFlix</h1>
        <nav>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/movies'>Movies</Link>
                </li>
                <li>
                    <Link to='/series'>Series</Link>
                </li>
            </ul>
        </nav>
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/movies' element={<Movies />}/>
            <Route path='/series' element={<Series />}/>
        </Routes>
     </BrowserRouter>
    )
  }
}
 export default Header;