const path=require('path');
const express = require('express');
const https = require("https");
const bodyParser=require("body-parser");
const app = express();

app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended: true}));

app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html");
});

// app.post("/", function(req,res){
    
//     const units="metric";
//     const apiKey="84c60e86a8d56dda4a8b77f31bf6bd42";
//     const place=req.body.cityName;
//     const url="https://api.openweathermap.org/data/2.5/weather?appid="+apiKey+"&q="+place+"&units="+units;

//     https.get(url,function(response){

//         console.log(response.statusCode);
//         response.on("data",function(data){
//             const weatherData=JSON.parse(data);
//             var temperature=weatherData.main.temp;
//             var description = weatherData.weather[0].description;
//             var icon=weatherData.weather[0].icon;
//             var imgSrc="http://openweathermap.org/img/wn/"+icon+"@2x.png";

//             res.write("<h1>The temperature in "+place+" is "+temperature+" degree Celsius.</h1>");
//             res.write("<h2>The weather is currently "+description+"</h2>");
//             res.write("<img src="+imgSrc+">");
//             res.send();
//         });
//     });
// });

app.listen(3000, function () {
    console.log('Server is ready at 3000');
})