let mang = [-3, 5, -7, -4, 1, -9];
let mangKetQua = [];
for (let i = 0; i < mang.length; i++) {
    if (mang[i] < 0) {
    }
}
for (let j = 0; j < mang.length; j++) {
    if (mang[j] >= 0) {
        mangKetQua.push(mang[j]);
    }
}
console.log("Mảng sau khi di chuyển các phần tử âm lên đầu và dương về cuối:");
console.log(mangKetQua);
