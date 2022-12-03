// Get users with uppercase names
export function MINEgetUsersMap1(users) {
    return users.map(function (user) { return user.name.toUpperCase(), user.experience })
}

//Get users with more 3 year experience
export function MINEgetUsersMap2(users) {
    return users.map(function (user) { return user.name, user.experience + 3 })
}

//Add users age field
export function MINEgetUsersMap3(users) {
    return users.map(function (user) { return user.name, user.experience, user.age = user.name.length + user.experience })
}