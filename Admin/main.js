//appointment functions

function loadAppointments() {
    var appointmentsTableBody = document.getElementById("appointmentTableBody");
    appointmentsTableBody.innerHTML = "";
    var appointments = JSON.parse(localStorage.getItem("appointments")) || [];
    appointments.forEach(function(appointment, index) {
      var row = document.createElement("tr");
      row.innerHTML = `
        <td>${appointment.name}</td>
        <td>${appointment.email}</td>
        <td>${appointment.dob}</td>
        <td>${appointment.reason}</td>
        <td>${appointment.doctor}</td>
        <td>
          <button class="button approve" onclick="approveAppointment(${index}, '${appointment.name}')">Approve</button>
          <button class="button cancel" onclick="cancelAppointment(${index})">Cancel</button>
        </td>
      `;
      appointmentsTableBody.appendChild(row);
    });
  }

  function cancelAppointment(index) {
    var appointments = JSON.parse(localStorage.getItem("appointments")) || [];
    appointments.splice(index, 1);
    localStorage.setItem("appointments", JSON.stringify(appointments));
    loadAppointments();
  }

  function approveAppointment(index, name) {
    var message = `Your appointment has been approved and you will be expected to meet with your doctor soon.`;
    // Assuming you have a function to send the WhatsApp message using Twilio
    sendWhatsAppMessage(name, message);
    alert("Appointment approved!");
    // For demonstration purposes, we won't remove the appointment here
  }

  // Dummy function for sending WhatsApp message using Twilio
  function sendWhatsAppMessage(name, message) {
    console.log(`Sending WhatsApp message to ${name}: ${message}`);
    // Add your Twilio API call here to actually send the message
  }

  document.addEventListener("DOMContentLoaded", function() {
    loadAppointments();
  });