let userName = getFirstName("Miguel-dos-Santos-Fonseca", "-")
console.log("Seja bem vindo " + userName)

userName = getFirstName("Gabriel dos Santos Fonseca", " ")
console.log("Seja bem vindo " + userName)

function getFirstName(name, splitChar) {
    let firstName = name.split(splitChar)[0]
    return firstName
}