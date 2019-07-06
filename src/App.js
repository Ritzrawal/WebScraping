import React,{Component}from 'react';
import logo from './logo.svg';
import './App.css';
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
}
callAPI() {
    fetch("http://localhost:8081/scrape")
        .then(res => res.text())
        .then(res => this.setState({ apiResponse: res }));
}
componentWillMount() {
    this.callAPI();
}
  render(){
    return (
    <div>
    

     <p>{this.state.apiResponse}</p>
   
  </div>
);
}

  }
  
   


