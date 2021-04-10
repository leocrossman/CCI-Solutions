/*
1.2 Check Permutation
Given two strings, write a method to decide if one is a permutation of the other.
*/

const intersection = (setA, setB) => {
    let _intersection = new Set()
    for (let el of setB) {
        if (setA.has(el)) {
            _intersection.add(el)
        }
    }
    return _intersection
}

const isPermutation = (s1,s2) => {
    if (s1.length !== s2.length) return false

    const sorted1 = s1.split('').sort().join('')
    const sorted2 = s2.split('').sort().join('')

    return sorted1 === sorted2
}

console.log('\n')

const s1 = 'abca'
const s2 = 'acba'
const s3 = 'bcac'
console.log(isPermutation(s1,s2),'true')
console.log(isPermutation(s1,s3),'false')