import React, {Component} from 'react';
import NewsForm from './components/NewsForm';
import News from './components/News';
import {Noticias_key} from './keys'; 

class App extends Component {

  state = null; 
 

  getNoticias = async e => {
    e.preventDefault(); 
    const {country} = e.target.elements;
    const countryValue = country.value;
    
    if (countryValue) {
      const Api_url = `http://newsapi.org/v2/top-headlines?country=${countryValue}&apiKey=${Noticias_key}`;
      const response = await fetch(Api_url);
      const data = await response.json(); 
      const {articles} = data;
      
      console.log(this.state);
      this.setState({articles});
      console.log(this.state); 
      console.log(this.state.articles);
    } 
  }

  render() {
    return (
      <div className="container p-4">
        <div className="row">
          <div className="col-md-4 mx-auto">
            <NewsForm getNoticias={this.getNoticias}/>
          </div>
          <div className="w-100"></div>
          <News miState= {this.state}/>
          
        </div>
      </div>
    )        
  }
}

export default App; 