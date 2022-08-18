import { expect, test } from 'vitest';
import {
  getUsersWithGreaterTenYeasExperienceAndNameStartS,
  getUsersWithExperienceBiggerTenYears,
  getUsersWithExperienceSmallerFiveYears,
} from '../examples/use-filter';
import { usersData } from './users-data';

test('Get users with bigger then 10 years experience and name starts with "S"', () => {
  expect(
    getUsersWithGreaterTenYeasExperienceAndNameStartS(usersData)
  ).toMatchSnapshot();
});

test('Get users with experience bigger then 10 years', () => {
  expect(getUsersWithExperienceBiggerTenYears(usersData)).toMatchSnapshot();
});

test('Get users with experience smaller then 5 years', () => {
  expect(getUsersWithExperienceSmallerFiveYears(usersData)).toMatchSnapshot();
});
