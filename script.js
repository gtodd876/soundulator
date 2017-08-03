$(document).ready(function () {
  $("#0-BTN").click(function () {
    $("#output").text('0');
    console.log("Handler for 0 btn called.");
  });
  $("#Clear-BTN").click(function () {
    $("#output").empty();
    console.log("Handler for empty btn called.");
  });
});