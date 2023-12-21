// export function isLowerCase(input: string): boolean {
//     return true;
//   } // with this initial test it fails
export function isLowerCase(input: string): boolean {
    for (const char of input) {
      if (char < 'a' || char > 'z') {
        return false;
      }
    }
    return true;
  }
