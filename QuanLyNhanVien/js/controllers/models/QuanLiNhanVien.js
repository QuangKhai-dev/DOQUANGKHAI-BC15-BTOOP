function QuanLiNhanVien () {
  this.array = [];
    
  this.themNhanVien = function(nv) {
    this.array.push(nv)
  }

  this.timViTri = function(taiKhoan) {
    var index = -1;
    for ( var i = 0; i < this.array.length; i++) {
      if ( this.array[i].taiKhoan === taiKhoan) {
        index = i;
        break;
      }
    }
    return index;
  }

  this.xoaNhanVien = function(taiKhoan) {
    var index = this.timViTri(taiKhoan);
    if (index != -1) {
      this.array.splice(index,1)
    }
  }

  this.suaNhanVien =function(taiKhoan) {
    var index = this.timViTri(taiKhoan);
    if ( index != -1) {
      return  this.array[index];
    }
  }

  this.capNhatNhanVien = function (nv) {
    var index = this.timViTri(nv.taiKhoan);
    if (index !== -1) {
    this.array[index] = nv;
    }
  };

  this.timKiemNhanVien = function (keyword) {
    var mangTimKiem = [];
    for (var i = 0; i < this.array.length; i++) {
    if (
      this.array[i].xepLoai.toLowerCase().indexOf(keyword.toLowerCase()) !== -1) {
      mangTimKiem.push(this.array[i]);
    }
  }
  return mangTimKiem;
  }
}