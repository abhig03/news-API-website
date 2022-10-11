import PropTypes from 'prop-types'
import React, { Component } from 'react'
import NewsItem from './NewsItem'
import InfiniteScroll from 'react-infinite-scroll-component'
export class News extends Component {
    
    static defaultProps={
        pageSize:8,
        category:'general',
        
    }
    static propTypes={
        pageSize:PropTypes.number,
        category:PropTypes.string,
        
    }
    capitalize(s){
        return s.charAt(0).toUpperCase()+s.slice(1);
    }
    constructor(props){
        super(props);
        document.title = `VNews  |  ${this.capitalize(this.props.category)}`
        this.state={
            articles:[],
            loading:false,
            totalResults:0,
            page:1,
        }

    }
    
      fetchMoreData = async () => {                                                                         //d036b95f9e78498f89e0f7415ad2921d  dbe57b028aeb41e285a226a94865f7a7  
          const url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apikey=d036b95f9e78498f89e0f7415ad2921d&page=${this.state.page}&pageSize=${this.props.pageSize}`;
          this.setState({ page: this.state.page + 1 })
        // console.log(this.state.page)
        let data = await fetch(url);
        let parsedData = await data.json()
        this.setState({
            articles: this.state.articles.concat(parsedData.articles),
            totalResults: parsedData.totalResults,
            loading: false,
        })
        
    };
async updateNews(){
        
    let url=`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=d036b95f9e78498f89e0f7415ad2921d&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    
    let data=await fetch(url);
    let parsedData=await data.json();
    this.setState({
        articles:parsedData.articles,
        totalResults:parsedData.totalResults,
    })

    this.setState({ page: this.state.page + 1 })
      
}
  async componentDidMount(){

       this.updateNews();
    }


    render() {

    return (
      <div className="container my-3">
         <h2 className="text-center"> VNews - Top {this.props.category!=="general"?this.capitalize(this.props.category):"Trending"} News</h2>

        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length!==this.state.totalResults}
          loader={this.state.articles.length!==this.state.totalResults?<h4>Loading...</h4>:<></>}
        >
          
         <div className="row">
        {
            this.state.articles.map((e)=>{
                return (
                <div className="col-md-4" key={e.url}> 
                <NewsItem key={e.url} title={e.title&&e.title.length>=100?e.title.slice(0,100)+'...':e.title} desc={e.description&&e.description.length>=150?e.description.slice(0,150)+'...':e.description} newsUrl={e.url} imgUrl={e.urlToImage?e.urlToImage:"https://images.unsplash.com/photo-1478940020726-e9e191651f1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"} time={e.publishedAt}/>
                </div>)

})}
        </div>
        </InfiniteScroll>


        
   
      </div>
    )
  }
}  

export default News