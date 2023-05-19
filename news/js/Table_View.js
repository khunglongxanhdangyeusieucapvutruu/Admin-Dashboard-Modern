
const viewButton = document.getElementById('view-btn');
const myTable = document.getElementById('my-table');
const closeButton = document.getElementById('close-button');

viewButton.addEventListener('click', function() {
  myTable.classList.remove('hidden');
});

closeButton.addEventListener('click', function() {
  myTable.classList.add('hidden');
});

// Kiểm tra xem trạng thái của biến `showTable` đã được lưu trong sessionStorage hay chưa
let showTable = sessionStorage.getItem('showTable');

if (showTable === null) {
  // Nếu chưa được lưu, khởi tạo biến `showTable` với giá trị mặc định là `false`
  showTable = false;
} else {
  // Nếu đã được lưu, chuyển đổi giá trị của biến `showTable` thành boolean
  showTable = JSON.parse(showTable);
}

// Cập nhật trạng thái của bảng dựa trên giá trị của biến `showTable`
if (showTable) {
  myTable.classList.remove('hidden');
} else {
  myTable.classList.add('hidden');
}

// Lắng nghe sự kiện click trên nút View
viewButton.addEventListener('click', function() {
  myTable.classList.remove('hidden');
  // Lưu trạng thái của biến `showTable` vào sessionStorage
  sessionStorage.setItem('showTable', true);
});

// Lắng nghe sự kiện click trên nút Close
closeButton.addEventListener('click', function() {
  myTable.classList.add('hidden');
  // Lưu trạng thái của biến `showTable` vào sessionStorage
  sessionStorage.setItem('showTable', false);
});