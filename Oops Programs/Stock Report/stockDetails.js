var fs=require('fs');
var listOfStocks=fs.readFileSync("stockDetails.json");
//console.log(listOfStocks);
var stockObject=JSON.parse(listOfStocks);
var access=require('./Stock');
var stockReport=new access.Stock();
stockReport.stock(stockObject);






