//Get users with min experience
export function getUsersWithMinExperience(users) {
    let minExperience = Infinity
    users.forEach(function (user) {
        if (user.experience < minExperience) {
            minExperience = user.experience
        }
    })

    let resultUsers = []
    users.forEach(function (user) {
        if (user.experience == minExperience) {
            resultUsers.push(user)
        }
    })
    return resultUsers
}

//Get users count with name starts with "S"
export function getUsersWithNameStartWithS(users) {
    let count = 0
    users.forEach(function (user) {
        if (user.name.startsWith('S')) {
            count = count + 1
        }
    })
    return count
}
