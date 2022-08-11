import { assert, expect, test } from 'vitest';
import {
  getUsersWithTenYeasExperienceAndNameStartS,
  getUsersWithExperienceBiggerTenYears,
  getUsersWithExperienceSmallerFiveYears,
} from '../use-filter';
import { usersData } from './users-data';

test('Get users with 10 years experience and name starts with "S"', () => {
  expect(
    getUsersWithTenYeasExperienceAndNameStartS(usersData)
  ).toMatchSnapshot();
});

test('Get users with experience bigger then 10 years', () => {
  expect(getUsersWithExperienceBiggerTenYears(usersData)).toMatchSnapshot();
});

test('Get users with experience smaller then 5 years', () => {
  expect(getUsersWithExperienceSmallerFiveYears(usersData)).toMatchSnapshot();
});
