function getNameColor() {
  // get IDs
  var name = document.getElementById("name");
  var color = document.getElementById("color");
  var errorMsg = document.getElementById("errorMsg");

  var greetingBox = document.getElementById("greetingContainer");
  var greeting = document.getElementById("greetingText");

  var greetColor = color.value;

  // Check if the name field is empty
  if (name.value.length === 0) {
    errorMsg.innerText = "Please Enter Your Name.";
    errorMsg.style.visibility = "visible";
    errorMsg.classList.replace("text-success", "text-danger");

    name.classList.add("is-invalid");
  } else {
    if (greetingBox.classList.contains("fadeIn")) {
      greetingBox.classList.add("fadeOut");

      // Wait for 0.5 seconds and then fade in
      setTimeout(function () {
        greeting.className = ""; // remove all class names from greeting
        if (greetColor == 0) {
          //checks the color and adds color to the greeting
          greeting.classList.add("text-danger");
          // add name to the greeting
          greeting.innerText = "Hello, " + name.value + "!";
        } else if (greetColor == 1) {
          greeting.classList.add("text-success");
          // add name to the greeting
          greeting.innerText = "Hello, " + name.value + "!";
        } else if (greetColor == 2) {
          greeting.classList.add("text-primary");
          // add name to the greeting
          greeting.innerText = "Hello, " + name.value + "!";
        }
        greetingBox.classList.remove("fadeOut");
      }, 500);
    } else {
      if (greetColor == 0) {
        //checks the color and adds color to the greeting
        greeting.classList.add("text-danger");
        // add name to the greeting
        greeting.innerText = "Hello, " + name.value + "!";
      } else if (greetColor == 1) {
        greeting.classList.add("text-success");
        // add name to the greeting
        greeting.innerText = "Hello, " + name.value + "!";
      } else if (greetColor == 2) {
        greeting.classList.add("text-primary");
        // add name to the greeting
        greeting.innerText = "Hello, " + name.value + "!";
      }
      // show greeting
      greetingBox.classList.add("fadeIn");
    }
  }
}

function returnToNormal() {
  // Returns the input fields and error msg to normal if error had been triggered
  var errorMsg = document.getElementById("errorMsg");
  var name = document.getElementById("name");

  errorMsg.innerText = "Looks good.";
  errorMsg.style.visibility = "hidden";
  errorMsg.classList.replace("text-danger", "text-success");

  name.classList.remove("is-invalid");
}
