let mang = [1,3,5,2,7,4];
let giaTriCanTim = parseInt(prompt("Nhập giá trị cần tìm kiếm:"));
let viTri = -1;
for (let i = 0; i < mang.length; i++) {
    if (mang[i] === giaTriCanTim) {
        viTri = i;
    }
}
if (viTri !== -1) {
    console.log("Phần tử được tìm thấy tại vị trí " + viTri);
} else {
    console.log("Phần tử không tồn tại trong mảng");
}
