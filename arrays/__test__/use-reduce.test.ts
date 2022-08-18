import { expect, test } from 'vitest';
import {
  getSumExperience,
  getUsersCount,
  getUsersNameExperienceMap,
  getUsersNamesLengthSum,
} from '../examples/use-reduce';
import { usersData } from './users-data';

test('Get users count', () => {
  expect(getUsersCount(usersData)).toMatchSnapshot();
});

test('Get experience years sum', () => {
  expect(getSumExperience(usersData)).toMatchSnapshot();
});

test('Get users names length sum', () => {
  expect(getUsersNamesLengthSum(usersData)).toMatchSnapshot();
});

test('Get users name->experience map', () => {
  expect(getUsersNameExperienceMap(usersData)).toMatchSnapshot();
});
