function displayNumber() {
    var inputNumber = document.getElementById("numberInput").value;
    var number = parseFloat(inputNumber);
    document.getElementById("output").textContent = "Tuổi của bạn là: " + number;
  }
  
  var submitButton = document.getElementById("submitButton");
  submitButton.addEventListener("click", displayNumber);
  