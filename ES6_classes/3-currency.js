// Define a class named Currency.
export default class Currency {
  // Constructor for the Currency class.
  // It accepts two parameters: 'code' (string) and 'name' (string).
  constructor(code, name) {
    // Check if 'code' is a string, and if not, throw a TypeError.
    if (typeof code !== 'string') throw TypeError('Code must be a string');
    // Check if 'name' is a string, and if not, throw a TypeError.
    if (typeof name !== 'string') throw TypeError('Name must be a string');

    // Assign the 'code' and 'name' values to instance variables.
    this._code = code;
    this._name = name;
  }

  // Getter for name
  get name() {
    return this._name;
  }

  // Setter for name
  set name(newName) {
    if (typeof newName !== 'string') throw TypeError('Name must be a string');
    this._name = newName;
  }

  // Getter for code
  get code() {
    return this._code;
  }

  // Setter for code
  set code(newCode) {
    if (typeof newCode !== 'string') throw TypeError('Name must be a string');
    this._code = newCode;
  }

  // Added a new method to returns the attributes in the following way (name (code))
  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
