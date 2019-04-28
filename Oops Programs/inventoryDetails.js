var fs=require('fs');
var inventoryDetails=fs.readFileSync("inventoryDetails.json");
console.log(inventoryDetails);
var inventoryObject=JSON.parse(inventoryDetails);
console.log(inventoryObject);
var myJSON=JSON.stringify(inventoryObject);
console.log(myJSON);
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
