import React, {Component} from 'react';

class New extends Component {
    render () {
        const {n} = this.props; 
        return (
            <div className="card card-body" style={styleCard}>
                <p1 className="card-title">
                    Title: {n.title}
                </p1>
                <p className="card-text">
                    Description: {n.description} 
                </p>
                <p className="card-subtitle">
                    Author: {n.author}
                </p>
                <p>
                    <a href={n.url}>
                        <img src={n.urlToImage} alt="imagen del sitio web" width="300" height="300" className="card-img-bottom"/>
                    </a>
                </p>
            </div> 
        )
    }
}

const styleCard = {
    textAlign: 'justify',
    padding: '10px 10px',
    borderRadius: '20px',
    height: '600px'
}

export default New; 