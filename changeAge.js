function changeAge(element) {

  // Get HTML element IDs (need these to access or modify the elements)
  LPMcontainer = document.getElementById('LPMcontainer');
  currentAge = document.getElementById('currentAge');
  slider = document.getElementById('ageSlider');
  inputBox = document.getElementById('ageInputBox');

  slider.value = element.value;
  inputBox.value = element.value;
  LPMcontainer.dataset.age = element.value;
  currentAge.textContent = "Age: " + element.value;

};
