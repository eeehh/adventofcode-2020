const data = require('./data')
const time = require('../../scripts/timer')

function part1(data) {
  for (const num1 of data) {
    for (const num2 of data) {
      if (num1 + num2 === 2020) return num1 * num2
    }
  }
}

function part2(data) {
  for (const num1 of data) {
    for (const num2 of data) {
      for (const num3 of data) {
        if (num1 + num2 + num3 === 2020) return num1 * num2 * num3
      }
    }
  }
}

console.log('part 1:', time(part1, data))
console.log('part 2:', time(part2, data))