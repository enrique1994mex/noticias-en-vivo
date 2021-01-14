import React, {Component} from 'react';
import New from './New';

class News extends Component {
    render() {
        return (
            <div className="row">
                {this.props.miState != null
                ? ( this.props.miState.articles.map ( (k,index) =>
                    <div className="col-md-4" key={index}>
                        <New n={k}/>
                    </div>
            
                    )
                )
                : (
                    <div className="col-md-4 mx-auto">
                        <div className="card card-body">
                            <p> Not request yet</p>
                        </div>
                    </div>
                )}
            </div>
        ); 
    }
}

export default News;