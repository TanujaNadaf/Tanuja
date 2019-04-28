/********************************************************************************************************************
 *  @Purpose   : A main program to access and manage the inventory
 *  @file      : inventoryManager.js
 *  @author    : Tanuja Nadaf
 *  @since     : 25/04/2019
 ********************************************************************************************************************/
var fs=require('fs');
var inventoryDetails=fs.readFileSync("stockDetails.json","UTF-8");
/* parsing into the json object */
var inventoryObject=JSON.parse(inventoryDetails);
var access=require('./Inventory');
/* accessing the inventory class by creating the object of the class*/
var inventory=new access.Inventory();
/* a call that manages the inventory*/
inventory.inventoryManage(inventoryObject);
