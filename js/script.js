function getNameColor() {
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
      setTimeout(() => {
        greeting.className = ""; // remove all class names from greeting
        colorSelector(greetColor, greeting, name);
        greetingBox.classList.remove("fadeOut");
      }, 500);
    } else {
      colorSelector(greetColor, greeting, name);
      greetingBox.classList.add("fadeIn");
    }
  }
}

function colorSelector(greetColor, greeting, name) {
  // Set the greeting text
  greeting.innerText = "Hello, " + name.value + "!";
  // Set the color based on the greetColor value
  switch (parseInt(greetColor)) { // Ensure greetColor is parsed to an integer
    case 0:
      greeting.classList.add("text-danger");
      break;
    case 1:
      greeting.classList.add("text-success");
      break;
    case 2:
      greeting.classList.add("text-primary");
      break;
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
