let a = parseInt(prompt("Nhập số nguyên dương a:"));
let b = parseInt(prompt("Nhập số nguyên dương b:"));
function laChiaHet(soChia, soBiChia) {
    return soChia % soBiChia === 0;
}
let mangKetQua = [];
for (let i = 1; i <= a; i++) {
    if (laChiaHet(i, b)) {
        mangKetQua.push(i);
    }
}
for (let j = 1; j <= b; j++) {
    if (laChiaHet(j, a)) {
        mangKetQua.push(j);
    }
}
console.log("Các số chia hết cho " + b + " trong khoảng từ 1 đến " + a + " hoặc các số chia hết cho " + a + " trong khoảng từ 1 đến " + b + ":");
console.log(mangKetQua);
