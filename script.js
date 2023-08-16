const inputElement = document.getElementById('search');
const submitButton = document.getElementById('submit-btn');
const outputElement = document.getElementById('output');

function convertWeight(kilograms) {
  const conversions = {
    pounds: kilograms * 2.2046,
    grams: kilograms / 0.001,
    ounces: kilograms * 35.274,
  };

  return conversions;
}

submitButton.addEventListener('click', function (event) {
  event.preventDefault();

  const kilograms = parseFloat(inputElement.value);

  if (isNaN(kilograms)) {
    const errorHTML = `
      <div class="conversion-result">
        <p>${inputElement.value} is not a valid number. Please enter a valid number.</p>
      </div>
    `;
    outputElement.innerHTML = errorHTML;
    return;
  }

  const conversions = convertWeight(kilograms);

  const outputHTML = `
    <div class="conversion-result">
      <p class="input-weight">${kilograms.toFixed(2)} kg is approximately:</p>
      <ul class="conversions-list">
        <li>${conversions.pounds.toFixed(2)} lbs</li>
        <li>${conversions.grams.toFixed(2)} g</li>
        <li>${conversions.ounces.toFixed(2)} oz</li>
      </ul>
    </div>
  `;

  outputElement.innerHTML = outputHTML;
});
