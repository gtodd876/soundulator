var calc = {
  subtotal: 0,
  last_value: null,
  last_operator: "",
  total: 0
};

$(document).ready(function () {
  $("#0-BTN").click(function () {
    $("#digits").append('0');
    $("#digits").val($("#digits").val() + '0');
  });
  $("#1-BTN").click(function () {
    $("#digits").append('1');
    $("#digits").val($("#digits").val() + '1');
  });
  $("#2-BTN").click(function () {
    $("#digits").append('2');
    $("#digits").val($("#digits").val() + '2');
  });
  $("#3-BTN").click(function () {
    $("#digits").append('3');
    $("#digits").val($("#digits").val() + '3');
  });
  $("#4-BTN").click(function () {
    $("#digits").append('4');
    $("#digits").val($("#digits").val() + '4');
  });
  $("#5-BTN").click(function () {
    $("#digits").append('5');
    $("#digits").val($("#digits").val() + '5');
  });
  $("#6-BTN").click(function () {
    $("#digits").append('6');
    $("#digits").val($("#digits").val() + '6');
  });
  $("#7-BTN").click(function () {
    $("#digits").append('7');
    $("#digits").val($("#digits").val() + '7');
  });
  $("#8-BTN").click(function () {
    $("#digits").append('8');
    $("#digits").val($("#digits").val() + '8');
  });
  $("#9-BTN").click(function () {
    $("#digits").append('9');
    $("#digits").val($("#digits").val() + '9');
  });
  $("#Clear-BTN").click(function () {
    calc.subtotal = 0;
    $("#digits").val("");
  });
  $("#Plus-BTN").click(function () {
    calc.last_value = $("#digits").val();
    calc.subtotal += parseInt(calc.last_value);
    $("#digits").val("");
    calc.last_operator = "+";
  });
  $("#Minus-BTN").click(function () {
    calc.last_value = $("#digits").val();
    calc.subtotal = parseInt(calc.last_value);
    $("#digits").val("");
    calc.last_operator = "-";
  });
  $("#Multiply-BTN").click(function () {
    calc.last_value = $("#digits").val();
    calc.subtotal = parseInt(calc.last_value);
    $("#digits").val("");
    calc.last_operator = "*";
  });
  $("#Divide-BTN").click(function () {
    calc.last_value = $("#digits").val();
    calc.subtotal = parseInt(calc.last_value);
    $("#digits").val("");
    calc.last_operator = "/";
  });
  $("#Percent-BTN").click(function () {
    calc.last_value = (parseInt($("#digits").val()) / 100);
    $("#digits").val(calc.last_value);
  });
  $("#Flip-BTN").click(function () {
    calc.last_value = parseInt($("#digits").val());
    calc.last_value *= -1;
    $("#digits").val(calc.last_value);
  });
  $("#Sqrt-BTN").click(function () {
    calc.last_value = $("#digits").val();
    calc.subtotal = Math.sqrt(parseInt(calc.last_value));
    $("#digits").val(calc.subtotal);
    calc.last_operator = "*";
  });
  $("#Equals-BTN").click(function () {
    calc.last_value = parseInt($("#digits").val());
    calc.subtotal = parseInt(calc.subtotal);
    $("#digits").val(""); 
    switch (calc.last_operator) {
      case "+":
        calc.subtotal += calc.last_value;
        $("#digits").append(calc.subtotal);
        $("#digits").val($("#digits").val() + calc.subtotal);
        break;
      case "-":
        console.log(calc.subtotal, calc.last_value)
        calc.subtotal = calc.subtotal - calc.last_value;
        $("#digits").append(calc.subtotal);
        $("#digits").val($("#digits").val() + calc.subtotal);
        break;
      case "*":
        calc.subtotal *= calc.last_value;
        $("#digits").append(calc.subtotal);
        $("#digits").val($("#digits").val() + calc.subtotal);
        break;
      case "/":
        calc.subtotal /= calc.last_value;
        $("#digits").append(calc.subtotal);
        $("#digits").val($("#digits").val() + calc.subtotal);
        break;
    } 

  });
}); //document ready 