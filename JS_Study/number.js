/*
Kiểu số (Number) trong JS

1. Tạo giá trị Number
- Các cách tạo
- Dùng cách nào? Tại sao?
- Kiểm tra datatype
2. Làm việc với Number
- To String abc.toString()  -> chuyển số thành dạng chuỗi
- To Fixed abc.toFixed(<số thập phân>) ->làm tròn số thập phân, kq là kiểu chuỗi
*/

var age = 26;
var PI = 3.14;

var otherNumber = new Number(9);

console.log(typeof(otherNumber)); // dung new tao ra kieu object

// NaN : đại diện cho một số không hợp lệ

var result = 20 /'a';
console.log(isNaN(result)); // Kiểm tra xem kiểu số ko hợp lệ không

console.log(PI.toFixed(3));