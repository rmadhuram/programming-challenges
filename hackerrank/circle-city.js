function solve(d, k) {
  let maxX = Math.floor(Math.sqrt(d))
  let n = 0
  for (let x = 1; x <= maxX; x++) {
    let y = Math.sqrt(d - x * x)
    if ((y - Math.floor(y)) < 0.0000000001) {
      n++
    }
  }
  return (4 * n > k) ? 'impossible' : 'possible'
}

console.log(solve(25,11))
