// Define a 'HolbertonClass' class representing a class with size and location.
export default class HolbertonClass {
  // Constructor that initializes the 'size' and 'location' properties.
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  // The 'valueOf' method provides the 'size' property when the object is used as a primitive value.
  valueOf() {
    return this._size;
  }

  // The 'toString' method returns the 'location' property when the object is converted to a string.
  toString() {
    return this._location;
  }
}
