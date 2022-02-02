function task1(){

    //Draw random number from 1-10
    var randomNum1 = Math.ceil(Math.random()*10);
    var randomNum2 = Math.ceil(Math.random()*10);

    //Display the numbers
    if(randomNum1 < randomNum2){
        console.log(randomNum1 + " is less than " + randomNum2);
    }

    else if (randomNum1 > randomNum2){
        console.log(randomNum1 + " is greater than " + randomNum2);
    }
    
    else{
        console.log(randomNum1 + " is equal to " + randomNum2);
    }
}

//Run function e.g.
//task1();

function task2(min, max){

    //Display even numbers
    for (var i = min; i <= max; i++){

        if (i % 2 == 0){
            myArray.push(i);
        }

    }

    //Display odd numbers
    for(var i = min; i <= max; i++){

        if (i % 2 != 0){
            myArray.push(i);
        }

    }

}

//Run function e.g.
//task2(3,7);

function task3(min, max){
    var myArray = [];

    //Display even numbers
    for (var i = min; i <= max; i++){

        if (i % 2 == 0){
            myArray.push(i);
        }

    }

    //Display odd numbers
    for(var i = max; i >= min; i--){

        if (i % 2 != 0){
            myArray.push(i);
        }

    }

    console.log(myArray);

}

//Run function e.g.
//task3(3,7);

function task4(testString) {

    //Lower case all strings and remove any
    //character that doesn't belong to normal
    //English alphabet
    var re =  /[^A-Za-z]/g;
    var lowRegStr = testString.toLowerCase().replace(re, '');

    //Reverse the string
    var reverseStr = lowRegStr.split('').reverse().join('');

    //Return bool (true if string is a palindrome
    //and false string is not a palindrome)
    return reverseStr === lowRegStr;
}

//Run function e.g.
//console.log(task4("REDder"));