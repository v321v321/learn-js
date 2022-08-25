import { User } from './__test__/users-data';

// Сложить опыт всех пользователей в одно число
export const getSumExperience = (users) => {
  return users.reduce((totalExp: number, userExp: User) => {
    return totalExp + userExp.experience
  }, 0)
};

// Получить количество пользователей
export const getUsersCount = (users) => {
  return users.reduce((userCount: number) => {
    userCount++
    
    return userCount
  }, 0)
};

// Получить сумму количества символов в именах пользователей
export const getUsersNamesLengthSum = (users: User[]) => {
  return users.reduce((totalLetters: number, user: User) => {
    return totalLetters + user.name.length
  }, 0)
};

// Получить объект, в котором ключом является имя пользователя, а значением опыт
export const getUsersNameExperienceMap = (users: User[]) => {
  return users.reduce((obj: object, user: User) => {
    return {
      ...obj, [user.name]: user.experience
    }
  }, {})
};