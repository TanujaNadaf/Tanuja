/****************************************************************************************************************
 * @Purpose : A main program to access the class stock 
 * @file    : stockDetails.js
 * @author  : Tanuja Nadaf
 * @since   : 24/04/2019
 ***************************************************************************************************************/
var fs=require('fs');
var listOfStocks=fs.readFileSync("stockDetails.json");
//console.log(listOfStocks);
var stockObject=JSON.parse(listOfStocks);
var access=require('./Stock');
var stockReport=new access.Stock();
stockReport.stock(stockObject);






