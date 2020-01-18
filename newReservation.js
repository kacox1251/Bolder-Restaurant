// Question: What does this code do?
$("#add-btn").on("click", function(event) {
  event.preventDefault();
  var newReservation = {
    name: $("#customerName")
      .val()
      .trim(),
    phone: $("#ohoneNumber")
      .val()
      .trim(),
    email: $("#customerEmail")
      .val()
      .trim(),
    ID: $("#customerID")
      .val()
      .trim()
  };

  // Question: What does this code do??
  $.post("/api/reserve", newReservation).then(function(data) {
    console.log("reservations.html", data);
    alert("Adding character...");
  });
});
