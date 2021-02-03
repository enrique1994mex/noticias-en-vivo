import React, {Component} from 'react';
import New from './New';

class News extends Component {
    render() {
        return (
            <div className="container sinpadding">
                <div className="row">
                {this.props.miState.articles
                ? ( this.props.miState.articles.map ( (k,index) =>
                    <div className="col-12 col-md-6 col-lg-4" key={index}>
                        <New n={k}/>
                    </div>
                    )
                )
                : this.props.miState.articles != null
                ? ( 
                    <div className="col-md-4 mx-auto">
                        <div className="alert alert-danger">
                            <p>Please enter a country</p>
                        </div>
                    </div>
                )
                : (
                    <div className="col-md-4 mx-auto">
                        <div className="card card-body">
                            <p> Not request yet</p>
                        </div>
                    </div>
                )
                }
                </div>
            </div>
        ); 
    }
}

export default News;