// 1. Paste the model link from Teachable Machine here (keep the trailing slash)
const URL = "https://teachablemachine.withgoogle.com/models/qscsPTFMd/";

let model, webcam, labelContainer, maxPredictions;
let isIos = false;

// Check if the user is on an iPhone or iPad to avoid video freeze bugs
if (window.navigator.userAgent.indexOf("iPhone") > -1 || window.navigator.userAgent.indexOf("iPad") > -1) {
  isIos = true;
}

// 2. Setup the AI model and webcam
async function init() {
  const modelURL = URL + "model.json";
  const metadataURL = URL + "metadata.json";

  // Load the trained model files from the Teachable Machine cloud
  model = await tmImage.load(modelURL, metadataURL);
  maxPredictions = model.getTotalClasses();

  // Setup camera configurations
  const flip = true;
  const width = 200;
  const height = 200;
  webcam = new tmImage.Webcam(width, height, flip);
  await webcam.setup(); // Ask the browser for camera access

  // Handle display based on device type
  if (isIos) {
    document.getElementById("webcam-container").appendChild(webcam.webcam);
    const webCamVideo = document.getElementsByTagName("video")[0];
    webCamVideo.setAttribute("playsinline", true);
    webCamVideo.muted = "true";
    webCamVideo.style.width = width + "px";
    webCamVideo.style.height = height + "px";
  } else {
    document.getElementById("webcam-container").appendChild(webcam.canvas);
  }

  // Clear old text placeholders and create clean layout slots for results
  labelContainer = document.getElementById("label-container");
  labelContainer.innerHTML = "";
  for (let i = 0; i < maxPredictions; i++) {
    const div = document.createElement("div");
    div.className = "prediction-line";
    labelContainer.appendChild(div);
  }

  // Start the real-time webcam feed loop
  webcam.play();
  window.requestAnimationFrame(loop);
}

// 3. Keep updating the camera frames continuously
async function loop() {
  webcam.update();
  await predict();
  window.requestAnimationFrame(loop);
}

// 4. Run the image through the AI and display the results
async function predict() {
  let prediction;
  if (isIos) {
    prediction = await model.predict(webcam.webcam);
  } else {
    prediction = await model.predict(webcam.canvas);
  }

  // Loop through each class (e.g., Cat and Dog) and update percentages
  for (let i = 0; i < maxPredictions; i++) {
    const className = prediction[i].className;
    const probability = (prediction[i].probability * 100).toFixed(0); // Convert decimal to 0-100%

    // Inject structured HTML into each result block
    labelContainer.childNodes[i].innerHTML = `
            <span>${className}</span>
            <span>${probability}%</span>
        `;
  }
}
