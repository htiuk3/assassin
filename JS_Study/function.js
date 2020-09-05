/**
 * Hàm (function) trong JS
 * 
 * 1. Một khối lệnh
 * - Làm 1 việc cụ thể
 * 2. Loại hàm
 * - Built-in
 * - Tự định nghĩa
 * 3. Tính chất
 * - Không thực thi khi định nghĩa
 * - sẽ thực thi khi gọi
 * - có thể nhận tham số
 * - có thể trả về 1 giá trị
 * 4. tạo hàm đầu tiên
 */
var a = 1;
var b = 2;
function sum(a,b){
    return a+b;
}
console.log(sum(a,b));