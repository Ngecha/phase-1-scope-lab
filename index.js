// Write your solution in this file!
var customerName = 'bob';

function upperCaseCustomerName(){
    customerName = customerName.toUpperCase;
    return customerName;
}

function setBestCustomer(){
    bestCustomer = 'not bob';
    return bestCustomer;
}
setBestCustomer();

function overwriteBestCustomer(){
    bestCustomer = 'maybe bob';
    return bestCustomer;
}

const leastFavoriteCustomer = 'never bob';

function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer = "always bob";
    console.log(leastFavoriteCustomer);
    return leastFavoriteCustomer;
}
changeLeastFavoriteCustomer();
console.log(leastFavoriteCustomer);