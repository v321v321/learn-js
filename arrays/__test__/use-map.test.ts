import { expect, test } from 'vitest';
import {
  getUsersWithUppercaseNames,
  getUsersWithMore3YearExperience,
  getUsersAgeField,
} from '../use-map';
import { usersData } from './users-data';

test('Get users with uppercase names', () => {
  expect(getUsersWithUppercaseNames(usersData)).toMatchSnapshot();
});

test('Get users with more 3 year experience', () => {
  expect(getUsersWithMore3YearExperience(usersData)).toMatchSnapshot();
});

test('Get users age field', () => {
  expect(getUsersAgeField(usersData)).toMatchSnapshot();
});
