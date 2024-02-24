document.getElementById('calculateBtn').addEventListener('click', calculate);

function calculate() {
  var centerFreq = parseFloat(document.getElementById('centerFreq').value);
  var bandwidth = parseFloat(document.getElementById('bandwidth').value);

  var lowerFreq = centerFreq - (bandwidth / 2);
  var upperFreq = centerFreq + (bandwidth / 2);

  var resultElement = document.getElementById('result');
  resultElement.innerHTML = `
    <p>Lower Frequency: ${lowerFreq.toFixed(2)} MHz</p>
    <p>Upper Frequency: ${upperFreq.toFixed(2)} MHz</p>
  `;
}
