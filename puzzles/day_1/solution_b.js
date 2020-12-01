const data = require('./data')
const time = require('../../scripts/timer')

function part1(data) {
  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < i; j++) {
      const num1 = data[i], num2 = data[j]
      if (num1 + num2 === 2020) return num1 * num2
    }
  }
}

function part2(data) {
  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < i; j++) {
      for (let k = 0; k < j; k++) {
        let num1 = data[i], num2 = data[j], num3 = data[k]
        if (num1 + num2 + num3 === 2020) return num1 * num2 * num3
      }
    }
  }
}

console.log('part 1:', time(part1, data))
console.log('part 2:', time(part2, data))