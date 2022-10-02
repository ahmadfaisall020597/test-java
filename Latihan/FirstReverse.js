const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

function FirstReverse(str) {

  var newStr = '';
  for (var i = 0; i < str.length; i++) {
    newStr = str[i] + newStr;
  }
  return newStr;
}
readline.question('Masukkan input : ', str => {
  console.log(result = FirstReverse(str));
})
// readline.question('Masukkan input : ', str => {
//   const result = FirstReverse(str);
//   console.log(result);
// })