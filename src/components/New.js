import React, {Component} from 'react';

class New extends Component {
    render () {
        const {n} = this.props; 
        return (
            <div className="card overflow-hidden" style={styleCard }>
                <div className="card-body">
                <p className="card-title">
                    <b>Title:</b> {n.title}
                </p>
                <p className="card-text">
                    <b>Description:</b> {n.description} 
                </p>
                <p className="card-subtitle">
                    <b>Author:</b> {n.author}
                </p>
                </div>
                <a href={n.url} target="_blank">
                    <img src={n.urlToImage} alt="imagen del sitio web" className="card-img-top" style={styleImg}/>
                </a>
            </div>
        ); 
    }
}

const styleCard = {
    textAlign: 'justify',
    borderRadius: '20px',
    height: '500px',
    margin: '10px 2px' 
}

const styleImg = {
    height: '200px'
}
export default New; 