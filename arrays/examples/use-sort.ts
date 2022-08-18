import { User } from '../__test__/users-data';

// Отсортировать пользователей по имени

export const sortUsersByName = (users: User[]) => {
  users.sort((userA: User, userB: User) => {
    if (userA.name > userB.name) {
      return 1;
    }

    return -1;
  });

  return users;
};

// Отсортировать пользователей по опыту по возрастанию
export const sortUsersByExperienceASC = (users: User[]) => {
  users.sort((userA: User, userB: User) => {
    if (userA.experience > userB.experience) {
      return 1;
    }

    return -1;
  });

  return users;
};

// Отсортировать пользователей по опыту по убыванию
export const sortUsersByExperienceDESC = (users: User[]) => {
  users.sort((userA: User, userB: User) => {
    if (userA.experience > userB.experience) {
      return -1;
    }

    return 1;
  });

  return users;
};

// Отсортировать пользователей по длине имени
export const sortUsersByNameLength = (users: User[]) => {
  sortUsersByExperienceDESC(users);

  users.sort((userA: User, userB: User) => {
    if (userA.name.length > userB.name.length) {
      return 1;
    }

    return -1;
  });

  return users;
};
