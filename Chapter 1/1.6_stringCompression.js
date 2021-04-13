/*
1.6 String Compression:
Implement a method to perform basic string compression using the counts of repeated characters.
For example, the string aabcccccaaa would become a2b1c5a3.
If the "compressed" string would not become smaller than the original string, your method should return the original string.
You can assume the string has only uppercase and lowercase letters (a-z).
*/

const compress = (str) => {
    if (str.length <= 2) return str
    let result = ''
    let p1 = 0
    let p2 = p1
    let count = 1
    while (p2 < str.length) {
        if (p1 === p2) {
            result += str[p1]
        }
        p2++
        if (str[p2] === str[p1]) {
            count++
        } else {
            p1 = p2
            result += count.toString()
            count = 1
        }
    }
    return result
}

const s1 = 'aabcccccaaa'
const s2 = 'b'
const s3 = 'fffeeeeeeqrqra'
console.log(compress(s1),'a2b1c5a3')
console.log(compress(s2),'b')
console.log(compress(s3),'f3e6q1r1q1r1a1')