/*********************************************************************************************************************************
 *  @Purpose       : Takes the inventory json file as input,parse to json object,calculate the value of each inventory and display the value
 *  @author        : Tanuja Nadaf
 *  @file          : inventoryDetails.js
 *  @since         : 25/04/2019
 **********************************************************************************************************************************/
/* import the file stream module*/
 var fs=require('fs');
/* read the file to a variable using file stream object*/
 var inventoryDetails=fs.readFileSync("inventoryDetails.json");
console.log(inventoryDetails);
/* parse to a json object */
var inventoryObject=JSON.parse(inventoryDetails);
console.log(inventoryObject);
var myJSON=JSON.stringify(inventoryObject);
console.log(myJSON);
/* calculate the value of each inventory using for loop */
for(index in inventoryObject.rice)
{
    console.log("The price of"+" "+inventoryObject.rice[index].riceName +" "+ "for"+" "+inventoryObject.rice[index].weight+ "kgs is" +" "+(inventoryObject.rice[index].weight*inventoryObject.rice[index].price));
}
for(index in inventoryObject.pulses)
{
    console.log("The price of"+" "+inventoryObject.pulses[index].pulseName +" "+"for"+" "+inventoryObject.pulses[index].weight+"Kgs is"+" "+inventoryObject.pulses[index].weight*inventoryObject.pulses[index].price)
}


for(index in inventoryObject.wheat)
{
    console.log("The price of"+" "+inventoryObject.wheat[index].wheatName+" "+"for"+" "+inventoryObject.wheat[index].weight+"kgs is"+" "+inventoryObject.wheat[index].weight*inventoryObject.wheat[index].price);
}
