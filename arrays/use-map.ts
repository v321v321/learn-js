import { User } from './__test__/users-data';

export const getUsersWithUppercaseNames = (users: User[]) => users.map(user => {

  return {
    name: user.name.toUpperCase(),
    experience: user.experience
  }
})


// Добавить всем поьлзователям 3 года опыта
export const getUsersWithMore3YearExperience = (users: User[]) => users.map(user => {

  return {
    name: user.name,
    experience: user.experience + 3
  }
})


// Добавить всем пользователям поле age, которое равно количеству символов
// в имени плюс количество лет в опыте ({name: 'Ivan', experience: 5, age: 4 + 5})

export const getUsersAgeField = (users: User[]) => users.map(user => {

  return {
    name: user.name,
    experience: user.experience,
    age: user.name.length + user.experience
  }
})