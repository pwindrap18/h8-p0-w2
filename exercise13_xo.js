function xo(str){
  var xo=str
  
  var o=0
  var x=0
  
  for (i=0;i<=xo.length-1;i++){
    if (xo[i]==='x'){
      x=x+1
    } else if (xo[i]==='o') {
      o=o+1
    }
  }
  
  if (x===o){
    return true
  } else {
    return false
  }
}

console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true
