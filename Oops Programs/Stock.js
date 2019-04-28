/***************************************************************************************************************
 *   @Purpose  : To create a class of stock and create a stock report
 *   @file     : stock.js
 *   @author   : Tanuja Nadaf
 *   @since    : 24/04/2019
 ****************************************************************************************************************/

class Stock
{
    stock(stockObject)
    {
    var index;
    for(index in stockObject.stock)
    {
        console.log("The value of stock of"+" "+stockObject.stock[index].stockName+" "+"is"+" "+stockObject.stock[index].numberOfShares*stockObject.stock[index].sharePrice);
    }
    
    var newStock=0;
for(index in stockObject.stock)
{
newStock=parseInt(newStock)+parseInt(stockObject.stock[index].numberOfShares*stockObject.stock[index].sharePrice);
}
console.log("Total value of stock is"+ " "+newStock);
}
}
module.exports=
{
  Stock
}