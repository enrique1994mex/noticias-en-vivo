import React, {Component} from 'react';

class NewsForm extends Component {
    render() {
      return (
        <div className="card card-body">
            <form onSubmit={this.props.getNoticias}>
                <div className="form-group">
                    <input type="text" name="country" placeholder="Your country name" 
                    className="form-control" autoFocus/>
                </div>
                <button className="btn btn-success btn-block">
                    Obtener noticias
                </button>
            </form>
        </div>
      )
    }
  }
  
export default NewsForm; 