// Define a Pricing class that represents a price with an amount and currency.
export default class Pricing {
  // Constructor to initialize the 'amount' and 'currency' properties.
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  // Getter method for 'amount'.
  get amount() {
    return this._amount;
  }

  // Setter method for 'amount'.
  set amount(newAmount) {
    this._amount = newAmount;
  }

  // Getter for currency
  get currency() {
    return this._currency;
  }

  // Settter for currency
  set currency(newCurrency) {
    this._currency = newCurrency;
  }

  // The 'displayFullPrice' function returns a formatted string representing the price.
  // It combines the amount, currency name, and currency code for display.
  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  // A static method 'convertPrice' calculates the converted price by multiplying 'amount'
  // with 'conversionRate'.
  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
