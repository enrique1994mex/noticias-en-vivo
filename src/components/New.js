import React, {Component} from 'react';

class New extends Component {
    render () {
        const {n} = this.props; 
        return (
            <div className="card card-body">
                <p>
                    Title: {n.title}
                </p>
                <p>
                    Description: {n.description} 
                </p>
                <p>
                    Author: {n.author}
                </p>
                <p>
                    <a href={n.url}>
                        <img src={n.urlToImage} alt="imagen del sitio web" width="300" height="300"/>
                    </a>
                </p>
            </div> 
        )
    }
}

export default New; 