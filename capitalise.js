function capitalize(string){
  const m = string.toLowerCase();
  return m[0].toUpperCase() + m.slice(1);
};

module.exports = capitalize;