var access = require('./utility.js');
var readlineSync = require('readline-sync');
var ch = readlineSync.question('Enter your choice');
if (ch == 1) {
    access.anagrams();
}
if (ch == 2) {
    access.primenumbers();
}
if (ch == 3) {
    access.binarySearchinteger();
}
if (ch == 4) {
    access.binarySearchString();
}
if (ch == 5) {
    access.insertionSortInteger();
}
if (ch == 6) {
    access.insertionSortString();
} if (ch == 7) {
    access.bubbleSortInteger();
}
if (ch == 8) {
    access.bubbleSortString();
}
if (ch == 9) {
    access.binarySearchFile();
}
if (ch == 10) {
    access.insertionSortStrings();
}
if (ch == 11) {
    access.bubbleSortIntegers();
}
if (ch == 12) {
    console.log("Enter the amount for which the minimum number of notes and notes to be returned");
    var amount = readlineSync.question();
    access.vendingMachine(amount, 0, 0);
}
if (ch == 13) {
    var arr = [2, 4, 3, 1, 5];
    var sortedArray = access.mergeSort(arr);
    console.log("sorted array is", sortedArray);
}
if (ch == 14) {
    access.dayOfWeek();
}
if (ch == 15) {
    var choice = readlineSync.question("Enter the choices for conversion/1 for temp-faren/2 for faren to temp");
    access.tempConversion(choice);
}
if (ch == 16) {
    var principle = readlineSync.question("Enter the principal loan amount");
    var years = readlineSync.question("Enter the number of years");
    var rate = readlineSync.question("Enter the percentage of rate of interest");
    access.monthlyPayment(principle, years, rate);
}
if (ch == 17) {
    var num = readlineSync.question("Enter the value of n for which sqrt should be calculated");
    access.sqrt(num);
}
if (ch == 18) {
    var num = readlineSync.question("Enter the number which is to be converted to binary");
    access.toBinary(num);
}
if (ch == 19) {
    function permutation() {
        var string = readlineSync.question('Enter the String ');
        access.permutation("", string, 0, string.length - 1);
    }
    permutation();
}
if (ch == 20) {
    var check = true;
    var counter = 1;
    var player = true;
    var arr = [];
    var row = readlineSync.question("enter size of array:");
    var col = readlineSync.question("enter size of array:")

    // read the elements in array 
    for (var i = 0; i < row; i++) {
        arr[i] = [];
        for (var j = 0; j < col; j++) {

            arr[i][j] = '_';
        }
    }
    access.ticTacToe(arr, check, counter, player);
}
if (ch == 21) {
    var ch1 = readlineSync.question("Enter the choice for converting decimal to binary and swapping the nibbles");
    if (ch1 == 1) {
        access.toBinaryNibbles();
    }
    if (ch1 == 2) {
        access.toDecimal();
    }

}