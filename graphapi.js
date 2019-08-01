
// import App from './src/App';
const request = require('request');
var express = require('express'); 
const cheerio = require('cheerio'); 
const app = express();


const server = require('http').createServer(app);
const cors = require("cors");
app.use(cors());
var Items=[];

// object.getData().then((result) => { 
//     latestData = result;
// });
// app.use(express.static(path.join(__dirname, "public")));
app.get('/value', function(req, res){
 
const URL1="https://ssltsw.forexprostools.com/index.php?timeframe=60&referer=https://ssltsw.forexprostools.com/%20%20%20%20%20%20&selectedTabId=QBS_1"
const URL2="https://ssltsw.forexprostools.com/index.php?timeframe=1800&selectedTabId=QBS_1"
const URL3="https://ssltsw.forexprostools.com/index.php?timeframe=3600&referer=https://ssltsw.forexprostools.com/%20&selectedTabId=QBS_1"
const URL4="https://ssltsw.forexprostools.com/index.php?timeframe=86400&referer=https://ssltsw.forexprostools.com/%20%20&selectedTabId=QBS_1"
const URL5="https://ssltsw.forexprostools.com/index.php?timeframe=week&referer=https://ssltsw.forexprostools.com/%20%20%20&selectedTabId=QBS_1"
    

request(URL2, async function (err,data, body) { 
  
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
            const data=$('#mainSummaryDiv_10').find('p,span').eq(2).text();
            const letme=$('#mainSummaryDiv_5').find('p,span').eq(2).text()
            const hlfusd=$('#mainSummaryDiv_7').find('p,span').eq(2).text()
            const name = $('#mainSummaryDiv_3').find('p,span').eq(2).text()
            const thing = $("#mainSummaryDiv_2").find('p,span').eq(2).text()
            const eurojapan = $("#mainSummaryDiv_9").find('p,span').eq(2).text()
            const status=$("#mainSummaryDiv_1").find('span').eq(1).text();
          
            var first= 
                {id:1,status:status,Time:'30 Min',CHFEUR: data,AUDUSD:letme,HLFUSD:hlfusd,USDJPY:name,GBPUSD:thing,EURJPY:eurojapan,value:topcurrency}
           
            
        console.log("Hello data",first.id)
            // console.log(first);
            arr.push(first);
          
            console.log("first arr",arr)  
     Items.push(first)
            // res.write(JSON.stringify(Value));
      
  
    }
    
})
request(URL4, async function (err,data, body) { 
  
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
            const data=$('#mainSummaryDiv_10').find('p,span').eq(2).text();
            const letme=$('#mainSummaryDiv_5').find('p,span').eq(2).text()
            const hlfusd=$('#mainSummaryDiv_7').find('p,span').eq(2).text()
            const name = $('#mainSummaryDiv_3').find('p,span').eq(2).text()
            const thing = $("#mainSummaryDiv_2").find('p,span').eq(2).text()
            const eurojapan = $("#mainSummaryDiv_9").find('p,span').eq(2).text()
            const status=$("#mainSummaryDiv_1").find('span').eq(1).text();
          
            var Second= 
                {id:2,status:status,Time:'1  Day',CHFEUR: data,AUDUSD:letme,HLFUSD:hlfusd,USDJPY:name,GBPUSD:thing,EURJPY:eurojapan,value:topcurrency}
           
            
        
            // console.log(Second);
            // arr.push(Second);
            arr.push(Second)  
            console.log("Second arr",arr)
             
     Items.push(Second)
            // res.write(JSON.stringify(Value));
      
  
    }
    
})
request(URL3, async function (err,data, body) { 
  
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
            const data=$('#mainSummaryDiv_10').find('p,span').eq(2).text();
            const letme=$('#mainSummaryDiv_5').find('p,span').eq(2).text()
            const hlfusd=$('#mainSummaryDiv_7').find('p,span').eq(2).text()
            const name = $('#mainSummaryDiv_3').find('p,span').eq(2).text()
            const thing = $("#mainSummaryDiv_2").find('p,span').eq(2).text()
            const eurojapan = $("#mainSummaryDiv_9").find('p,span').eq(2).text()
            const status=$("#mainSummaryDiv_1").find('span').eq(1).text();
          
            var Third = 
                {id:3,status:status,Time:'1 hour',CHFEUR: data,AUDUSD:letme,HLFUSD:hlfusd,USDJPY:name,GBPUSD:thing,EURJPY:eurojapan,value:topcurrency}
           
                // if(Items.indexOf(Third) <=1) {
                //     Items.push(Third);
                //     // console.log("Hello",Items);
                //   }
                //   console.log("Noob")
        
            // console.log(Third);
            arr.push(Third);
            Items.push(Third)
            console.log("Third arr",arr)
               
    //  Items.unshift(Third)
            // res.write(JSON.stringify(Value));
      
  
    }
    
})
request(URL5, async function (err,data, body) { 
  
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
            const data=$('#mainSummaryDiv_10').find('p,span').eq(2).text();
            const letme=$('#mainSummaryDiv_5').find('p,span').eq(2).text()
            const hlfusd=$('#mainSummaryDiv_7').find('p,span').eq(2).text()
            const name = $('#mainSummaryDiv_3').find('p,span').eq(2).text()
            const thing = $("#mainSummaryDiv_2").find('p,span').eq(2).text()
            const eurojapan = $("#mainSummaryDiv_9").find('p,span').eq(2).text()
            const status=$("#mainSummaryDiv_1").find('span').eq(1).text();
          
            var Fourth = 
                {id:4,status:status,Time:'1 Week',CHFEUR: data,AUDUSD:letme,HLFUSD:hlfusd,USDJPY:name,GBPUSD:thing,EURJPY:eurojapan,value:topcurrency}
           
            
        
            // console.log(Fourth);
       
          arr.push(Fourth);
            console.log("Fourth arr",arr)
     Items.push(Fourth)
            // res.write(JSON.stringify(Value));
      
  
    }
    
})
request(URL1, async function (err,data, body) { 
  
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
            const data=$('#mainSummaryDiv_10').find('p,span').eq(2).text();
            const letme=$('#mainSummaryDiv_5').find('p,span').eq(2).text()
            const hlfusd=$('#mainSummaryDiv_7').find('p,span').eq(2).text()
            const name = $('#mainSummaryDiv_3').find('p,span').eq(2).text()
            const thing = $("#mainSummaryDiv_2").find('p,span').eq(2).text()
            const eurojapan = $("#mainSummaryDiv_9").find('p,span').eq(2).text()
            const status=$("#mainSummaryDiv_1").find('span').eq(1).text();
          
            var Fifth = 
                {id:5,status:status,Time:'1 Min',CHFEUR: data,AUDUSD:letme,HLFUSD:hlfusd,USDJPY:name,GBPUSD:thing,EURJPY:eurojapan,value:topcurrency}
           
            
        // if(Items.indexOf(Fifth)===-1){
        //     console.log(Items.indexOf(Fifth))
        //     // console.log(object);

        //     Items.push(Fifth)
        //     // arr.push(Fifth);
        //     console.log("sending data",Items)
        // }
        Items.push(Fifth)
        // console.log("outside value",Items)
        const result = [];
        const map = new Map();
        for (const item of Items) {
            if(!map.has(item.id)){
                map.set(item.id, true);    // set any value to Map
                result.push({
                    id: item.id,
                    value: item.value,
                    Time:item.Time,
                    CHFEUR: item.CHFEUR,    
                    AUDUSD:item.AUDUSD,
                    HLFUSD:item.HLFUSD,
                    USDJPY:item.USDJPY,
                    GBPUSD:item.GBPUSD,
                    EURJPY:item.EURJPY,
                    status:item.status,
                });
            }
        }
        console.log("Result data",result)
         
      
        
            res.json(result)
    //  console.log(Items)
            // res.write(JSON.stringify(object));
            // res.end()
      
  
    }
    
})
   
})

  server.listen(9001);
console.log('Magic happens on port 9001');
module.exports=app;





