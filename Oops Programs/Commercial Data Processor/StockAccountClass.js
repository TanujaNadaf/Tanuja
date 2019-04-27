class StockAccountClass
{
    constructor(companyJSONObject,customerJSONObject)
    {
        var company=this.companyJSONObject;
        var customer=this.customerJSONObject;
    }
createCustomerAccount(companyJSONObject,customerJSONObject)
{
    var customer1=customerJSONObject.customer;
    var name=readlineSync.question("Enter the Customer Name");
    for(index in customer1)
    {
        if(customer1[index].customerName==name)
        {
            console.log("The customer already exists");
            return;
            
        }
    }
var id=readlineSync.question("Enter the id of the customer");
var share=readlineSync.question("Enter the number of shares ");
var amount=readlinesync.question("Enter the amount of the share");
var price=readlineSync.question("Enter the price of the share");
customer1.push({
    customerName:name,
    customerID:id,
    numberOfShare:share,
    amount:amount,
    price:price
})
fileStream.writeFilesync('customer.json',JSON.stringify(customerJSONObject));
console.log("Account added successfully");
return;
}
buyShare(companyJSONObject,customerJSONObject)
{
    var company1=companyJSONObject.company;
    var customer2=companyJSONObject.customer;
}















}