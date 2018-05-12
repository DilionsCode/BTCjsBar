var coins = [
  {coin: "1", currency: "USD"}
];

for (var i = 0; i < coins.length; i++) {
  var c = coins[i].coin;
  var cur = coins[i].currency;
  // console.log(coins[i].coin)  get coin ID
  $.getJSON('https://api.coinmarketcap.com/v2/ticker/1/?convert='+c, function(data) {
    var price = data.data['quotes'][cur]['price'];
    $('#coins').append("<li><a href='#'><span>"+price+"</span></a></li>");
  });
}
