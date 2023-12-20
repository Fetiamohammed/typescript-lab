// export function roundPrice(price: number): string {
//       // with this initial tests it fails
//     return '';
//   }

// export function roundPrice(price: number): string {
//     const roundedPrice = Math.ceil(price * 100) / 100;
//     const formattedPrice = roundedPrice.toFixed(2);
//     return `${formattedPrice} SEK`;
//   }
// but with this code after adding logic it passed all

// export function roundPrice(price: number, currency: string = 'SEK'): string {
//     const roundedPrice = Math.ceil(price * 100) / 100;
//     return `${roundedPrice.toFixed(2)} ${currency}`;
//   }
// after adding currency parameter it works

export function roundPrice(price: number, pattern: string = '%PRICE% %CURRENCY%', currency: string = 'SEK'): string {
    const roundedPrice = Math.ceil(price * 100) / 100; 
    const formattedPrice = roundedPrice.toFixed(2);
    const formattedPattern = pattern.replace('%PRICE%', formattedPrice).replace('%CURRENCY%', currency);
    return formattedPattern;
  }
