var coins = [
  {coin: "1", currency: "USD"},
  {coin: "2", currency: "USD"}
];

for (var i = 0; i < coins.length; i++) {
  var c = coins[i].coin;
  var cur = coins[i].currency;
  // console.log(coins[i].coin)  get coin ID
  $.getJSON('https://api.coinmarketcap.com/v2/ticker/'+c+'/?convert='+cur, function(data) {
    var price = data.data['quotes'][cur]['price'];
    var symbol = data.data['symbol'];
    if(data.data['quotes'][cur]['percent_change_1h'] > 0.00) {
      var arrow = "<i class='fa fa-caret-up'></i>";
    } else {
      var arrow = "<i class='fa fa-caret-down'></i>";
    }
    $('#coins').append("<li><a href='#'><span>"+arrow+" "+price+" "+symbol+"/"+cur+"</span></a></li>");
  });
}
