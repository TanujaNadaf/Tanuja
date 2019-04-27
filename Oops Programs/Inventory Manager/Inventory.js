var readlineSync=require('readline-sync');
var fileStream=require('fs');

class Inventory
{
    inventoryManage(inventoryObject)
    {
       var choice= readlineSync.question("Enter your choice:\n 1.Add \n 2.Delete \n 3.Display \n 4.Exit \n");
       if(choice==1)
       {
           this.add(inventoryObject);
        }
      if(choice==2)
      {
      this.delete(inventoryObject);
      }
      if(choice==3)
      {
          this.display(inventoryObject);
      }
      if(choice==4)
      {
          this.exit();
      }
    }
      add(inventoryObject)
      {
        var name=readlineSync.question("Enter the name of the share to be added in the Inventory File");
           var number=readlineSync.question("Enter the number of shares");
           var price=readlineSync.question("Enter the price of the share");
           inventoryObject.stock.push({
              shareName:name,
              numberOfShares:number,
              sharePrice:price
            })
            console.log("The new share is added successfully");
        fileStream.writeFileSync("stockDetails.json",JSON.stringify(inventoryObject));
        //console.log(inventoryObject);
        
        this.inventoryManage(inventoryObject);
      }
      delete(inventoryObject)
      {
          var index;
          var count=0;
          var name=readlineSync.question("Enter the stock name to be deleted");
          for(index in inventoryObject.stock)
          {
              if(inventoryObject.stock[index].shareName==name)
              {
                count=1;
                //var index=inventoryObject.stock.indexOf(inventoryObject.stock[index].shareName);
                inventoryObject.stock.splice(index,1);
                
              }
            }
              if(count==0)
            {
                console.log("stock not found");
                this.delete(inventoryObject);
            }
            
      console.log("Stock removed successfully");
      fileStream.writeFileSync("stockDetails.json",JSON.stringify(inventoryObject));
      this.inventoryManage(inventoryObject);
      
      }
    display(inventoryObject)
    {
        console.log(inventoryObject);
        this.inventoryManage(inventoryObject);
    }
    exit()
    {
        console.log("Thank You");
        return;
    }
}
module.exports=
{
    Inventory
}