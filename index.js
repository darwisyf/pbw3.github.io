const number = parseInt(prompt('Enter the number of terms: '));
let n1 = 0, n2 = 1, nextTerm;
let result = document.getElementById('text');

console.log('Fibonacci Series:');

for (let i = 1; i <= number; i++) {
    result.innerHTML += n1 + ", ";
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
}