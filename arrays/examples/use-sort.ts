import { User } from '../__test__/users-data';

// Отсортировать пользователей по имени

export const sortUsersByName = (users: User[]) => {
  users.sort((userA: User, userB: User) => userA.name > userB.name ? 1 : -1);
};

// Отсортировать пользователей по опыту по возрастанию
export const sortUsersByExperienceASC = (users: User[]) => {
  users.sort((userA: User, userB: User) => userA.experience > userB.experience ? 1 : -1);
};


// Отсортировать пользователей по опыту по убыванию
export const sortUsersByExperienceDESC = (users: User[]) => {
  users.sort((userA: User, userB: User) => userA.experience > userB.experience ? -1 : 1);
};


// Отсортировать пользователей по длине имени
export const sortUsersByNameLength = (users: User[]) => {
  users.sort((userA: User, userB: User) => userA.name.length < userB.name.length ? -1 : 1);
};

