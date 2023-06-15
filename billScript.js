"use strict"
function calculateBill() {
    // Get input values
    let name = document.getElementById("name").value;
    let phoneNumber = document.getElementById("phoneNumber").value;
    let numberOfItems = parseInt(document.getElementById("numberOfItems").value);

    // Validate input fields
    if (name === "" || phoneNumber === "" || isNaN(numberOfItems) || numberOfItems <= 0 || phoneNumber.length !== 10) {
      alert(`${name} please check given data and fill all fields`);
      return;
    }

    // Calculate total bill
    var totalBill = numberOfItems * 150;

    // Display the calculated bill
    document.getElementById("totalBill").textContent = "Total Bill: " + totalBill;

    // Show confirmation and clear input fields
    alert("Your ticket is booked now.");
    document.getElementById("name").value = "";
    document.getElementById("phoneNumber").value = "";
    document.getElementById("numberOfItems").value = "";
    document.getElementById("totalBill").textContent = "";
  }

  function updateBill() {
    // Get input value
    var numberOfItems = parseInt(document.getElementById("numberOfItems").value);

    // Check for negative numbers
    if (numberOfItems < 0) {
      alert("Number of items cannot be negative.");
      document.getElementById("numberOfItems").value = "";
      return;
    }

    // Calculate total bill
    var totalBill = numberOfItems * 150;

    // Display the calculated bill
    document.getElementById("totalBill").textContent = "Total Bill: " + totalBill;
  }