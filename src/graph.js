import React, { Component } from 'react';
import {Line} from 'react-chartjs-2';
import axios from 'axios';

export default class LineDemo extends Component
{
   constructor(props) {
      super(props);
      this.state = {
        Data: {}
      }
    }
       
      componentDidMount() {
        axios.get(`http://localhost:8080/scrape`)
          .then(res => {
            const football = res.data.currency;
            let playername = [];
            let playerscore = [];
            football.forEach(element => {
              playername.push(element.name);
              playerscore.push(element.value);
            });
            this.setState({ 
              Data: {
                labels: playername,
                datasets:[
                   {
                      labels:'New Data',
                      data: playerscore ,
                      
                      backgroundColor:[
                       'rgba(255,105,145,0.6)',
                       'rgba(155,100,210,0.6)',
                       'rgba(90,178,255,0.6)',
                       'rgba(240,134,67,0.6)',
                       'rgba(120,120,120,0.6)',
                       'rgba(250,55,197,0.6)'
                    ]
                   }
                ]
             }
             });
          })
      }
 render()
   {
      return(
        <div>
          <Line
            data = {this.state.Data}
            // options = {{ maintainAspectRatio: false }}
             />
        </div>
      )
   }
}