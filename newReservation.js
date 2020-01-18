// Question: What does this code do?
$("#submit").on("click", function(event) {
  event.preventDefault();
  var newReservation = {
    name: $("#name")
      .val()
      .trim(),
    phone: $("#number")
      .val()
      .trim(),
    email: $("#email")
      .val()
      .trim(),
    ID: $("#id")
      .val()
      .trim()
  };

  // Question: What does this code do??
  $.post("/api/reserve", newReservation).then(function(data) {
    console.log("reservations.html", data);
    alert("Adding character...");
  });
});
