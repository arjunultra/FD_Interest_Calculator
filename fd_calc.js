let resultAns = document.getElementById("result-ans");
const calculateBtn = document.getElementById("calculate-btn");
calculateBtn.addEventListener("click", function () {
  clearResult();
  let inputRate = document.getElementById("input-rate");
  if (inputRate.value < 3) {
    resultAns.innerHTML = `5.8%`;
  } else if (inputRate.value >= 3 && inputRate.value <= 6) {
    resultAns.innerHTML = `6.5%`;
  } else if (inputRate.value >= 7 && inputRate.value <= 9) {
    resultAns.innerHTML = `6.8%`;
  } else {
    resultAns.innerHTML = `7%`;
  }
});
function clearResult() {
  resultAns.innerHTML = "";
}
