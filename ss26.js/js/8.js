function timCacYeuToTrungLap(let) {
    const elementCount = {};
    let.forEach(element => {
        elementCount[element] = (elementCount[element] || 0) + 1;
    });
    for (const element in elementCount) {
        if (elementCount.hasOwnProperty(element) && elementCount[element] >= 2) {
            console.log(`Phần tử ${element} xuất hiện ${elementCount[element]} lần`);
        }
    }
}
const myletay = [6, 1, 3, 4, 2, 5, 6, 1, 7, 8, 9, 2];
timCacYeuToTrungLap(myletay);
