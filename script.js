document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("userForm");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // prevent default form submission

    const firstName = form.elements["First Name"].value.trim();
    const lastName = form.elements["Last Name"].value.trim();
    const phoneNumber = form.elements["Phone Number"].value.trim();
    const emailId = form.elements["Email ID"].value.trim();

    const alertMessage = `First Name: ${firstName} Last Name: ${lastName} Phone Number: ${phoneNumber} Email ID: ${emailId}`;

    alert(alertMessage);
  });
});
