
import React, { Component } from 'react'
import {
  Link
} from "react-router-dom";


export class navbar extends Component {
  constructor(props) 
  {
    super(props);
    
    this.state={
      searchdata:null,
    }
  };
  
  handleSubmit=(e)=>{
    e.preventDefault();
    
    // console.log(this.state.searchdata);
    this.setState({val:this.state.searchdata})
    // console.log(this.state.props.val)
    window.location.href='/search';
    
  }
  handleInputChange=async (e)=>{     // arrow function is necessary dont know why !!!IMPORTANT
    
    await this.setState({searchdata:e.target.value});
    
    // console.log(this.state.searchdata)
  }
  
  
  render() {
    const {searchdata}= this.state
    
    return (
      
      <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand " href="/">VNews</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-3 mx-4 mb-lg-0">
              {/* <li className="nav-item active">
                <Link className="nav-link mx-2 " aria-current="page" to="/">Home</Link>
              </li> */}
              <li className="nav-item mx-2 active ">
                <Link className="nav-link " to="/general">General</Link>
              </li>
              <li className="nav-item mx-2">
                <Link className="nav-link " to="/business">Business</Link>
              </li>
              <li className="nav-item mx-2">
                <Link className="nav-link " to="/entertainment">Entertainment</Link>
              </li>
              <li className="nav-item mx-2">
                <Link className="nav-link " to="/health">Health</Link>
              </li>
              <li className="nav-item mx-2">
                <Link className="nav-link " to="/science">Science</Link>
              </li>
              <li className="nav-item mx-2">
                <Link className="nav-link " to="/sports">Sports</Link>
              </li>
              <li className="nav-item mx-2">
                <Link className="nav-link " to="/technology">Technology</Link>
              </li>
            </ul>
            <form className="d-flex" role="search" onSubmit={this.handleSubmit}>
              <input className="form-control me-3 rounded-pill" name="searchdata" onChange={this.handleInputChange} type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-success" to="/search">Search</button>
            </form>
          </div>
        </div>
      </nav>
    

    )
  }
}

export default navbar