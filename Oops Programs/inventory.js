var fs=require('fs');
var inventoryDetails=fs.readFileSync("inventory.json","UTF-8");
var inventoryObject=JSON.parse(inventoryDetails);
var access=require('./Inventory');
var inventory=new access.Inventory();
inventory.inventoryManage(inventoryObject);
