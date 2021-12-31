import http from '../http-common';
import authHeader from '../services/auth-header.service';

class UsersDataService {
    getAll() {
        return http.get('/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01', {
            headers: authHeader(),
        });
    }
    addUser(user) {
        return http.post('/QuanLyNguoiDung/ThemNguoiDung', user, {
            headers: authHeader(),
        });
    }
}

export default new UsersDataService();
