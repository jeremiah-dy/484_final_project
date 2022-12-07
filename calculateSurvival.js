function calculateSurvival() {
  // Hard-code LPM coefficients from R program (not the best way to do it, but we're strapped for time)
  console.log("execute calculateSurvival.js");

  // Get HTML element IDs (need these to access or modify the elements)
  LPMcontainer = document.getElementById('LPMcontainer');


  // Get passenger info
  let sex = ((LPMcontainer.dataset.sex == "female") ? 1 : 0);
  let age = parseInt(LPMcontainer.dataset.age);
  let firstClass = ((LPMcontainer.dataset.firstclass == "true") ? 1 : 0);
  let secondClass = ((LPMcontainer.dataset.secondclass == "true") ? 1 : 0);

  // Calculate survivability
  let survival = 0.256 + (0.486 * sex) + (-0.006 * age) +
    (0.379 * firstClass) + (0.167 * secondClass);

  // Because we're using a LPM, there are bound to be predictions outside of [0,1]
  // Account for these predictions
  survival = ((survival < 0) ? 0 : survival);
  survival = ((survival > 1) ? 1 : survival);


};
