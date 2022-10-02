const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

function Segitiga1(num) {

    let star = "";
    for (let i = 0; i < num; i++) {
        for (let j =0; j <= i; j++) {
            star += "*";
        }
        star += "\n";
    }
    console.log(star);
}
readline.question('Masukkan Input : ', num => {
    console.log(result = Segitiga1(num))
})

// let star = "";
// for(let i = 10; i >= 1; i-- ){
//  for(let j = 0; j >= 1 - i; j-- ){
//   star += "*";
//  }
//  star += "\n";
// }
// console.log(star);