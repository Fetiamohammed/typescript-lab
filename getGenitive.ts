export function getGenitive(name: string): string {
    if (name.endsWith('a')) {
      return name;
    } else {
      return `${name}'s`;
    }
  }
