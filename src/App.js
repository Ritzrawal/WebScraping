import React,{Component}from 'react';
import LineDemo from './graph';
import logo from './logo.svg';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import './App.css';
import socketIOClient from "socket.io-client";
export default class App extends Component {
  constructor(props) {
    super(props);
   this.data=[ {"field1": "outer", "field2": "thought"}, 
             {"field2": "thought", "field1": "outer"} ]
    this.dataSet = [...Array(Math.ceil(5 + Math.random() * 3))].map(
      (a, i) => "Record " + (i + 1)
    );

    this.pageSize = 3;
    // this.pagesCount = Math.ceil(this.dataSet.length / this.pageSize);
    this.state = { 
      users:"",
      apiResponse:"" ,
      currentPage: 0,
      person: []};
}
handleClick(e, index) {
    
  e.preventDefault();

  this.setState({
    currentPage: index
  });
  
}
getData=()=>{
  fetch("http://localhost:9001/value") 
  .then(response =>  response.json())
  .then(resData => {
     //console.log(JSON.stringify(resData))
     //do your logic here       
     //let person = resData.results
     this.setState({ person: resData}); //this is an asynchronous function
  })
  
}

componentDidMount() {
  this.getData()
  // fetch('https://randomuser.me/api/?results=500')
  // setInterval(this.getData);
  
}


  render() {

  return(
    this.state.person.map((get,index)=>{
      return(
        <div>

<text>{get.value}</text>

        </div>
      
      )
    })
  )
  
  }
  
}
