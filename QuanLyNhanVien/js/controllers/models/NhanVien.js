function NhanVien (_taiKhoan, _hoVaTen, _email, _matKhau, _ngayLam, _luongCB, _chucVu, _gioLam) {
  this.taiKhoan = _taiKhoan;
  this.hoVaTen = _hoVaTen;
  this.email = _email;
  this.matKhau = _matKhau;
  this.ngayLam = _ngayLam;
  this.luongCB = _luongCB;
  this.chucVu = _chucVu;
  this.gioLam = _gioLam;
  this.tongLuong = 0,
  this.xepLoai = "";

  // Phương thức
  this.tongLuong = function () {
    switch (this.chucVu) {
      case "Sếp":
        this.tongLuong = this.luongCB *3;
        break;
      case "Trưởng phòng":
        this.tongLuong = this.luongCB *2;
        break;
      case "Nhân viên":
        this.tongLuong = this.luongCB *1;
        break;
    }
  }

  this.xepLoai = function () {
    if ( this.gioLam >=192) {
      this.xepLoai = "Xuất Sắc";
    } else if ( this.gioLam < 192 && this.gioLam >=176) {
      this.xepLoai = "Giỏi";
    } else if ( this.gioLam < 176 && this.gioLam >=160) {
      this.xepLoai = "Khá";
    } else {
      this.xepLoai = "Trung Bình";
    }
  }

}