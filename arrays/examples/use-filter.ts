// Найти всех пользователей со стажем больше 10 лет
// и имя начинается с буквы S
import { User } from '../__test__/users-data';

export const getUsersWithGreaterTenYeasExperienceAndNameStartS = (users) => {
  return users.filter((user: User) => {
    return user.experience > 10 && user.name.startsWith('S');
  });
};

// Найти всех пользователей с опытом более 10 лет
export const getUsersWithExperienceBiggerTenYears = (users) => {
  return users.filter((user: User) => {
    return user.experience > 10;
  });
};

// Найти всех пользователей с опытом менее 5 лет
export const getUsersWithExperienceSmallerFiveYears = (users) => {
  return users.filter((user: User) => {
    return user.experience < 5;
  });
};
