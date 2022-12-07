function calculateSurvival() {
  // Hard-code LPM coefficients from previously trained model (not the best way to do it, but we're strapped for time)
  console.log("execute calculateSurvival.js");

  // Get HTML element IDs (need these to access or modify the elements)
  LPMcontainer = document.getElementById('LPMcontainer');
  header = document.getElementById('survived!');
  message = document.getElementById('survivalMessage');


  // Get passenger info
  let sex = ((LPMcontainer.dataset.sex == "female") ? 1 : 0);
  let age = parseInt(LPMcontainer.dataset.age);
  let firstClass = ((LPMcontainer.dataset.firstclass == "true") ? 1 : 0);
  let secondClass = ((LPMcontainer.dataset.secondclass == "true") ? 1 : 0);

  // Check for valid input
  if (LPMcontainer.dataset.sex == "NA") {
    header.textContent = "Hold up!";
    message.textContent = "Please select your sex before using the LPM!";
    return;
  } else if (age == 1000) {
    header.textContent = "Hold up!";
    message.textContent = "Please select an age before using the LPM!";
    return;
  } else if ((firstClass == 1) && (secondClass == 1)) {
    header.textContent = "Hold up!";
    message.textContent = "Please select a passenger class before using the LPM!";
    return;
  }

  // Calculate survivability
  let survival = 0.256 + (0.486 * sex) + (-0.006 * age) +
    (0.379 * firstClass) + (0.167 * secondClass);

  // Because we're using a LPM, there are bound to be predictions outside of [0,1]
  // Account for these predictions
  survival = ((survival < 0) ? 0 : survival);
  survival = ((survival > 1) ? 1 : survival);

  // Classification threshold 0.4163379 (mean predicted probability)
  if (survival >= 0.4163379) {
    header.textContent = "You survived! :)"
    message.textContent = "Your probability of survival was " + (survival*100).toFixed(2) + "%. " +
      "Looks like Lady Luck was smiling upon you as you embarked on your journey. At the very least, you'll have a story for the ages! We recommend you look into some therapy sessions to treat any mental trauma this experience might have caused you. Have a wonderful rest of your trip, and we hope you sail with us again soon!"
  } else {
    header.textContent = "Oh no! You died! :(";
    message.textContent = "Your probability of survival was " + (survival*100).toFixed(2) + "%. " +
      "It appears the odds were not in your favor. Maybe if you had been more ruthless, or been more pitiable, your fellow passengers might have let you on one of the earlier lifeboats. Unfortunately, you'll never know, as the icy waters of the Atlantic ocean has claimed your body for the fishes. Sleep well! P.S. You know, the lower your passenger class the lower your cabin on deck. That's a lot of stairs! Toodaloo!"
  }
};
