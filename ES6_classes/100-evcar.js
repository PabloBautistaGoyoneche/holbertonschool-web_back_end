// Import the Car class from 10-car.js
import { Car } from './10-car';

class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(); // Call the constructor of the parent class (Car)
    this._brand = brand;
    this._motor = motor;
    this._color = color;
    this._range = range;
  }

  get brand() {
    return this._brand;
  }

  set brand(newBrand) {
    this._brand = newBrand;
  }

  get motor() {
    return this._motor;
  }

  set motor(newMotor) {
    this._motor = newMotor;
  }

  get color() {
    return this._color;
  }

  set color(newColor) {
    this._color = newColor;
  }

  get range() {
    return this._range;
  }

  set range(newRange) {
    this._range = newRange;
  }

  cloneCar() {
    // Create a new instance of the parent class (Car) with the same attributes
    const carClone = new Car(this._brand, this._motor, this._color);
    return carClone;
  }
}

