"use strict"

if (4 == 9) {
    console.log("Ok!")
} else {
    console.log("not Ok!")
}

const num = 50

if (num < 49) {
    console.log("not Ok!")
} else if (num > 100) {
    console.log("not Ok!")
} else {
    console.log("Ok!")
}

(num === 50) ? console.log("Ok!") : console.log("not Ok!")

switch (num) {
    case 49:
        console.log("not right!");
        break;
    case 50:
        return 5;
    default:
        console.log("Ok!")
        break;
}

let some1 = (num) => {
    switch (num) {
        case 49:
            console.log("not right!");
            break;
        case 50:
            return 5;
        default:
            console.log("Ok!")
            break;
    }
}

console.log(some1(49))