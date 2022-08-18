import { User } from '../__test__/users-data';

export const getUsersWithMinExperience = (users: User[]) => {
  let minExperience = 100
  users.forEach(user => {
    if (user.experience < minExperience) {
      minExperience = user.experience
    }
  })

  let arr = []

  users.forEach(user => {
    if (user.experience === minExperience) {
      arr.push(user)
    }
  })
  return arr
}

export const getUsersWithNameStartWithS = (users: User[]) => {
  let count = 0
  users.forEach(user => {
    if (user.name.startsWith('S')) {
      count ++
    }
  })
  return count
}