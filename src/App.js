
import './App.css';
import NavBar from './components/NavBar';
import React, { Component } from 'react'
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";

export default class App extends Component {

state={
  val:"NULL123",
}

  render() {
    

    return (
      
      <div>
      <Router>
      <NavBar setState={this.setState}/>
      
        <Routes>
          
          <Route path="/" element={<News key="general" category="general" q={this.val} />} />
          <Route path="/general"  element={<News key="general2" category="general" q={this.val}/>}/>
          <Route path="/business" element={<News key="business" category="business" q={this.val}/>}/>
          <Route path="/entertainment" element={<News key="entertainment" category="entertainment" q={this.val}/>}/>
          <Route path="/health" element={<News key="health" category="health" q={this.val}/>}/>
          <Route path="/science" element={<News key="science" category="science" q={this.val}/>}/>
          <Route path="/sports" element={<News key="sports" category="sports" q={this.val}/>}/>
          <Route path="/technology" element={<News key="technology" category="technology" q={this.val}/>}/>

          <Route path="/search" element={<News key="search"  q={this.val}/>}/>
        </Routes>
      </Router>
     
      </div>
    )
  }
}
