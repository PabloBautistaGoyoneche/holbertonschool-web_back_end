// Define a class 'HolbertonClass' to represent a Holberton class with a year and location.
export class HolbertonClass {
  // Constructor to initialize 'year' and 'location' properties.Constructor to initialize
  // 'year' and 'location' properties.
  constructor(year, location) {
    this._year = year;
    this._location = location;
  }

  // Getter for 'year'.
  get year() {
    return this._year;
  }

  // Getter for 'location'.
  get location() {
    return this._location;
  }
}

// Create instances of 'HolbertonClass' for different years and locations.
const class2019 = new HolbertonClass(2019, 'San Francisco');
const class2020 = new HolbertonClass(2020, 'San Francisco');

// Define a class 'StudentHolberton' to represent a Holberton student with a first name,
// last name, and associated Holberton class.
export class StudentHolberton {
  // Constructor to initialize 'firstName', 'lastName', and 'holbertonClass' properties.
  constructor(firstName, lastName, holbertonClass) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._holbertonClass = holbertonClass;
  }

  // Getter for 'fullName' that returns the full name of the student.
  get fullName() {
    return `${this._firstName} ${this._lastName}`;
  }

  // Getter for 'holbertonClass' that returns the associated Holberton class.
  get holbertonClass() {
    return this._holbertonClass;
  }

  // Getter for 'fullStudentDescription' that returns a string describing the student's
  // full name, class year, and location.
  get fullStudentDescription() {
    return `${this._firstName} ${this._lastName} - ${this._holbertonClass.year} - ${
      this._holbertonClass.location
    }`;
  }
}

// Create instances of 'StudentHolberton' for different students with their respective
// Holberton classes.
const student1 = new StudentHolberton('Guillaume', 'Salva', class2020);
const student2 = new StudentHolberton('John', 'Doe', class2020);
const student3 = new StudentHolberton('Albert', 'Clinton', class2019);
const student4 = new StudentHolberton('Donald', 'Bush', class2019);
const student5 = new StudentHolberton('Jason', 'Sandler', class2019);

// Create a list of students and export it.
const listOfStudents = [student1, student2, student3, student4, student5];

export default listOfStudents;
