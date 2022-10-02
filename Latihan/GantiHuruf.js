const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});
function ganti_kata(kata, cari, ganti) {
    // buat variabel string untuk hasil
    let result = "";
    // ubah string ke array agar bisa dimanipulasi
    let kata_object_arr = kata.split('');

    // looping sebanyak kata_object_arr
    for (var a = 0; a < kata.length; a++) {
        // jika kata_object_arr index ke-a itu sama dengan huruf_yang_dicari
        if (kata_object_arr[a] === cari) {
            // hapus kata_object_arr index ke-a
            kata_object_arr.splice(a, 1, ganti);
        }
        // tambahkan selalu kata_object index ke-a ke-result
        result += kata_object_arr[a];
    }
    // kembalikan hasil
    return console.log(result);
}

readline.question('Masukkan Kata : ', kata => {
    console.log('Kata Sebelumnya : ' + kata);
    console.log('Kata Sesudah diubah :');
    ganti_kata(kata, "a", "o");
});