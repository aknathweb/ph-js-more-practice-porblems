// নিচের ভেরিয়েবল ডিক্লেয়ার এ কোন্টার মধ্যে কি কি সমস্যা আছে ।
// Var price = 33
// var name - Shabana
// var boxName = ‘Cocola;
// var 88_price = 34;
// var enum = -1;
// var _$box’78 = ‘Monika’;
// var home-address = “kochu khet”;

/*
The general rules for constructing names for variables (unique identifiers) are:

1. Variable names can only consist of alpha-numeric characters (the letters a to z and the numbers 0 to 9),      underscores (_) or a dollar sign $.
2. Variable names cannot start with a number.
3. Variable names must start with a letter, dollar sign ($) or an underscore (_).
4. Variable names cannot contain spaces.
5. Names are case sensitive (y and Y are different variables).
6. Variable names cannot contain certain reserved (keywords), such as Javascript, true, this and many more.
*/


// Var price = 33 //wrong 
var price = 33; //correction 
// var name = Shabana //wrong -> string write in cottation
var name = 'Shabana'; //correction 
// var boxName = ‘Cocola; //wrong
var boxName = 'Cocola';   //corrention
// var 88_price = 34;//wrong
var _price = 34 //correction
// var enum = -1;//wrong
var _enum = -1;//corrention
// var _$box’78 = ‘Monika’;//wrong
var _$box78 = 'Monika';//corrention
// var home-address = “kochu khet”;//wrong
var home_address = "kochu khet";//corrention