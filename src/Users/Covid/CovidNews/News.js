import React, { Component } from 'react';
import axios from 'axios';
import Display from './Display';


class News extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            value: this.props.default,
        }
        this.apiUrl = 'https://newsapi.org/v2/sources?country=in&q=covid&language=en&apiKey=81a2fcca140e4508980ea86295adb3cb'
    }
    
 
    componentDidMount() {
        axios.get(this.apiUrl)
            .then((response) => {
                let sourcesData = response.data;
                this.setState({ data: sourcesData.sources });
            })
        console.log(this.state.data);
    }

  
    render() {
       
        return (
            <div>
              <div className="row text-center">
              <div className="col-lg-12">
                
                </div>
              </div>
              <br />
              <div className="row">
                    <br />
                    <Display default={this.state.value} />
                </div>
            </div>
        );
    }
}

export default News;