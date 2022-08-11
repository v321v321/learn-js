import { expect, test } from 'vitest';
import {
  getUsersWithMinExperience,
  getUsersWithNameStartWithS,
} from '../use-foreach';
import { usersData } from './users-data';

test('Get users with min experience', () => {
  expect(getUsersWithMinExperience(usersData)).toMatchSnapshot();
});

test('Get users count with name starts with "S"', () => {
  expect(getUsersWithNameStartWithS(usersData)).toMatchSnapshot();
});
