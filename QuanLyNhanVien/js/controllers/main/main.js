function getEle(id) {
  return document.getElementById(id);
}
var dsnv = new QuanLiNhanVien();
var validate = new Validation();

const minLuong = 1000000;
const maxLuong = 20000000;
const minGioLam = 80;
const maxGioLam = 200;



function layThongTinNhanVien (isAdd) {
  var _taiKhoan = getEle("tknv").value;
  var _hoVaTen = getEle("name").value;
  var _email = getEle("email").value;
  var _matKhau = getEle("password").value;
  var _ngayLam = getEle("datepicker").value;
  var _luongCB = getEle("luongCB").value;
  var _chucVu = getEle("chucvu").value;
  var _gioLam = getEle("gioLam").value;

  isValid = true;

  if (isAdd) {
  isValid &= validate.kiemTraRong(_taiKhoan,"tbTKNV","(*) vui lòng nhập tài khoản") &&
                   validate.kiemTraTaiKhoan(_taiKhoan,"tbTKNV","(*) tài khoản nhập từ 4-6 ký số", 4, 6) &&
                   validate.kiemTraTrungMaNhanVien(_taiKhoan,"tbTKNV","(*) tài khoản bị trùng", dsnv.array);
  }
  isValid &= validate.kiemTraRong(_hoVaTen, "tbTen","(*) vui lòng nhập họ và tên") &&
                   validate.kiemTraTenNhanVien(_hoVaTen, "tbTen","(*) họ và tên phải là chữ");
  
  isValid &= validate.kiemTraRong(_email, "tbEmail", "(*) vui lòng nhập email") &&
                   validate.kiemTraEmail(_email, "tbEmail", "(*) vui lòng nhập email");

  isValid &= validate.kiemTraRong(_matKhau, "tbMatKhau", "(*) vui lòng nhập mật khẩul") &&
                   validate.kiemTraMatKhau(_matKhau, "tbMatKhau", "(*) vui lòng nhập mật khẩu từ 6-10 ký tự (ít nhất 1 ký tự số, 1 in hoa, 1 đặc biệt)", 6, 10);

isValid &= validate.kiemTraRong(_ngayLam, "tbNgay","(*) vui lòng nhập ngày tháng") &&
                   validate.kiemTraNgayLam(_ngayLam, "tbNgay","(*) ngày tháng theo định dạng mm/dd/yyyy");

  isValid &= validate.kiemTraRong(_luongCB, "tbLuongCB", "(*) vui lòng nhập lương cơ bản") &&
                   validate.kiemTraLuongCoBan(_luongCB, "tbLuongCB", "(*) vui lòng nhập lương từ 5tr đến 20tr", minLuong, maxLuong); 
                   
  isValid &= validate.kiemTraChucVu("chucvu","tbChucVu", "(*) vui lòng chọn chức vụ");

  isValid &= validate.kiemTraRong(_gioLam,"tbGiolam", "(*) vui lòng nhập số giờ làm") &&
                   validate.kiemTraGioLam(_gioLam,"tbGiolam", "(*) vui lòng nhập số giờ làm từ " + minGioLam + " đến " +maxGioLam, minGioLam, maxGioLam);

  if(isValid) {
    var nhanVien = new NhanVien(_taiKhoan, _hoVaTen, _email, _matKhau, _ngayLam, _luongCB, _chucVu, _gioLam);
    return nhanVien;
  }
    return null;
}

function  renderListNhanVien(arr) {
  content =" ";
  for (var i = 0; i < arr.length; i++ ){
  content += `
  <tr>
        <td>${arr[i].taiKhoan}</td>
        <td>${arr[i].hoVaTen}</td>
        <td>${arr[i].email}</td>
        <td>${arr[i].ngayLam}</td>
        <td> ${arr[i].chucVu}</td>
        <td>${arr[i].tongLuong}</td>
        <td>${arr[i].xepLoai}</td>
        <td>
          <button class="btn btn-danger" onClick="xoaNhanVien('${arr[i].taiKhoan}')">Xóa</button>
          <button class="btn btn-success" onClick="suaNhanVien('${arr[i].taiKhoan}')">Sửa</button>
        </td>
 </tr>`;
}
getEle("tableDanhSach").innerHTML = content;
}


function xoaNhanVien(taiKhoan) {
  dsnv.xoaNhanVien(taiKhoan);
  renderListNhanVien(dsnv.array);
  setLocalStorage();
}

getEle("btnThemNV").onclick = function() {
  var nhanVien = layThongTinNhanVien(true);

  if (nhanVien) {
    nhanVien.tongLuong();
    nhanVien.xepLoai();
    dsnv.themNhanVien(nhanVien);
    renderListNhanVien(dsnv.array);
    getEle("btnDong").click();
    getEle("formNV").reset(); 
    setLocalStorage();
  }

}

// Sửa nhân viên
function suaNhanVien(taiKhoan) {
  console.log(taiKhoan);
  getEle("btnThem").click();
  var nhanVien = dsnv.suaNhanVien(taiKhoan);

  getEle("tknv").value = nhanVien.taiKhoan;
  getEle("tknv").disabled = true;
  getEle("name").value = nhanVien.hoVaTen;
  getEle("email").value = nhanVien.email;
  getEle("password").value = nhanVien.matKhau;
  getEle("datepicker").value = nhanVien.ngayLam;
  getEle("luongCB").value = nhanVien.luongCB;
  getEle("chucvu").value = nhanVien.chucVu;
  getEle("gioLam").value = nhanVien.gioLam;

}

//Cập nhật lại nhân viên
getEle("btnCapNhat").addEventListener("click", function(){
  var nhanVien = layThongTinNhanVien(false);

  if (nhanVien) {
    nhanVien.tongLuong();
    nhanVien.xepLoai();
    dsnv.capNhatNhanVien(nhanVien);
    renderListNhanVien(dsnv.array);
    setLocalStorage();
    getEle("tknv").disabled = false;
    getEle("btnDong").click();
    getEle("formNV").reset(); 
    }
})

getEle("searchName").addEventListener("keyup", function(){
  var keyWord = getEle("searchName").value;
  var mangTimKiem = dsnv.timKiemNhanVien(keyWord);
  console.log(mangTimKiem);
  renderListNhanVien(mangTimKiem);
})


/**
 * Lưu mảng sinh viên xuống local storage
 * chuyển kiểu JSON => string JSON.stringify 
 */

 function setLocalStorage () {
  var arraystring =  JSON.stringify( dsnv.array );
  localStorage.setItem("DSNV",arraystring)
}

/**
 * Lấy dssv từ local storage
 * chuyển kiểu string => JSON 
 */

 function getLocalStorage() {
  if ( localStorage.getItem("DSNV")) {
  var data = localStorage.getItem("DSNV");
  dsnv.array = JSON.parse(data);
  renderListNhanVien(dsnv.array);
  }
}
getLocalStorage();
