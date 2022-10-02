const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});
function Segitiga(num) {
    let string = "";

    for (let i = 1; i <= num; i++) {
        // untuk mengatur jarak
        for (let j = 1; j <= num - i; j++) {
            string += " ";
        }
        // nge-print bintangnya
        for (let k = 0; k < 2 * i - 1; k++) {
            string += "*";
        }
        string += "\n";
    }
    console.log(string);
}
readline.question('Masukkan Input : ', num => {
    console.log(result = Segitiga(num))
})