import { User } from '../__test__/users-data';

// Найти пользователя с найменьшим опытом,
// после этого найти всех пользователей с таким же опытом
export const getUsersWithMinExperience = (users: User[]) => {
  let usersWithMinExperience = [];
  let minExperience = Number.MAX_SAFE_INTEGER;

  users.forEach((user: User) => {
    if (user.experience < minExperience) {
      minExperience = user.experience;
      usersWithMinExperience = [user];
    } else {
      if (user.experience === minExperience) {
        usersWithMinExperience.push(user);
      }
    }
  });

  return usersWithMinExperience;
};

// Найти количество пользователей, у которых имя начинается с S
export const getUsersWithNameStartWithS = (users: User[]) => {
  let usersCount = 0;

  users.forEach((user: User) => {
    if (user.name.startsWith('S')) {
      usersCount = usersCount + 1;
    }
  });

  return usersCount;
};
