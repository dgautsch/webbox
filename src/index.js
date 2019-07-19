import { find } from 'lodash-es'

function simpleScript (query) {
  if (typeof query !== 'string') {
    throw new Error('query must be a string')
  }
  const properties = ['alpha', 'beta', 'delta', 'gamma']
  return find(properties, function (value) {
    return value === query
  })
}

console.log(simpleScript('delta'))
