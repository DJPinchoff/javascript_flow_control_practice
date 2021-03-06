function isXor(arg1, arg2) {
  if ((!!arg1 === true && !!arg2 === false) ||
      (!!arg1 === false && !!arg2 === true)) {
    return true;
  }

  return false;
}

console.log(isXor(false, true));     // true
console.log(isXor(true, false));     // true
console.log(isXor(false, false));    // false
console.log(isXor(true, true));      // false


console.log(isXor(false, 3));        // true
console.log(isXor('a', undefined));  // true
console.log(isXor(null, ''));        // false
console.log(isXor('2', 23));         // false
