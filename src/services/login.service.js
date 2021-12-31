import http from '../http-common';
import authHeader from '../services/auth-header.service';

class LoginDataService {
    login(userLogin) {
        return http.post('/QuanLyNguoiDung/DangNhap', userLogin, {
            headers: authHeader(),
        });
    }
}

export default new LoginDataService();
