import { User } from "../__test__/users-data"

export const getUsersWithTenYeasExperienceAndNameStartS = (users: User[]) => {
  return users.filter((item) => (item.experience > 10) && (item.name.startsWith('S')))
}

export const getUsersWithExperienceBiggerTenYears = (users: User[]) => {
  return users.filter((item) => (item.experience > 10))
}

export const getUsersWithExperienceSmallerFiveYears = (users: User[]) => {
  return users.filter(item => item.experience < 5)
}