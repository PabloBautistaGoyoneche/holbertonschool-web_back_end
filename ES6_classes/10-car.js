// Define a class 'Car' to represent a car with brand, motor, and color.
export default class Car {
  // Constructor that initializes 'brand', 'motor', and 'color' properties.
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  // Method 'cloneCar' creates a new car with the same properties as the original car.
  cloneCar() {
    // Create a new instance of the same class using the constructor.
    return new this.constructor(this._brand, this._motor, this._color);
  }
}
