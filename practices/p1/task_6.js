function checkAccess(user){
    return typeIsObject(user) ? validateUser(user) : null
}
function typeIsObject(user){
    switch(typeof(user)){
        case "object":
            return true;
        default:
            return false;
    }
}

function validateUser(user){

    let rules = isAge(user) &&
        isPaid(user) &&
        isNotBlocked(user) &&
        isNotBadUserName(user)

    return rules ? true : !!isAdmin(user)
}

function isAge(user){
    return user.age > 18 && user.age < 35
}

function isPaid(user){
    return user.paid
}

function isNotBlocked(user){
    return !user.blocked
}

function isNotBadUserName(user){
    return !user.badUsername
}

function isAdmin(user){
    return user.isAdmin
}

user = {
    age: 18,
    paid: true,
    blocked: false,
    badUsername: false,
    isAdmin: false
}

user_admin = {
    age: 18,
    paid: true,
    blocked: false,
    badUsername: false,
    isAdmin: true
}

console.log(checkAccess(user));
console.log(checkAccess(user_admin));