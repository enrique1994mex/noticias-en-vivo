import React, {Component} from 'react';
import New from './New';

class News extends Component {
    render() {
        return (
            <div>
                {this.props.miState != null
                ? ( this.props.miState.articles.map ( (k,index) => 
                    <New n={k} key={index}/>)
                )
                : <p> Not request yet</p>}
            </div>
        ); 
    }
}

export default News;