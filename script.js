$(document).ready(function () {
  $("#0-BTN").click(function () {
    $("#digits").append('0');
    $("#digits").val($("#digits").val() + '0');
    console.log("Handler for 0 btn called.");
  });
  $("#1-BTN").click(function () {
    $("#digits").append('1');
    $("#digits").val($("#digits").val() + '1');
    console.log("Handler for 1 btn called.");
  });
  $("#2-BTN").click(function () {
    $("#digits").append('2');
    $("#digits").val($("#digits").val() + '2');
    console.log("Handler for 2 btn called.");
  });
  $("#3-BTN").click(function () {
    $("#digits").append('3');
    $("#digits").val($("#digits").val() + '3');
    console.log("Handler for 3 btn called.");
  });
  $("#4-BTN").click(function () {
    $("#digits").append('4');
    $("#digits").val($("#digits").val() + '4');
    console.log("Handler for 4 btn called.");
  });
  $("#5-BTN").click(function () {
    $("#digits").append('5');
    $("#digits").val($("#digits").val() + '5');
    console.log("Handler for 5 btn called.");
  });
  $("#6-BTN").click(function () {
    $("#digits").append('6');
    $("#digits").val($("#digits").val() + '6');
    console.log("Handler for 6 btn called.");
  });
  $("#7-BTN").click(function () {
    $("#digits").append('7');
    $("#digits").val($("#digits").val() + '7');
    console.log("Handler for 7 btn called.");
  });
  $("#8-BTN").click(function () {
    $("#digits").append('8');
    $("#digits").val($("#digits").val() + '8');
    console.log("Handler for 8 btn called.");
  });
  $("#9-BTN").click(function () {
    $("#digits").append('9');
    $("#digits").val($("#digits").val() + '9');
    console.log("Handler for 9 btn called.");
  });

  $("#Clear-BTN").click(function () {
    $("#digits").val("");
    console.log("Handler for empty btn called.");
  });
});