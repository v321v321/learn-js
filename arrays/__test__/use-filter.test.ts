import { assert, expect, test } from 'vitest';
import {
  getUsersWithTenYeasExperienceAndNameStartS,
  getUsersWithExperienceBiggerTenYears,
  getUsersWithExperienceSmallerFiveYears,
} from '../use-filter';
import { usersData } from './users-data';

test('Get users with 10 years experience and name starts with "S"', () => {
  expect(getUsersWithTenYeasExperienceAndNameStartS(usersData)).toStrictEqual([
    { name: 'Simonis', experience: 15 },
  ]);
});

test('Get users with experience bigger then 10 years', () => {
  expect(getUsersWithExperienceBiggerTenYears(usersData)).toStrictEqual([
    { name: 'Zemlak', experience: 14 },
    { name: 'Upton', experience: 13 },
    { name: 'Braun', experience: 13 },
    { name: 'Dickens', experience: 14 },
    { name: 'Buckridge', experience: 12 },
    { name: 'Veum', experience: 13 },
    { name: 'Will', experience: 15 },
    { name: 'Gleason', experience: 14 },
    { name: 'Mayert', experience: 14 },
    { name: 'Feest', experience: 14 },
    { name: 'Kihn', experience: 13 },
    { name: 'Reichert', experience: 11 },
    { name: 'Fadel', experience: 11 },
    { name: 'Simonis', experience: 15 },
    { name: 'Lind', experience: 14 },
    { name: 'Padberg', experience: 12 },
    { name: 'Purdy', experience: 13 },
    { name: 'Doyle', experience: 12 },
    { name: 'Reichert', experience: 13 },
    { name: 'Breitenberg', experience: 13 },
    { name: 'Erdman', experience: 11 },
    { name: 'Corkery', experience: 14 },
    { name: 'Okuneva', experience: 13 },
    { name: 'Brown', experience: 13 },
    { name: 'Jacobson', experience: 12 },
    { name: 'Moore', experience: 12 },
    { name: 'Huel', experience: 15 },
  ]);
});

test('Get users with experience smaller then 5 years', () => {
  expect(getUsersWithExperienceSmallerFiveYears(usersData)).toStrictEqual([
    { name: 'Erdman', experience: 2 },
    { name: 'Wisoky', experience: 3 },
    { name: 'Cummings', experience: 3 },
    { name: 'Nolan', experience: 4 },
    { name: 'Durgan', experience: 4 },
    { name: 'Koelpin', experience: 3 },
    { name: 'Wolf', experience: 3 },
    { name: 'Keebler', experience: 2 },
    { name: 'Rempel', experience: 2 },
    { name: 'Abernathy', experience: 4 },
    { name: 'Wolf', experience: 4 },
    { name: 'Langworth', experience: 4 },
    { name: 'Jerde', experience: 4 },
    { name: 'Fritsch', experience: 4 },
    { name: 'Stanton', experience: 3 },
    { name: 'Gerlach', experience: 3 },
    { name: 'Ritchie', experience: 4 },
    { name: 'Pfeffer', experience: 3 },
    { name: 'Pollich', experience: 2 },
    { name: 'Lueilwitz', experience: 4 },
    { name: 'Purdy', experience: 2 },
    { name: 'Altenwerth', experience: 2 },
    { name: 'Crist', experience: 4 },
    { name: 'Deckow', experience: 3 },
    { name: 'Nicolas', experience: 4 },
    { name: 'Hermiston', experience: 2 },
    { name: 'Kautzer', experience: 2 },
    { name: 'Conn', experience: 4 },
  ]);
});
