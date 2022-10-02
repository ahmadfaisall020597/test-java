// Soal :

// Mintalah fungsi FirstFactorial( num ) mengambil parameter num yang diteruskan dan mengembalikan faktorialnya. Misalnya: jika num = 4,
// maka program Anda harus mengembalikan (4 * 3 * 2 * 1) = 24.
// Untuk kasus uji, kisarannya antara 1 dan 18 dan input akan selalu berupa bilangan bulat.

function FirstFactorial(num) {

  if (num > 0) {
              return num * FirstFactorial(num - 1);
      } else {
              return 1;
      }
  }
  console.log(FirstFactorial(readline()));