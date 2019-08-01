
const request = require('request');
var moment = require('moment');
var express = require('express'); 
var mongoose = require("mongoose");
const cheerio = require('cheerio'); 
const prompt = require('prompt');
const app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
var Schema = mongoose.Schema;
app.use(bodyParser.urlencoded({ extended: true }));
const server = require('http').createServer(app);
const io = require('socket.io')(server);
var path = require("path");
const cors = require("cors");
app.use(cors());
app.get("/testing", function(req, res) {
    var url = [
        "https://ssltsw.forexprostools.com/index.php?timeframe=86400&referer=https://ssltsw.forexprostools.com/index.php%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20&selectedTabId=QBS_1",
        "https://ssltsw.forexprostools.com/index.php?timeframe=300&referer=https://ssltsw.forexprostools.com/index.php%20%20%20%20%20%20%20%20%20%20%20%20%20&selectedTabId=QBS_1",
        "https://ssltsw.forexprostools.com/index.php?timeframe=week&referer=https://ssltsw.forexprostools.com/index.php%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20&selectedTabId=QBS_1",
        "https://ssltsw.forexprostools.com/index.php?timeframe=1800&referer=https://ssltsw.forexprostools.com/index.php%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20&selectedTabId=QBS_1",
        "https://ssltsw.forexprostools.com/index.php?timeframe=300&referer=https://ssltsw.forexprostools.com/index.php%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20&selectedTabId=QBS_1"
    ]; 
    var items = [];
    var i;
    for(i=0; i<url.length; i++){
        request(url[i], function  heallo(err, respone, body){
            if(err) 
            { 
                console.log(err); 
            } 
            else
            { 
                const arr = [];
                // io.on('connection', function (socket) { 
               
                let $ = cheerio.load(body);
                    const topcurrency=$("#mainSummaryDiv_1").find('p,span').eq(2).text();
                    const status=$("#mainSummaryDiv_1").find('span').eq(1).text();
                    // arr.push(status)
                    // arr.push(topcurrency)
                    // console.log(arr);
                    var object = {
                       satus:status,stname:'EUR/USD',value:topcurrency
                    }

                    
                        
                   
                    
                  items.push(object)
                
              console.log(arr);
            //  items.push(Array,arr);
            // //  console.log(items)
            // res.setHeader('Content-Type', 'text/html');
                    // console.log(object);
                    // arr.push(object[key])
                    // console.log(object)
                    // res.end("Hello Nepal")
                    res.send( "Hello From the  Noob" );
                   
                  
                    //   res.send(arr)
                    //   res.status(404).end();
          
                  
              return items;
          
            }
            // items.push(object)
            // console.log(items)
            // res.write(object);
        });
        
    }
    // res.end();
    // res.send(items);
    console.log(items)
    // res.json(object);
    // res.send(items);
    
});
server.listen(9000);
console.log('Magic happens on port 8080');
module.exports=app;