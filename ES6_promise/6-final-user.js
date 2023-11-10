// Import the 'signUpUser' and 'uploadPhoto' functions from external modules.
import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

// Define an asynchronous function 'handleProfileSignup' that takes three parameters.
const handleProfileSignup = async (firstName, lastName, fileName) => {
  // Create an empty array 'result' to store the outcome of the operations.
  const result = [];
  try {
    // Attempt to sign up a user with the provided 'firstName' and 'lastName'.
    const user = await signUpUser(firstName, lastName);
    // If successful, add the user's information to 'result' as a fulfilled promise.
    result.push({ status: 'fulfilled', value: user });

    // Upload a photo using the 'fileName'.
    await uploadPhoto(fileName);
  } catch (error) {
    // If there is an error, catch it and add it to 'result' as a rejected promise
    // with the error message.
    result.push({
      status: 'rejected',
      value: error.toString(),
    });
  }
  // Return the 'result' array, which contains the outcomes of the user signup and photo upload.
  return result;
};

// Export the 'handleProfileSignup' function as the default export of this module.
export default handleProfileSignup;
