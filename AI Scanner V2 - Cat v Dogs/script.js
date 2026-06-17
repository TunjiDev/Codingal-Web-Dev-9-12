// 1. Paste the model link from Teachable Machine here (keep the trailing slash)
const URL = "https://teachablemachine.withgoogle.com/models/qscsPTFMd/";

let model, labelContainer, maxPredictions;

// Load the AI model automatically when the page finishes loading
async function loadModel() {
  const modelURL = URL + "model.json";
  const metadataURL = URL + "metadata.json";

  model = await tmImage.load(modelURL, metadataURL);
  maxPredictions = model.getTotalClasses();

  // Select the label container so we can clear any default text
  labelContainer = document.getElementById("label-container");
}

// 2. This runs whenever the student picks an image file
async function previewAndPredict(event) {
  // If the model hasn't loaded yet, wait for it
  if (!model) await loadModel();

  const file = event.target.files[0];
  if (!file) return;

  const imgElement = document.getElementById("user-image");

  // Use FileReader to convert the local image into something the <img> tag can display
  const reader = new FileReader();
  reader.onload = function (e) {
    imgElement.src = e.target.result;
    imgElement.style.display = "block"; // Show the image element
  };
  reader.readAsDataURL(file);

  // 3. Once the image is fully loaded into the browser, run the prediction
  imgElement.onload = async function () {
    // Clear previous predictions
    labelContainer.innerHTML = "";

    // Pass the HTML image element directly to the model as shown in the documentation
    const prediction = await model.predict(imgElement);

    // Display results as confidence percentages
    for (let i = 0; i < maxPredictions; i++) {
      const className = prediction[i].className;
      const probability = (prediction[i].probability * 100).toFixed(0);

      const div = document.createElement("div");
      div.className = "prediction-line";
      div.innerHTML = `
                <span>${className}</span>
                <span>${probability}%</span>
            `;
      labelContainer.appendChild(div);
    }
  };
}

// Initialize the model loading sequence right away
loadModel();
