// how many AP dates are there?

let days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
function isValid(mm, dd, yy) {
  if (mm == 2) {
    if (yy % 4 == 0) {
      if (dd <= 29) return true
    } else {
      if (dd <= 28) return true
    }
    return false
  } else {
    if (dd <= days[mm-1]) return true
  }
  return false
}

let total = 0

// asc
console.log('Asc')
for (let k=1; k<=30; k++) {
  let n = 0
  for (let mm = 1; mm <= 12; mm++) {
    if (isValid(mm, mm + k, mm + 2*k)) {
      n++
    }
  }
  console.log(`k = ${k}, n = ${n}`)
  total += n
}

// desc
console.log('Desc')
for (let k=1; k<=6; k++) {
  let n = 0
  for (let mm = 2*k; mm <= 12; mm++) {
    if (isValid(mm, mm - k, mm - 2*k)) {
      n++
    }
  }
  console.log(`k = ${k}, n = ${n}`)
  total += n
}

console.log(`Total: ${total}`)

