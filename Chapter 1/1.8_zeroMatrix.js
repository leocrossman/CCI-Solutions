/*
1.8 Zero Matrix:
Write an algorithm such trhat if an element in an MxN matrix is 0, its entire
row and column are set to 0.
*/

const zeroMat = (mat) => {
    const zeros = getZeros(mat)

    zeros.forEach(zero => {
        mat = setZeros(mat,zero)
    })

    return mat
}

const setZeros = (mat,zero) => {
    for (let i = 0; i < mat.length; i++) {
        mat[i][zero[1]] = 0
        for (let j = 0; j < mat[i].length; j++) {
            mat[zero[0]][j] = 0
        }
    }
    return mat
}

const getZeros = (mat) => {
    const zeros = []
    for (let i = 0; i < mat.length;i++) {
        for (let j = 0; j < mat[i].length;j++) {
            if (mat[i][j] === 0) {
                zeros.push([i,j])
            }
        }
    }
    return zeros
}

const m1 = [[1,2],[3,4],[5,0]]
// [1,2]
// [3,4]
// [5,0]

// [1,0]
// [3,0]
// [0,0]

const m2 = [[1,2,3],[4,0,6]]
// [1,2,3]
// [4,0,6]

// [1,0,3]
// [0,0,0]

const m3 = [1,2,3,4,5]

const m4 = [[0,2],[3,4],[5,0]]
// [0,2]
// [3,4]
// [5,0]

// [0,0]
// [0,0]
// [0,0]

console.log(zeroMat(m1),'\t',[[1,0],[3,0],[0,0]],'\n\n')
console.log(zeroMat(m2),'\t',[[1,0,3],[0,0,0]],'\n\n')
console.log(zeroMat(m3),'\t',[1,2,3,4,5],'\n\n')
console.log(zeroMat(m4),'\t',[[0,0],[0,0],[0,0]],'\n\n')
