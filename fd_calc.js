let resultAns = document.getElementById("result-ans");
const calculateBtn = document.getElementById("calculate-btn");
calculateBtn.addEventListener("click", function () {
  clearResult();
  let inputRate = document.getElementById("input-rate");
  if (inputRate.value <= 3) {
    resultAns.innerHTML += ` 5.8%`;
  } else if (inputRate.value >= 6) {
    resultAns.innerHTML += ` 6.5%`;
  }
});
function clearResult() {
  resultAns.innerText += "";
}
