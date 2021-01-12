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
                    Web: {n.url}
                </p>
            </div> 
        )
    }
}

export default New; 