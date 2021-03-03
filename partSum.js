

//read input file, into array, make it array of ints
// ATTENTION, change filepath to where your expense report is
var fs = require("fs");
var text = fs.readFileSync("./expense_report.txt", "utf-8");
var expense_report = text.split("\n").map(Number)


// test report with known answers
/*let test_report = [1721, 979, 366, 299, 675, 1456];
expense_report = test_report; */


// brute force, step through each index combination to find the sum 2020, of teo numbers
for ( var i = 0; i < expense_report.length ; i++) {
    for ( var j = i + 1; j < expense_report.length ; j++) {

        if( expense_report[i] + expense_report[j] == 2020 && 0 != expense_report[i]*expense_report[j])
            console.log("The two number sum is " + expense_report[i] + 
                                         " and " + expense_report[j] + 
                        " and their product is " + expense_report[i]*expense_report[j]);
    }
}


// brute force, step through each index combination to find the sum 2020, or three numbers
for ( var i = 0; i < expense_report.length ; i++) {
    for ( var j = i + 1; j < expense_report.length ; j++) {
        for ( var k = j + 1; k < expense_report.length ; k++) {
           
            //
            if( 2020 == expense_report[i] + expense_report[j]  + expense_report[k] && 0 != expense_report[i]*expense_report[j]*expense_report[k])
                    console.log("The three number sum is " + expense_report[i] + 
                                                   " and " + expense_report[j] + 
                                                   " and " + expense_report[k] +
                                  " and their product is " + expense_report[i]*expense_report[j]*expense_report[k]);
        }  
    }
}
