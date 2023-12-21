export function validateZip(zip: string): boolean {
    if (zip.length !== 5) {
      return false;
    }

    for (const char of zip) {
      if (!isNumeric(char)) {
        return false;
      }
    }

    return true;
  }

  function isNumeric(char: string): boolean {
    return '0' <= char && char <= '9';
  }
// after adding actual logic.
