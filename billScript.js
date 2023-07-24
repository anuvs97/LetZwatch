"use strict"

function showErrorMessage(message) {
  alert(message);
}

function showProcessingMessage() {
  document.getElementById('processing').style.display = 'block';
}

function hideProcessingMessage() {
  document.getElementById('processing').style.display = 'none';
}

function showElement(elementId) {
  document.getElementById(elementId).style.display = 'block';
}

function hideElement(elementId) {
  document.getElementById(elementId).style.display = 'none';
}

document.getElementById('verifyButton').addEventListener('click', function() {
  var name = document.getElementById('name').value;
  var phoneNumber = document.getElementById('phoneNumber').value;

  if (name === '' || phoneNumber === '') {
    showErrorMessage('Please fill in all required fields.');
    return;
  }

  if (phoneNumber.length !== 10 || isNaN(phoneNumber)) {
    showErrorMessage('Please enter a valid 10-digit phone number.');
    return;
  }

  showElement('otpForm');
});

document.getElementById('confirmButton').addEventListener('click', function() {
  var otp = document.getElementById('otp').value;

  if (otp !== '234567') {
    showErrorMessage('Please enter a valid OTP or check Phone number.');
    return;
  }

  showProcessingMessage();

  setTimeout(function() {
    hideProcessingMessage();
    showElement('ticketForm');
    hideElement('otpForm');
  }, 3000);
});

document.getElementById('ticketCount').addEventListener('input', function() {
  var ticketCount = document.getElementById('ticketCount').value;
  var totalRate = document.getElementById('totalRate');
  var rate = 150;

  if (ticketCount <= 0 || isNaN(ticketCount)) {
    totalRate.textContent = '';
  } else {
    var calculatedRate = rate * ticketCount;
    totalRate.textContent = 'Total Rate: ' + calculatedRate+'/-';
  }
});

document.getElementById('submitPayButton').addEventListener('click', function() {
  var ticketCount = document.getElementById('ticketCount').value;

  if (ticketCount <= 0 || isNaN(ticketCount)) {
    showErrorMessage('Please enter a valid ticket count.');
    return;
  }

  showProcessingMessage();

  setTimeout(function() {
    hideProcessingMessage();
    alert('Your tickets are booked, Enjoy the show.');
    location.replace('index.html');
  }, 4000);
});



