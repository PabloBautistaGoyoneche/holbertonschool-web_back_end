// Import the Currency class from 3-currency.js
import { Currency } from './3-currency';

class Pricing {
  // Constructor that initializes amount and currency attributes
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  // Getter for the amount attribute
  get amount() {
    return this._amount;
  }

  // Setter for the amount attribute
  set amount(newAmount) {
    this._amount = newAmount;
  }

  // Getter for the currency attribute
  get currency() {
    return this._currency;
  }

  // Setter for the currency attribute
  set currency(newCurrency) {
    this._currency = newCurrency;
  }

  // Method to display the full price in the specified format
  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  // Static method to convert a price using a conversion rate
  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
