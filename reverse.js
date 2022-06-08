function reverse(value) {  
  return Array.from(
    String(value || '')
  ).reverse().join('')
}

module.exports = reverse;