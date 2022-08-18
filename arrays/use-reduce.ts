import { User } from './__test__/users-data';

// Сложить опыт всех пользователей в одно число
export const getSumExperience = (users) => {
  return users.reduce((sumExperience: number, user: User) => {
    return sumExperience + user.experience;
  }, 0);
};

// Получить количество пользователей
export const getUsersCount = (users) => {
  return users.reduce((usersCount: number, _) => {
    return usersCount + 1;
  }, 0);
};

// Получить сумму количества символов в именах пользователей
export const getUsersNamesLengthSum = (users: User[]) => {
  return users.reduce((namesSumLength: number, user: User) => {
    return namesSumLength + user.name.length;
  }, 0);
};

// Получить объект, в котором ключом является имя пользователя, а значением опыт
export const getUsersNameExperienceMap = (users: User[]) => {
  return users.reduce((result: object, user: User) => {
    return { ...result, [user.name]: user.experience };
  }, {});
};