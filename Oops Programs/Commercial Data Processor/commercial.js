var readlineSync=require('readline-sync');
var fileStream=require('fs');
function dataProcess()
{
var companyJSONDetails=fileStream.readFileSync("company.json","UTF-8");
var companyJSONObject=JSON.parse(companyJSONDetails);
var customerJSONDetails=fileStream.readFileSync("customer.json","UTF-8");
var customerJSONObject=JSON.parse(customerJSONDetails);
var access=require("./StockAccountClass");
var object=new access.StockAccountClass(companyJSONObject,customerJSONObject);
var choice=readlinesync.question("Enter your choice \n 1.CreateCustomerAccount \n 2.BuyShare \n 3.SellShare \n 4.Print");
switch(choice)
{
    case 1:object.createCustomerAccount(companyJSONObject,customerJSONObject);
    break;
    case 2:object.buyShare(companyJSONObject,customerJSONObject);
    break;
    case 3:object.sellshare(companyJSONObject,customerJSONObject);
    break;
    case 4:object.print(companyJSONObject,customerJSONObject);
    break;
    default:
    Console.log('Please Enter a valid key');
}
}
dataProcess();