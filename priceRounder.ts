export function roundPrice(price: number): string {
    const roundedPrice = Math.ceil(price * 100) / 100; // with this initial tests it fails
    return `${roundedPrice.toFixed(2)} SEK`;
  }
