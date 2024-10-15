const clearScreen = async () => {
  document.getElementById("result").value = "";
};

const setScreenValue = async (value) => {
  document.getElementById("result").value += value;
};
