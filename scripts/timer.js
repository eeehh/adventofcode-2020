// A simple function to time the execution of a nested function, passing all arguments through

const { performance } = require('perf_hooks')

function time(fn) {
  const start = performance.now()
  const result = fn.apply(null, Array.from(arguments).splice(1))
  return { result, time: Math.round((performance.now() - start) * 100) / 100 }
}

module.exports = time