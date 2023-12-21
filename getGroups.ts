export function getGroups(): Promise<{ id: number; groupName: string }[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const groups = [
          { "id": 1, "groupName": "The Sharks" },
          { "id": 2, "groupName": "The Whales" },
          { "id": 3, "groupName": "The Zebras" },
        ];
        resolve(groups);
      }, 1000);
    });
  }
