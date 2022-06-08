function stringLength(string) {
  if (string.length > 1 && string.length <= 10){
  return string.length;
  }
}

function reverse(value) {  
  return Array.from(
    String(value || '')
  ).reverse().join('')
}

module.exports = stringLength;
// module.exports = reverse;