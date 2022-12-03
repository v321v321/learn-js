import { expect, test } from 'vitest';
import {
  MINEgetUsersMap1, MINEgetUsersMap2, MINEgetUsersMap3
} from '../use-map';
import { usersData } from './users-data';



test('Get users with uppercase names', () => {
  expect(
    MINEgetUsersMap1(usersData)
  ).toMatchSnapshot();
});

test('Get users with more 3 year experience', () => {
  expect(
    MINEgetUsersMap2(usersData)
  ).toMatchSnapshot();
});

test('Add users age field', () => {
  expect(
    MINEgetUsersMap3(usersData)
  ).toMatchSnapshot();
});
