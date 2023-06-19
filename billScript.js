"use strict"
function calculateBill() {
    // Get input values
    let name = document.getElementById("name").value;
    let phoneNumber = document.getElementById("phoneNumber").value;
    let numberOfItems = parseInt(document.getElementById("numberOfItems").value);

    // Validate input fields
    if (name === "" || phoneNumber === "" || isNaN(numberOfItems) || numberOfItems <= 0) {
      alert(`${name} please check given data and fill all fields`);
      return;
    }

    // Validate phone number digits
    if (phoneNumber.length !== 10) {
      alert(`${name} Phone number should be 10 digits. Please enter a valid phone number.`);
      return;
    } 


    // Show confirmation and clear input fields
    alert("Your ticket is booked now.");
    document.getElementById("name").value = "";
    document.getElementById("phoneNumber").value = "";
    document.getElementById("numberOfItems").value = "";
    document.getElementById("totalBill").textContent = "";
  }

  function updateBill() {
    // Get input value
    let numberOfItems = parseInt(document.getElementById("numberOfItems").value);

    // Check for negative numbers
    if (numberOfItems < 0) {
      alert(`${name} Please enter valid number`);
      document.getElementById("numberOfItems").value = "";
      return;
    }

    // Calculate total bill
    let totalBill = numberOfItems * 150;

    // Display the calculated bill
    document.getElementById("totalBill").textContent = "Total Bill: " + totalBill + "/-";
  }