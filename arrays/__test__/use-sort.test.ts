import { expect, test } from 'vitest';
import {
  sortUsersByExperienceASC,
  sortUsersByExperienceDESC,
  sortUsersByName,
  sortUsersByNameLength,
} from '../examples/use-sort';
import { usersData } from './users-data';

test('Sort users by name', () => {
  const testData = [...usersData];
  sortUsersByName(testData);
  expect(testData).toMatchSnapshot();
});

test('Sort users by experience asc', () => {
  const testData = [...usersData];
  sortUsersByExperienceASC(testData);
  expect(testData).toMatchSnapshot();
});

test('Sort user by experience DESC', () => {
  const testData = [...usersData];
  sortUsersByExperienceDESC(testData);
  expect(testData).toMatchSnapshot();
});

test('Sort user by experience DESC and then by name length ', () => {
  const testData = [...usersData];
  sortUsersByExperienceASC(testData);
  sortUsersByNameLength(testData);
  expect(testData).toMatchSnapshot();
});
