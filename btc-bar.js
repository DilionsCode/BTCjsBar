$(document).ready(function() {
  $.getJSON('https://api.coinmarketcap.com/v1/ticker/bitcoin/?convert=MXN')
    .success(getCurrentPriceCompleted)
    .error(getCurrentPriceFailed);

  function getCurrentPriceCompleted(data) {
		document.getElementById("mxn").innerHTML = data[0]['price_mxn'];
    if(data[0]['percent_change_1h'] > 0) {
      $("#mxn-class").addClass("fas");
      $("#mxn-class").addClass("fa-caret-up");
    } else {
      $("#mxn-class").addClass("fas");
      $("#mxn-class").addClass("fa-caret-down");
    }
  }

  function getCurrentPriceFailed(error) {
    console.log(error);
		document.getElementById("mxn").innerHTML = "ERROR";
  }
});
// USD bitcoin
$(document).ready(function() {
  $.getJSON('https://api.coinmarketcap.com/v1/ticker/bitcoin/?convert=MXN')
    .success(getCurrentPriceCompleted)
    .error(getCurrentPriceFailed);

  function getCurrentPriceCompleted(data) {
		document.getElementById("usd").innerHTML = data[0]['price_usd'];
    if(data[0]['percent_change_1h'] > 0) {
      $("#usd-class").addClass("fas");
      $("#usd-class").addClass("fa-caret-up");
    } else {
      $("#usd-class").addClass("fas");
      $("#usd-class").addClass("fa-caret-down");
    }
  }

  function getCurrentPriceFailed(error) {
    console.log(error);
		document.getElementById("usd").innerHTML = "ERROR";
  }
});
// ETH/mxn
$(document).ready(function() {
  $.getJSON('https://api.coinmarketcap.com/v1/ticker/ethereum/?convert=MXN')
    .success(getCurrentPriceCompleted)
    .error(getCurrentPriceFailed);

  function getCurrentPriceCompleted(data) {
		document.getElementById("ethmxn").innerHTML = data[0]['price_mxn'];
    if(data[0]['percent_change_1h'] > 0) {
      $("#ethm-class").addClass("fas");
      $("#ethm-class").addClass("fa-caret-up");
    } else {
      $("#ethm-class").addClass("fas");
      $("#ethm-class").addClass("fa-caret-down");
    }
  }

  function getCurrentPriceFailed(error) {
    console.log(error);
		document.getElementById("ethmxn").innerHTML = "ERROR";
  }
});
// ETH/USD
$(document).ready(function() {
  $.getJSON('https://api.coinmarketcap.com/v1/ticker/ethereum/?convert=MXN')
    .success(getCurrentPriceCompleted)
    .error(getCurrentPriceFailed);

  function getCurrentPriceCompleted(data) {
		document.getElementById("ethusd").innerHTML = data[0]['price_usd'];
    if(data[0]['percent_change_1h'] > 0) {
      $("#ethu-class").addClass("fas");
      $("#ethu-class").addClass("fa-caret-up");
    } else {
      $("#ethu-class").addClass("fas");
      $("#ethu-class").addClass("fa-caret-down");
    }
  }

  function getCurrentPriceFailed(error) {
    console.log(error);
		document.getElementById("ethusd").innerHTML = "ERROR";
  }
});
