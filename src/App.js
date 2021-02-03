import React, {Component} from 'react';
import NewsForm from './components/NewsForm';
import News from './components/News';
import {Noticias_key} from './keys'; 

class App extends Component {

  state = {articles: null}; 
 
  getNoticias = async e => {
    e.preventDefault(); 
    const {country} = e.target.elements;
    const countryValue = country.value;
    
    if (countryValue) {
      const Api_url = `http://newsapi.org/v2/top-headlines?country=${countryValue}&apiKey=${Noticias_key}`;
      const response = await fetch(Api_url);
      const data = await response.json(); 
      const {articles} = data;
      
      this.setState({articles: articles});
    } else {
      this.setState({articles: countryValue});
      console.log(this.state);  
    } 
  } 

  render() {
    return (
      <div className="container p-4">
        <div className="row">
          <div className="col-md-4 mx-auto">
            <div className="card card-body bg-success mb-3 text-info text-center">
                <h1 className="card-title">Live news</h1>
            </div>
            <NewsForm getNoticias={this.getNoticias}/>
          </div>
          <News miState= {this.state}/>
          
        </div>
      </div>
    )        
  }
}

export default App; 