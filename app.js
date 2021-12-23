const btc = document.getElementById("bitcoin");
const ethereum = document.getElementById("ethereum");
const dogecoin = document.getElementById("dogecoin");

const settings = {
  "async": true,
  "scrossDomain": true,
  "url": "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=usd",
  "method": "GET",
  "headers": {}
}

$.ajax(settings).done(function(response){
  // console.log(response);
  btc.innerHTML = response.bitcoin.usd;
  ethereum.innerHTML = response.ethereum.usd;
  dogecoin.innerHTML = response.dogecoin.usd;
});