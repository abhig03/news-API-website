// import PropTypes from 'prop-types'
import React, { Component } from 'react'

export class NewsItem extends Component {
    
    render() {
     let {title,desc,imgUrl,newsUrl,time}=this.props;
    return (
        
        <div className="card m-3" style={{width:"95%"}}>
        <img src={imgUrl} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{desc}</p>
          <p className="card-text"><small className="text-muted">Last updated: {fn(time)} </small></p>
          <a href={newsUrl} target='_blank'  rel="noreferrer" className="btn btn-sm btn-dark">Read More</a>
        </div>
      </div>
    )
  }
}
function fn(time){

let x=new Date(time);
 return x.toLocaleString(undefined,{timeZone:'Asia/Kolkata'})
}
export default NewsItem