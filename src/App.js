import React, {Component} from 'react';
import NewsForm from './components/NewsForm';
import {Noticias_key} from './keys'; 

class App extends Component {

  getNoticias = async e => {
    e.preventDefault(); 
    const {country} = e.target.elements;
    const countryValue = country.value;
    
    if (countryValue) {
      const Api_url = `http://newsapi.org/v2/top-headlines?country=${countryValue}&apiKey=${Noticias_key}`;
      const response = await fetch(Api_url);
      const data = await response.json(); 
      const {articles} = data;
      
      console.log(articles); 
    } 
  }

  render() {
    return (
      <NewsForm getNoticias={this.getNoticias}/>

    )
  }
}

export default App; 