let a = 1, b = 1;
let prefix = ++a;
let postfix = b++; 
let c = 2;
let assignment = 1 + (c *= 2);
let d = prompt("First number?", 1);
let e = prompt("Second number?", 2);
let typeConversionOne = "" + 1 + 0;
let tiypeConversionTwo = "" - 1 + 0;
let tiypeConversionThree = true + false;
let tiypeConversionFour = 6 / "3";
let tiypeConversionFive = "2" * "3";
let tiypeConversionSix = 4 + 5 + "px";
let tiypeConversionSeven = "$" + 4 + 5;
let tiypeConversionEight = "4" - 2;
let tiypeConversionNine = "4px" - 2;
let tiypeConversionTen = "  -9  " + 5;
let tiypeConversionEleven = "  -9  " - 5;
let tiypeConversionTwelve = null + 1;
let tiypeConversionThirteen = undefined + 1;
let tiypeConversionFourteen = " \t \n" - 2;
let comparisonOne= 5 > 4;
let comparisonTwo= "apple" > "pineapple";
let comparisonThree = "2" > "12";
let comparisonFour = undefined == null;
let comparisonFive = undefined === null;
let comparisonSix = null == "\n0\n";
let comparisonSeven = null === +"\n0\n";

alert(prefix); // 2
alert(postfix); // 1
alert(assignment); // 5
alert(+d + +e); // 3
alert(typeConversionOne); // "10"
alert(tiypeConversionTwo); // -1
alert(tiypeConversionThree); // 1
alert(tiypeConversionFour); // 2
alert(tiypeConversionFive); // 6
alert(tiypeConversionSix); // "9px"
alert(tiypeConversionSeven); // "$45"
alert(tiypeConversionEight); // 2
alert(tiypeConversionNine); // NaN
alert(tiypeConversionTen); // " -9 5 "
alert(tiypeConversionEleven); // -14
alert(tiypeConversionTwelve); // 1
alert(tiypeConversionThirteen); // NaN
alert(tiypeConversionFour); // -2
alert(comparisonOne); // true
alert(comparisonTwo); // false
alert(comparisonThree); // true
alert(comparisonFour); // true
alert(comparisonFive); // false
alert(comparisonSix); // false
alert(comparisonSeven); // flase