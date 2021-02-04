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
      const Api_url = `http://api.mediastack.com/v1/news?access_key=${Noticias_key}&countries=${countryValue}`;
      const response = await fetch(Api_url);
      const datas = await response.json();
      console.log(datas); 
      const {data} = datas;
      
      this.setState({articles: data});
    } else {
      this.setState({articles: countryValue});
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