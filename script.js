//your JS code here. If required.
document.getElementById("userForm").addEventListener("submit", function(event) {
      event.preventDefault(); // Prevent form from submitting

      // Get values
      const firstName = document.getElementById("firstName").value;
      const lastName = document.getElementById("lastName").value;
      const phoneNumber = document.getElementById("phoneNumber").value;
      const emailId = document.getElementById("emailId").value;

      // Construct alert message
      const message = `First Name: ${firstName} Last Name: ${lastName} Phone Number: ${phoneNumber} Email ID: ${emailId}`;

      // Show alert
      alert(message);
    });