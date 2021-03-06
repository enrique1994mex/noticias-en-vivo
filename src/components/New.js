import React, {Component} from 'react';

class New extends Component {
    render () {
        const {n} = this.props; 
        return (
            <div className="card overflow-hidden border-0" style={styleCard }>
                <a href={n.url} target="_blank" rel="noreferrer">
                    <img src={n.image} alt="imagen ilustrativa" className="card-img-top" style={styleImg}/>
                </a>
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
                    <a href={n.url} className="btn btn-primary">Go site</a>
                </div>
            </div>
        ); 
    }
}

const styleCard = {
    textAlign: 'justify',
    borderRadius: '25px',
    height: '500px',
    margin: '10px 2px' 
}

const styleImg = {
    height: '200px'
}
export default New; 