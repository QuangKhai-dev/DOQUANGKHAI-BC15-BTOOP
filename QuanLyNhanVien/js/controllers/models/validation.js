function Validation() {
  this.kiemTraRong = function(input, divId, mess) {
    //check nhập
    if (input.trim() === "") {
      getEle(divId).innerHTML = mess;
      getEle(divId).style.display = "block";
      return false;
    } else {
      getEle(divId).innerHTML = "";
      return true;
    }
  }

  this.kiemTraTaiKhoan = function(input, divId, mess, min, max) {
    var regex = /^[0-9]+$/;
    if ( input.length >= min && input.length <= max && input.match(regex) ) {
      getEle(divId).innerHTML = "";
      return true;
    } else {
      getEle(divId).innerHTML = mess;
      getEle(divId).style.display = "block";
      return false;
    }
  }

  this.kiemTraTenNhanVien = function(input, divId, mess) {
    var regex = "^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" +
    "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" +
    "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$";
    if ( input.match(regex)) {
      getEle(divId).innerHTML = "";
      return true;
    } else {
      getEle(divId).innerHTML = mess;
      getEle(divId).style.display = "block";
      return false;
    }
  }

  this.kiemTraEmail = function(input, divId, mess) {
    var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if ( input.match(regex)) {
      getEle(divId).innerHTML = "";
      return true;
    } else {
      getEle(divId).innerHTML = mess;
      getEle(divId).style.display = "block";
      return false;
    }
  }

  this.kiemTraMatKhau = function(input, divId, mess, min, max) {
    var regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{0,}$/
    if ( input.length >= min && input.length <= max && input.match(regex)) {
      getEle(divId).innerHTML = "";
      return true;
    } else {
      getEle(divId).innerHTML = mess;
      getEle(divId).style.display = "block";
      return false;
    }
  }

  this.kiemTraNgayLam = function(input, divId, mess) {
    var regex =/^(0?[1-9]|1[0-2])\/(0?[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/;
    if ( input.match(regex)) {
      getEle(divId).innerHTML = "";
      return true;
    } else {
      getEle(divId).innerHTML = mess;
      getEle(divId).style.display = "block";
      return false;
    }
  }

  this.kiemTraLuongCoBan = function(input, divId, mess, min, max){
    var regex = /^[0-9]+$/;
    if ( input >= min && input <= max && input.match(regex) ) {
      getEle(divId).innerHTML = "";
      return true;
    } else {
      getEle(divId).innerHTML = mess;
      getEle(divId).style.display = "block";
      return false;
    }
  }

  this.kiemTraChucVu = function(idSelect, divId, mess) {
    if (getEle(idSelect).selectedIndex != 0) {
      getEle(divId).innerHTML = " ";
      return true;
    } else {
      getEle(divId).innerHTML = mess;
      getEle(divId).style.display = "block";
      return false;
    }
  }

  this.kiemTraGioLam = function(input, divId, mess, min, max){
    var regex = /^[0-9]+$/;
    if ( input >= min && input <= max && input.match(regex) ) {
      getEle(divId).innerHTML = "";
      return true;
    } else {
      getEle(divId).innerHTML = mess;
      getEle(divId).style.display = "block";
      return false;
    }
  }

  this.kiemTraTrungMaNhanVien = function (input, divId, mess, arr) {
    /**
     * 0 tạo biến flag
     * 1 Duyệt mảng
     * 2 nếu như item.MaSV trùng với input
     *    => trùng mã  => false
     * 3 ko trùng => true
     */
    var isStatus = true;
    for (var i = 0; i < arr.length; i++) {
      if (arr[i].taiKhoan === input) {
        isStatus = false;
      }
    }

    if (isStatus) {
      getEle(divId).innerHTML = " ";
      return true;
    }
    getEle(divId).innerHTML = mess;
    getEle(divId).style.display = "block";
      return false;
  }
}