import { User } from '../__test__/users-data';

// Привести символы имен пользователей к верхрему регистру (Ivan -> IVAN)
export const getUsersWithUppercaseNames = (users) => {
  return users.map((user: User) => {
    return { name: user.name.toUpperCase(), experience: user.experience };
  }, 0);
};

// Добавить всем поьлзователям 3 года опыта
export const getUsersWithMore3YearExperience = (users) => {
  return users.map((user: User) => {
    return { name: user.name, experience: user.experience + 3 };
  }, 0);
};

// Добавить всем пользователям поле age, которое равно количеству символов
// в имени плюс количество лет в опыте ({name: 'Ivan', experience: 5, age: 4 + 5})
export const getUsersAgeField = (users) => {
  return users.map((user: User) => {
    return {
      name: user.name,
      experience: user.experience,
      age: user.name.length + user.experience,
    };
  }, 0);
};
