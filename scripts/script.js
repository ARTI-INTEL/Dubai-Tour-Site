async function buttonClicked() {
  console.log("Explore Button was clicked")
}

(function loadWeatherWidget(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (!d.getElementById(id)) {
      js = d.createElement(s);
      js.id = id;
      js.src = 'https://weatherwidget.io/js/widget.min.js';
      fjs.parentNode.insertBefore(js, fjs);
    }
  })(document, 'script', 'weatherwidget-io-js');

async function convertCurrency() {
    const amount = document.getElementById('amount').value;
    const fromCurrency = document.getElementById('from-currency').value;
    const toCurrency = document.getElementById('to-currency').value;
  
    if (amount === '') {
      alert('Please enter an amount.');
      return;
    }
  
    try {
      const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`);
      const data = await response.json();
      const rate = data.rates[toCurrency];
      const result = amount * rate;
      document.getElementById('result').innerText = `${amount} ${fromCurrency} = ${result.toFixed(2)} ${toCurrency}`;
    } catch (error) {
      console.error('Error fetching exchange rate:', error);
      document.getElementById('result').innerText = 'Conversion failed. Try again later.';
    }
}

async function subscribe(){
  console.log("Subscribe Button was clicked")
}