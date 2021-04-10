/*
1.1 Is Unique: Implement an algorithm to determine if a string has all unique characters.
What do you do if you cannot use additional data structures?
*/

// using a set
const isUnique = (str) => new Set(str).size === str.length

// without set (using object)
const isUnique2 = (str) => {
    const obj = {}
    for (let i = 0; i < str.length; i++) {
        if (obj[str[i]] && obj[str[i]] > 0) {
            return false
        } else {
            obj[str[i]] = 1;
        }
    }
    return true
}


const testStr = 'asdf'
console.log(isUnique(testStr))
console.log(isUnique2(testStr))