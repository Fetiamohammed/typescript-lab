// // Testing before adding email validation logic
// export function validateEmail(email: string): boolean {
//     return true;
//   }
 //   and with this the jest test returned true with ze first email but not the other
export function validateEmail(email: string): boolean {

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
// after adding the basic validation logic all three passed with jest test.
