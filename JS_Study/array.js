/*
Mảng trong JS

1. Tạo mảng
- cách tạo
- sử dụng cách nào?
- Kiểm tra datatype
2. Truy xuất mảng
-Độ dài mảng
- Lấy phần tử theo index
 */

 var languages = [
     'Javascript',
     'PHP',
     'HTML'
 ] //Kiểu dữ liễu của Array là Object, muốn kiểm tra kiểu dữ liệu có phải mảng hay không dùng Array.isArray(<tên biến>)
//  console.log(Array.isArray(languages));
//  console.log(typeof languages);

 var arrLanguages = new Array(1,2,3); //Không nên dùng

 console.log(languages[1]);
 
 /**
  * 1. To String -> dược ngăn cách bởi dấy phẩy
  * 2. Join -> có thể truyền ký tự ngăn cách
  * 3. Pop -> Xóa phần tử cuối mảng, trả về phần tử đã xóa
  * 4. Push -> Thêm phần tử, trả về số phẩn tử mới của mảng
  * 5. Shift -> Xóa phần tử đầu mảng, trả về phẩn tử đã xóa
  * 6. Unshift -> thêm phần tử vào đầu mảng, trả về độ dài mới
  * 7. Splicing -> xóa, chèn phần tử vào mảng
  * 8. Concat -> hợp nhất mảng 2 vào mảng 1, arr1.concat(arr2)
  * 9. Slicing -> cắt mảng arr.slice(<bắt đầu>,<kết thúc>)
  */
 
  //console.log(languages.pop()) // xóa element cuối mảng và trả về phần tử đã xóa
  // Khi không còn phần tử để xóa, trả lại undefined
  // splice(<vị trí đặt con trỏ>, <số phần tử xóa>, từng phần tử chèn)
  //languages.splice(1, 1, 'Java');

  
  console.log(languages.slice(-2));