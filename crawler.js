
// import App from './src/App';
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
mongoose.connect("mongodb://localhost:27017/Forexdata");
const server = require('http').createServer(app);
const io = require('socket.io')(server);
var path = require("path");
const cors = require("cors");
app.use(cors());


var nameSchema = new mongoose.Schema({
    currency: [{ 
        sell: { 
            type: String },
        name: {
            type:String },
        value: { 
            type: String },
        buy: {
            type: String
        }
      }]
}, {
    timestamps: true
});
var User = mongoose.model("Details", nameSchema);
// object.getData().then((result) => { 
//     latestData = result;
// });
// app.use(express.static(path.join(__dirname, "public")));
app.get('/scrape', function(req, res){
 
    // io.on('connection', function (socket) { 
    // res.send(
    //      'Hello World from the server'
    // );
    const URL = "https://ssltsw.forexprostools.com/"; 
    var object;
request(URL, async function (err,data, body) { 
  
    if(err) 
    { 
        console.log(err); 
    } 
    else
    { 
        const arr = [];
        // io.on('connection', function (socket) { 
       
        let $ = cheerio.load(body);
         
        //Currency value
        const graphdata=$('#QBS_1_inner').find('td').eq(3).text();
        // const select=$('#timeframe').find('option').each((i,op) => {
        //     console.log($(op).attr('value'));
        //  })
              const CurrentTime = $("#updateTime").text();
            const data=$('#mainSummaryDiv_10').find('p,span').eq(2).text();
            // const topcurrency=$("#mainSummaryDiv_1").find('p,span').eq(2).text();
            const topcurrency=$("#mainSummaryDiv_1").find('p,span').eq(2).text();
            const letme=$('#mainSummaryDiv_5').find('p,span').eq(2).text()
            const hlfusd=$('#mainSummaryDiv_7').find('p,span').eq(2).text()
            const name = $('#mainSummaryDiv_3').find('p,span').eq(2).text()
            const thing = $("#mainSummaryDiv_2").find('p,span').eq(2).text()
            const eurojapan = $("#mainSummaryDiv_9").find('p,span').eq(2).text()
           
          

           ///Buy value of all data .subtract(1, 'hours')
          const time=moment().format('MMMM Do YYYY, h:mm:ss a')
        
            const eurbuy=$("#mainSummaryDiv_1").find('span').eq(2).text().replace(/\D/g, '');
            const databuy=$('#mainSummaryDiv_10').find('span').eq(2).text().replace(/\D/g, '');
            const letmebuy=$('#mainSummaryDiv_5').find('span').eq(2).text().replace(/\D/g, '');
            const namebuy = $('#mainSummaryDiv_3').find('span').eq(2).text().replace(/\D/g, '');
            const hlfusdbuy=$('#mainSummaryDiv_7').find('span').eq(2).text().replace(/\D/g, '');
            const thingbuy = $("#mainSummaryDiv_2").find('span').eq(2).text().replace(/\D/g, '')
            const eurojapanbuy = $("#mainSummaryDiv_9").find('span').eq(2).text().replace(/\D/g, '');
            

            //Sell Value of the data 
            const eursell=$("#mainSummaryDiv_1").find('span').eq(3).text().replace(/\D/g, '');
            const datasell=$('#mainSummaryDiv_10').find('span').eq(3).text().replace(/\D/g, '');
            const letmesell=$('#mainSummaryDiv_5').find('span').eq(3).text().replace(/\D/g, '');
            const namesell = $('#mainSummaryDiv_3').find('span').eq(3).text().replace(/\D/g, '');
            const hlfusdsell=$('#mainSummaryDiv_7').find('span').eq(3).text().replace(/\D/g, '');
            const thingsell = $("#mainSummaryDiv_2").find('span').eq(3).text().replace(/\D/g, '')
            const eurojapansell = $("#mainSummaryDiv_9").find('span').eq(3).text().replace(/\D/g, '');
            //Object 
             object ={"currency": [ 
                {buy:eurbuy,sell:datasell,name:'EUR/USD',value:topcurrency},
                {buy:databuy,sell:eursell,name:'CHF/EUR',value: data},
                {buy:letmebuy,sell:letmesell,name:'AUD/USD',value:letme}, 
                {buy:namebuy,sell:namesell,name:'HLF/USD',value:hlfusd}, 
                {buy:hlfusdbuy,sell:hlfusdsell,name:'USD/JPY',value:name},
                {buy:thingbuy,sell:thingsell,name:'GBP/USD',value:thing},
               {buy:eurojapanbuy,sell:eurojapansell,name:'EUR/JPY',value: eurojapan},
           
            ]
        } 
    //     socket.emit('boject', "Hello");
    //     console.log(object)

    // socket.on('my other event', function (data) {
    //     console.log(data);
    // });
            console.log(object);
            // console.log(object); 

            var myData = new User(object);
            await myData.save()      
     
            res.json(object);
    //    setInterval(function() {
    //     object.getData().then((result) => { 
    //         // Update latest results for when new client's connect
    //         latestData = result; 
         
    //         // send it to all connected clients
    //         io.emit('data', result);
             
    //         console.log('Last updated: ' + new Date());
    //     });
    // }, 300000);
      
  
    }
    
})
 
// res.send(
//     'last  line'
// );
})


// })


  server.listen(8080);
console.log('Magic happens on port 8080');
module.exports=app;





