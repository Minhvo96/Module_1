// 1. viết hàm tạo ra 1 mảng 2 chiều với n và m, các giá trị [min, max]
// 2. viết hàm hiển thị mảng 2 chiều trên
// 3. viết hàm đếm xem trong mảng 2 chiều trên có bao nhiêu số chẵn
// 4. viết hàm đếm xem trong mảng 2 chiều trên có bao nhiều số nguyên tố


function createMatrix(n, m, min, max) {
    let matrix = new Array(n);
    for (i = 0; i < n; i++) {
        matrix[i] = new Array(m);
        for (j = 0; j < m; j++) {
            matrix[i][j] = Math.floor(Math.random() * (max - min + 1) + min);
        }
    }
    return matrix;
}

function displayMatrix(matrix) {
    for (i = 0; i < matrix.length; i++) {
        for (j = 0; j < matrix[i].length; j++) {
            document.write(`${matrix[i][j]}\t`)
        }
        document.write('<br>')
    }
}

function countEvenNumber(matrix) {
    let count = 0;
    for (i = 0; i < matrix.length; i++) {
        for (j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] % 2 == 0) {
                count++;
            }
        }
    }
    return count;
}

function countPrimeNumber(matrix) {
    let count1 = 0;
    for (i = 0; i < matrix.length; i++) {
        for (j = 0; j < matrix[i].length; j++) {
            let countDivisor = 0;
            for (n = 1; n <= matrix[i][j]; n++) {
                if (matrix[i][j] % n == 0) {
                    countDivisor++;
                }
            } if (countDivisor == 2) {
                count1++;
            }
        } document.write('<br>')
    } return count1;
}


let matrix = createMatrix(2, 3, 20, 90);
displayMatrix(matrix);

let count = countEvenNumber(matrix);
document.write(`Number of even in matrix is: ${count}`)

let count1 = countPrimeNumber(matrix);
document.write(`Number of prime in matrix is: ${count1}`)