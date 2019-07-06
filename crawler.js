
// import App from './src/App';
const request = require('request');
var express = require('express'); 
const cheerio = require('cheerio'); 
const prompt = require('prompt');
const app = express();
var path = require("path");
const cors = require("cors");
app.use(cors());
app.use(express.static(path.join(__dirname, "public")));
app.use('/scrape', function(req, res){
    // res.send(
    //      'Hello World from the server'
    // );
    const URL = "https://ssltsw.forexprostools.com/"; 
    var object;
request(URL, function (err,data, body) { 
    if(err) 
    { 
        console.log(err); 
    } 
    else
    { 
        const arr = []; 
        let $ = cheerio.load(body);
           const nepal = $("#updateTime").text();
            const data=$('#mainSummaryDiv_7').find('p,span').text()
            const letme=$('#mainSummaryDiv_5').find('p,span').text()
            const name = $('#mainSummaryDiv_3').find('p,span').text()
            const thing = $("#mainSummaryDiv_2").find('p,span').text();
            const eurojapan = $("#mainSummaryDiv_9").find('p,span').text();
            const topcurrency=$("#mainSummaryDiv_1").find('p,span').text();
             object = [
                {id:1,name:'Time',alldata:nepal},
                {id:2,name:'AUD/USD',alldata:letme}, 
                {id:3,name:'USD/JPY',alldata:name},
                {id:4,name:'GBP/USD',alldata:thing},
                {id:5,name:'EUR/USD',alldata:topcurrency},
               {id:6,name:'USD/CAD',alldata: data},
               {id:6,name:'EUR/JPY',alldata: eurojapan},
            ]  
            console.log(object);
            // console.log(object); 
     
       
      
        prompt.start();

        const value=prompt.get(['Coin'], function (err, result) {
            if (err) { return onErr(err)
             }
             object.map((items,index)=>{
        
            if(items.name===result.Coin){
                console.log(items.alldata)
                res.send(items.alldata)
            }
          
             })
            
           
            function onErr(err) {
                console.log(err);
                return 1;
            }
            // res.json(value);
            // res.send(value)
        });
  
    }
    
})
 
// res.send(
//     'last  line'
// );
})
app.listen(8081);
console.log('Magic happens on port 8081');
module.exports=app;





