function minimalNumberOfCoins(coins, price) {
  let remainingPrice = price;
  let usedCoinCount = 0;
  let coinIndex = coins.length - 1;

  while (remainingPrice > 0) {
    const coinValue = coins[coinIndex];
    const selectedCoinCount = Math.floor(remainingPrice / coinValue);

    remainingPrice -= selectedCoinCount * coinValue;
    usedCoinCount += selectedCoinCount;
    --coinIndex; //Next coin
  }
  return usedCoinCount;
}
