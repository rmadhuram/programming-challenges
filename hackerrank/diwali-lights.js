// https://www.hackerrank.com/challenges/diwali-lights/problem

// need to find (2^n - 1) % 100000
function lights(n) {
  let k = 1
  let sum = 0
  for (let i = 0; i < n; i++) {
    sum += k
    k = (k*2) % 100000
  }
  return (sum % 100000)
}

console.log(lights(7673))




