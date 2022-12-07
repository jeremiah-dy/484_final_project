function changeClass(element) {
  console.log("execute changeClass.js");

  // Get HTML element IDs (need these to access or modify the elements)
  LPMcontainer = document.getElementById('LPMcontainer');
  shipImage = document.getElementById('shipImage');
  currentClass = document.getElementById('currentClass');

  // Determine passenger class
  if (element.id == "firstClassButton") {
    console.log("Passenger is first-class");
    LPMcontainer.dataset.firstclass = "true";
    LPMcontainer.dataset.secondclass = "false";
    currentClass.textContent = "Passenger Class: First Class";
    shipImage.src = "first-class.jpeg"
  } else if (element.id == "secondClassButton") {
    console.log("Passenger is second-class");
    LPMcontainer.dataset.firstclass = "false";
    LPMcontainer.dataset.secondclass = "true";
    currentClass.textContent = "Passenger Class: Second Class";
    shipImage.src = "second-class.jpeg"
  } else {
    console.log("Passenger is third-class");
    LPMcontainer.dataset.firstclass = "false";
    LPMcontainer.dataset.secondclass = "false";
    currentClass.textContent = "Passenger Class: Third Class";
    shipImage.src = "third-class.jpeg"

  }

  console.log(LPMcontainer.dataset.firstclass);
  console.log(LPMcontainer.dataset.secondclass);
  console.log("finished changeClass.js");
  console.log("##########");
};
