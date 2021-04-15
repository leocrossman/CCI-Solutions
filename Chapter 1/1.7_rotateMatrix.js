/*
1.7 Rotate Matrix:
Given an image represented by an NxN matrix, where each pixel in the image is 4 bytes, write a method to rotate the image by 90 degrees.
Can you do this in place?
*/

const rotateMat = (mat) => {
    const rotated = []
    for (let i = 0; i < mat.length; i++) {
        const row = []
        for (let j = mat.length-1; j >= 0; j--) {
            row.push(mat[j][i])
        }
        rotated.push(row)
    }
    return rotated 
}

const mat = [[1,2,3],[4,5,6],[7,8,9]]
console.log(rotateMat(mat),[[7,4,1],[8,5,2],[9,6,3]])