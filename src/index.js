module.exports = function reverse (n) {
    let str = String(n);
    let strNew = "";
   if (str[0] !== '-') {  
  for (i = 0; i < str.length; i++) {
    strNew = str[i] + strNew;
}
    return strNew;
 } else {
    for (i = 0; i < str.length - 1; i++) {
    strNew = str[i+1] + strNew;
    }
    return strNew;
}
}
