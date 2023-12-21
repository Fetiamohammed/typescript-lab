import { getGroups } from './getGroups';

test('getGroups returns an array of groups', async () => {
  const groups = await getGroups();
  expect(groups).toEqual([
    { "id": 1, "groupName": "The Sharks" },
    { "id": 2, "groupName": "The Whales" },
    { "id": 3, "groupName": "The Zebras" },
  ]);
});
