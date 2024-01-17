let mang = [7, 2, 4, 8, 4, 5, 2, 4, 1];
let soCanTim = parseInt(prompt("Nhập số nguyên cần kiểm tra:"));
let soLanXuatHien = mang.reduce(function (soLanXuatHien, phanTu) {
    if (phanTu === soCanTim) {
        return soLanXuatHien + 1;
    } else {
        return soLanXuatHien;
    }
}, 0);
console.log("Số " + soCanTim + " xuất hiện " + soLanXuatHien + " lần trong mảng.");
