let mang = [1, 2, 3, 4, 5, 6];
let soNguyen = false;
for (let i = 0; i < mang.length; i++) {
    if (Number.isInteger(mang[i])) {
        console.log(mang[i]);
        soNguyen = true;
    }
}
if (!soNguyen) {
    console.log("Trong mảng không tồn tại số nguyên");
}
