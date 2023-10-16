// Import the 'Building' class from the specified module.
import Building from './5-building';

// Define a 'SkyHighBuilding' class that extends the 'Building' class.
export default class SkyHighBuilding extends Building {
  // Constructor for 'SkyHighBuilding' that initializes 'sqft' and 'floors' properties.
  constructor(sqft, floors) {
    // Call the parent class constructor with the 'sqft' parameter.
    super(sqft);
    this._floors = floors;
  }

  // Getter for floors
  get floors() {
    return this._floors;
  }

  // Setter for floors
  set floors(newFloors) {
    this._floors = newFloors;
  }

  // The 'evacuationWarningMessage' function returns a string specifying an evacuation warning.
  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }
}
