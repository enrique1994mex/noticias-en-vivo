import React, {Component} from 'react';

class NewsForm extends Component {
    render() {
      return (
        <div className="card card-body mb-3 text-center">
            <form onSubmit={this.props.getNoticias}>
                <div className="form-group mb-3">
                    <input type="text" name="country" placeholder="Your country name" 
                    className="form-control" autoFocus/>
                </div>
                <button className="btn btn-success text-center">
                    Get news
                </button>
            </form>
        </div>
      )
    }
  }
  
export default NewsForm; 