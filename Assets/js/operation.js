var screen = document.getElementById("screen");
var num1 = document.getElementById("number1");
var num2 = document.getElementById("number2");
var num3 = document.getElementById("number3");
var num4 = document.getElementById("number4");
var num5 = document.getElementById("number5");
var num6 = document.getElementById("number6");
var num7 = document.getElementById("number7");
var num8 = document.getElementById("number8");
var num9 = document.getElementById("number9");
var num0 = document.getElementById("number0");
var plus = document.getElementById("plus");
var sub = document.getElementById("sub");
var pro = document.getElementById("pro");
var div = document.getElementById("div");
var clear = document.getElementById("clear");

function add() {}
function getNum1() {
  alert();
}
clear.addEventListener("click", function () {
  screen.value=" ";
 

  
});
equal.addEventListener("click", function () {
  let arr = screen.value;
  let result = eval(arr);
  screen.value = result;

  
});

plus.addEventListener("click", function () {
  var value = plus.value;
 
  screen.value = screen.value + value;
  plus.disabled = true
  plus.disabled = true


});
sub.addEventListener("click", function () {
  var value = sub.value;
  screen.value = screen.value + value;
 

});
pro.addEventListener("click", function () {
  var value = pro.value;
  screen.value = screen.value + value;
  
});
div.addEventListener("click", function () {
  var value = div.value;
  screen.value = screen.value + value;

});
num1.addEventListener("click", function () {
  var value = num1.value;

  screen.value = screen.value + value;
});
num2.addEventListener("click", function () {
  var value = num2.value;

  screen.value = screen.value + value;
});
num3.addEventListener("click", function () {
  var value = num3.value;

  screen.value = screen.value + value;
});
num4.addEventListener("click", function () {
  var value = num4.value;

  screen.value = screen.value + value;
});
num5.addEventListener("click", function () {
  var value = num5.value;

  screen.value = screen.value + value;
});
num6.addEventListener("click", function () {
  var value = num6.value;

  screen.value = screen.value + value;
});
num7.addEventListener("click", function () {
  var value = num7.value;

  screen.value = screen.value + value;
});
num8.addEventListener("click", function () {
  var value = num8.value;

  screen.value = screen.value + value;
});
num9.addEventListener("click", function () {
  var value = num9.value;

  screen.value = screen.value + value;
});
num0.addEventListener("click", function () {
  var value = num0.value;

  screen.value = screen.value + value;
});
