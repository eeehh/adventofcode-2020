const data = require('./data')
const time = require('../../scripts/timer')

function part1(data) {
  function check(password) {
    const letter = password.split(' ')[1].replace(':', '')
    const bounds = password.split(' ')[0].split('-').map(n => Number(n))
    const appearances = password.split(': ')[1].split('').filter(l => l === letter).length
    return (appearances >= bounds[0] && appearances <= bounds[1])
  }
  
  return data.reduce((t, c) => t + Number(check(c)), 0)
}

function part2(data) {
  function check(password) {
    const letter = password.split(' ')[1].replace(':', '')
    const indexes = password.split(' ')[0].split('-').map(n => Number(n))
    const appearances = password.split(': ')[1].split('').filter((l, i) => indexes.includes(i + 1) && l === letter).length
    return appearances === 1
  }
  
  return data.reduce((t, c) => t + Number(check(c)), 0)
}

console.log('part 1:', time(part1, data))
console.log('part 2:', time(part2, data))