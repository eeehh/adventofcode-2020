const data = require('./data')
const time = require('../../scripts/timer')

function part1(data) {
  const min = Math.min.apply(null, data)
  const max = 2020 - min
  data = data.filter(d => d <= max).sort((a, b) => a - b)

  for (const num1 of data) {
    for (let i = 0; data[i] <= 2020 - num1; i++) {
      let num2 = data[i]
      if (num1 + num2 === 2020) return num1 * num2
    }
  }
}

function part2(data) {
  const min = Math.min.apply(null, data)
  const max = 2020 - min - min
  data = data.filter(d => d <= max).sort((a, b) => a - b)

  for (const num1 of data) {
    for (const num2 of data) {
      for (let i = 0; data[i] <= 2020 - num1 - num2; i++) {
        let num3 = data[i]
        if (num1 + num2 + num3 === 2020) return num1 * num2 * num3
      }
    }
  }
}

console.log('part 1:', time(part1, data))
console.log('part 2:', time(part2, data))