// export function roundPrice(price: number): string {
//       // with this initial tests it fails
//     return '';
//   }

// export function roundPrice(price: number): string {
//     const roundedPrice = Math.ceil(price * 100) / 100;
//     const formattedPrice = roundedPrice.toFixed(2);
//     return `${formattedPrice} SEK`;
//   }
// but with code after adding logic it passed all

export function roundPrice(price: number, currency: string = 'SEK'): string {
    const roundedPrice = Math.ceil(price * 100) / 100;
    return `${roundedPrice.toFixed(2)} ${currency}`;
  }
// after adding currency parameter it works
