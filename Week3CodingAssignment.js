// 1. Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
let ages = [3, 9, 23, 64, 2, 8, 28, 93]
console.log(ages);
// a. Programmatically subtract the value of the 1st element in array from value of last element in array. Print to console. 
console.log(ages[ages.length - 1] - ages[0]);
// b. Add a new age to your array and repeat the step above to ensure it is dynamic. 
ages.push(37);
console.log(ages);
console.log(ages[ages.length - 1] - ages[0]);
// c. Use a loop to iterate through the array and calculate the average age. Print result to console. 
var total = 0
for (var i = 0; i < ages.length; i++) {
    total += ages[i];
}
var average = total/ages.length;
console.log(average);


// 2. Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob']
console.log(names);
// a. Use a loop to iterate through array and calculate the average number of letters per name. Print result to console. 
var total = 0 
for (var i = 0; i < names.length; i++) {
    total += names[i].length;
}
var average = total/names.length;
console.log(average);
// b. Use a loop to iterate through array again and concatenate all the names together, separated by spaces. Print to console. 
let result = ''; 
for (var i = 0; i < names.length; i++) {
    result = result.concat(names[i] + ' ');
}
console.log(result);


// 3. How do you access the last element of any array?
// Using zero-based indexing, you would reference the number of elements in the array, starting with 0. 
// Example: 
let animals = ['Dog', 'Cat', 'Horse', 'Fish', 'Rabbit', 'Frog']
// There are 6 elements in this array, but to access the last element, you would write it as:
console.log(animals[5]);


// 4. How do you access the first element of any array? 
let seasons = ['Spring', 'Summer', 'Fall', 'Winter']
console.log(seasons[0]);


// 5. Create a new array called nameLengths. 
// Write a loop to iterate over the previously created names array and add the length to the nameLengths array. 
let nameLengths = [];
for (var i = 0; i < names.length; i++) {
    nameLengths[i] = names[i].length;
}


// 6. Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. Print to console. 
sum = 0; 
for (var i = 0; i < nameLengths.length; i++) {
    sum = sum + nameLengths[i];
}
console.log(sum);


// 7. Write a function that takes 2 parameters, word and n, as arguments and returns the word concatenated to itself n number of times. 
function repeatWordNTimes(word, n) {
    let con = word; 
    for (var i = 1; i <= n; i++) {
        con = con.concat(word); 
    } return con; 
}
console.log(repeatWordNTimes('Hello', 2));


// 8. Write a function that takes 2 parameters, firstName and lastName, and returns a full name (separated by a space). 
function fullName(firstName, lastName) {
    return firstName.concat(' ', lastName);
}
console.log('Tyler' + ' ' + 'Jones')


// 9. Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100. 
function totalGreaterThan100 (arr) {
    sum = 0; 
    for (var i = 0; i < arr.length; i++) {
        sum = sum += arr[i];
    } if (sum > 100) {
        return true; 
    } else {
        return false; 
    }
}
console.log(totalGreaterThan100(91+25));


// 10. Write a function that takes an array of numbers and returns the average of all the elements in the array. 
function averageArr(myArray) {
    var i = 0, sum = 0, arrayLen = myArray.length;
    while (i < arrayLen) {
        sum = sum + myArray[i++];
    } 
    return sum / arrayLen; 
}
var myArray = [6,2,9,2,8];
var x = averageArr(myArray);
console.log(x); 


// 11. Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than 
// the average of the elements in the second array. 
function compareAverage (myArray1, myArray2) {
    var total1 = 0;
    for (var i = 0; i <myArray1.length; i++) {
        total1 += myArray1[i];
    }
    var total2 = 0;
    for (var i = 0; i < myArray2.length; i++) {
        total2 += myArray2[i];
    }
    var avg1 = total1 / myArray1.length;
    var avg2 = total2 / myArray2.length;
    if (avg1 > avg2) {
        return true;
    }
    else {
        return false;
    }
}
var x = compareAverage([2,8,1,3,5],[9,4,6,2]);
console.log(x);


// 12. Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot 
// outside and if moneyInPocket is greater than 10.50. 
function willBuyDrink(isHotOutside,moneyInPocket) {
    if(isHotOutside && moneyInPocket > 10.50) {
        return true;
    }
    else {
        return false;
    }
}
var d = willBuyDrink(true,9);
console.log(d);


// 13. Create a function of your own that solves a problem. In comments, write what the function does and why you created it. 


