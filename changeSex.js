function changeSex(element) {
  console.log("execute changeSex.js");

  // Get HTML element IDs (need these to access or modify the elements)
  LPMcontainer = document.getElementById('LPMcontainer');
  currentSex = document.getElementById('currentSex');

  // Determine passenger sex
  if (element.id == "maleButton") {
    console.log("Passenger is male");
    LPMcontainer.dataset.sex = "male";
    currentSex.textContent = "Sex: Male";
  } else {
    console.log("Passenger is female");
    LPMcontainer.dataset.sex = "female";
    currentSex.textContent = "Sex: Female";

  }
  console.log(LPMcontainer.dataset.sex);
  console.log("finished changeSex.js");
  console.log("##########");
};
