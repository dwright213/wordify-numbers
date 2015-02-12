var lowNums = {1: "one", 2: "two", 3: "three", 4: "four", 5: "five", 6: "six", 7: "seven", 8: "eight", 9: "nine", 10: "ten", 11: "eleven", 12: "twelve", 13: "thirteen", 14: "fourteen", 15: "fifteen", 16: "sixteen", 17: "seventeen", 18: "eighteen", 19: "nineteen" };
var tens = {2: "twenty", 3: "thirty", 4: "forty", 5: "fifty", 6: "sixty", 7: "seventy", 8: "eighty", 9: "ninety"};

var wordify = function(num) {

  var numAry = num.toString().split("");

  if (num < 20) {
    return lowNums[num];

  } else if (num < 100) {
    return tens[numAry[0]] + "-" + lowNums[numAry[1]];

  } else {
    if (numAry[1] === "0" || numAry[1] === "1") { //last 2 digits under 20
      var firstDigit = parseInt(numAry.splice(0,1));
      var lastTwoDigits = parseInt(numAry.join(""));
      return lowNums[firstDigit] + " hundred " + lowNums[lastTwoDigits];

    } else { //last 2 digits 20 or over
      return lowNums[numAry[0]] + " hundred " + tens[numAry[1]] + "-" + lowNums[numAry[2]];
    }

  }

};

var numToWords = function(num) {
  var numAry = num.toString().split("");
  var len = numAry.length;

  if (len <= 3) {
    return wordify(num);

  } else if (len === 4 || len === 5 || len === 6) {
    var thousandsPart = parseInt(numAry.splice(0, len-3).join(""));
    var hundredsPart = parseInt(numAry.join(""));
    return wordify(thousandsPart) + " thousand " + wordify(hundredsPart);

  } else if (len === 7 || len === 8 || len === 9 ) {
    var millionsPart = parseInt(numAry.splice(0, len-6).join(""));
    var thousandsPart = parseInt(numAry.splice(0, len-6).join(""));
    var hundredsPart = parseInt(numAry.join(""));
    return wordify(millionsPart) + " million " + wordify(thousandsPart) + " thousand " + wordify(hundredsPart);

  } else if (len === 10 || len === 11 || len === 12 ) {
    var billionsPart = parseInt(numAry.splice(0, len-9).join(""));
    var millionsPart = parseInt(numAry.splice(0, len-6).join(""));
    var thousandsPart = parseInt(numAry.splice(0, len-3).join(""));
    var hundredsPart = parseInt(numAry.join(""));
    debugger;
    return wordify(billionsPart) + " billion " + wordify(millionsPart) + " million " + wordify(thousandsPart) + " thousand " + wordify(hundredsPart);

  } else if (len === 13 || len === 14 || len === 15) {

  } else {

  }

};
