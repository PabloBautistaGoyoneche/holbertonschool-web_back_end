// Define a class named HolbertonCourse.
export default class HolbertonCourse {
    // Constructor for the HolbertonCourse class.
    // It accepts three parameters: name (string), length (number), and students (array).
    constructor(name, length, students) {
      // Check if 'name' is a string, and if not, throw a TypeError.
      if (typeof name !== 'string') throw TypeError('Name must be a string');
      // Check if 'length' is a number, and if not, throw a TypeError.
      if (typeof length !== 'number') throw TypeError('Length must be a number');
      // Check if 'students' is an array, and if not, throw a TypeError.
      if (!Array.isArray(students)) throw TypeError('Students must be an array');

      // Assign the 'name', 'length', and 'students' values to instance variables.
      this._name = name;
      this._length = length;
      this._students = students;
    }

    // Getter for the 'name' property.
    get name() {
      return this._name;
    }

    // Setter for the 'name' property.
    set name(newName) {
      // Check if 'newName' is a string, and if not, throw a TypeError.
      if (typeof newName !== 'string') throw TypeError('Name must be a string');
      // Update the 'name' property with the new value.
      this._name = newName;
    }

    // Getter for the 'length' property.
    get length() {
      return this._length;
    }

    // Setter for the 'length' property.
    set length(newLength) {
      // Check if 'newLength' is a number, and if not, throw a TypeError.
      if (typeof newLength !== 'number') throw TypeError('Length must be a number');
      // Update the 'length' property with the new value.
      this._length = newLength;
    }

    // Getter for the 'students' property.
    get students() {
      return this._students;
    }

    // Setter for the 'students' property.
    set students(newStudents) {
      // Check if 'newStudents' is an array, and if not, throw a TypeError.
      if (!Array.isArray(newStudents)) throw TypeError('Students must be an array');
      // Update the 'students' property with the new value.
      this._students = newStudents;
    }
  }
