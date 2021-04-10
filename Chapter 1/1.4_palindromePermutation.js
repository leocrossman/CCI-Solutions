/*
1.4 Palindrome Permutation:
Given a string, write a function to check if it is a permutation of a palindrome.
A palindrome is a word or phrase that is the same forwards and packwards.
A permutation is a rearrangement of letters.
The palindrome does not need to be limited to just dictionary words.
*/

const palinPerm = (str) => {
    const strNoSpaces = str.toLowerCase().split(' ').join('')
    const isEvenLength = strNoSpaces.length % 2 === 0
	let oneOdd = false
	const obj = makeLetterCountObj(strNoSpaces)
    if (isEvenLength) {
		for (const letter in obj) {
			if (Object.hasOwnProperty.call(obj, letter)) {
				if (obj[letter] % 2 === 0) {
					continue
				} else {
					return false
				}
			}
		}
    } else {
		for(const letter in obj) {
			if (Object.hasOwnProperty.call(obj,letter)) {
				if (obj[letter] % 2 === 0) {
					continue
				} else if (!oneOdd) {
					oneOdd = true
				} else {
					return false
				}
			}
		}
	}

	return true
}

const makeLetterCountObj = (str) => {
    const obj = {}
    for(let i = 0; i < str.length; i++) {
        if (!obj.hasOwnProperty(str[i])) {
            obj[str[i]] = 1
        } else {
            obj[str[i]] += 1
        }
    }
    return obj
}

const s1 = 'Tact Coa'
const s2 = 'race care'
const s3 = 'race carc' // aacccerr
console.log(palinPerm(s1),'true')
console.log(palinPerm(s2),'true')
console.log(palinPerm(s3),'false')