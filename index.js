// Tipe data String
const buah1 = "Apel";
const buah2 = "Pisang";
const buah3 = "Jeruk";

// Tipe data Boolean
const isBuahSegar1 = true;  // Apel segar
const isBuahSegar2 = false; // Pisang sudah busuk
const isBuahSegar3 = true;  // Jeruk segar

// Tipe data Number
const jumlahBuah1 = 10; // Jumlah apel
const jumlahBuah2 = 5;  // Jumlah pisang
const jumlahBuah3 = 8;  // Jumlah jeruk

// Tipe data Array
const daftarBuah = [buah1, buah2, buah3];

// Menampilkan data
console.log("Daftar Buah Segar:");
console.log(daftarBuah);

console.log(`Jumlah ${buah1}: ${jumlahBuah1}, Segar: ${isBuahSegar1}`);
console.log(`Jumlah ${buah2}: ${jumlahBuah2}, Segar: ${isBuahSegar2}`);
console.log(`Jumlah ${buah3}: ${jumlahBuah3}, Segar: ${isBuahSegar3}`);

// Menghitung total jumlah buah
const totalJumlahBuah = jumlahBuah1 + jumlahBuah2 + jumlahBuah3;
console.log(`Total jumlah buah: ${totalJumlahBuah}`);
// Tipe data BigInt
const jumlahApel = BigInt(1000); // Jumlah apel dalam BigInt
const jumlahJeruk = BigInt(2000); // Jumlah jeruk dalam BigInt

// Menghitung total jumlah buah menggunakan BigInt
const totalBuah = jumlahApel + jumlahJeruk;

// Menampilkan hasil
console.log(`Jumlah Apel: ${jumlahApel}`);
console.log(`Jumlah Jeruk: ${jumlahJeruk}`);
console.log(`Total Buah: ${totalBuah}`);

// Menggunakan operator typeof untuk memeriksa tipe data
console.log(`Tipe data jumlahApel: ${typeof jumlahApel}`); // "bigint"
console.log(`Tipe data jumlahJeruk: ${typeof jumlahJeruk}`); // "bigint"
console.log(`Tipe data totalBuah: ${typeof totalBuah}`); // "bigint"

// Contoh lain dengan tipe data campuran
const jumlahPisang = 500; // Tipe data Number
console.log(`Tipe data jumlahPisang: ${typeof jumlahPisang}`); // "number"

// Coba mengubah tipe data Number ke BigInt
const jumlahPisangBigInt = BigInt(jumlahPisang);
console.log(`Jumlah Pisang dalam BigInt: ${jumlahPisangBigInt}`);
console.log(`Tipe data jumlahPisangBigInt: ${typeof jumlahPisangBigInt}`); // "bigint"
