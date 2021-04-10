/*
1.3 URLify
Write a method to replace all spaces in a string with '%20'.
You may assume that the string has sufficient space at the end
to hold the additional characters, and that you are given the
"true" length of the string.
*/

const toUrl = (str) => {
    const trailRegex = /[ \t]+$/
    const withoutTrail = str.replace(trailRegex,'')
    const regex = /\s+/gm
    const fill = '%20'
    return withoutTrail.replace(regex,fill)
}


const s1 = 'Mr John Smith   '
console.log(toUrl(s1))