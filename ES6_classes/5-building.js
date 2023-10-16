// Define a Building class representing a building with square footage.
export default class Building {
  // Constructor that initializes the 'sqft' property.
  constructor(sqft) {
    // Check if the class extending Building has overridden 'evacuationWarningMessage.'
    if (this.constructor !== Building && this.evacuationWarningMessage === undefined) {
      throw Error('Class extending Building must override evacuationWarningMessage');
    }
    this._sqft = sqft;
  }

  // Getter for sqft
  get sqft() {
    return this._sqft;
  }

  // Setter for sqft
  set sqft(newSqft) {
    this._sqft = newSqft;
  }
}
