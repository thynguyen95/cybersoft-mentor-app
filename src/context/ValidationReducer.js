import { options } from './../constant/index';

const ValidationReducer = (state, action) => {
    switch (action.type) {
        case 'taiKhoan':
            return {
                ...state,
                values: {
                    ...state.values,
                    taiKhoan: action.payload,
                },
                errors: {
                    ...state.errors,
                    taiKhoan:
                        action.payload.length > 0
                            ? ''
                            : 'Vui lòng nhập tên tài khoản !',
                },
            };

        case 'hoTen':
            return {
                ...state,
                values: {
                    ...state.values,
                    hoTen: action.payload,
                },
                errors: {
                    ...state.errors,
                    hoTen:
                        action.payload.length > 0
                            ? ''
                            : 'Vui lòng nhập họ tên !',
                },
            };

        case 'email':
            let mess = '';
            const checkMail = action.payload.match(
                /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i
            );

            if (action.payload.length === 0) {
                mess = 'Vui lòng nhập email !';
            } else if (checkMail === null) {
                mess = 'Email không hợp lệ !';
            }
            return {
                ...state,
                values: {
                    ...state.values,
                    email: action.payload,
                },
                errors: {
                    ...state.errors,
                    email: mess,
                },
            };

        case 'soDt':
            let messPhone = '';
            const checkPhone = action.payload.match(
                /(84|0[3|5|7|8|9])+([0-9]{8})\b/g
            );

            if (action.payload.length === 0) {
                messPhone = 'Vui lòng nhập số điện thoại';
            } else if (checkPhone === null) {
                messPhone =
                    'Số điện thoại không hợp lệ. Vui lòng nhập đủ 10 số';
            }
            return {
                ...state,
                values: {
                    ...state.values,
                    soDt: action.payload,
                },
                errors: {
                    ...state.errors,
                    soDt: messPhone,
                },
            };

        case 'maNhom':
            return {
                ...state,
                values: {
                    ...state.values,
                    maNhom: action.payload,
                },
                errors: {
                    ...state.errors,
                    maNhom:
                        action.payload.length > 0
                            ? ''
                            : 'Vui lòng nhập mã nhóm',
                },
            };

        case 'maLoaiNguoiDung':
            return {
                ...state,
                values: {
                    ...state.values,
                    maLoaiNguoiDung: action.payload,
                },
                errors: {
                    ...state.errors,
                    maLoaiNguoiDung:
                        action.payload.length > 0
                            ? ''
                            : 'vui lòng nhập mã người dùng',
                },
            };

        case 'matKhau':
            let messPass = '';
            if (action.payload.length === 0) {
                messPass = 'Vui lòng nhập mật khẩu';
            } else if (action.payload.length < 8) {
                messPass = 'Mật khẩu ít nhất 8 ký tự';
            }
            return {
                ...state,
                values: {
                    ...state.values,
                    matKhau: action.payload,
                },
                errors: {
                    ...state.errors,
                    matKhau: messPass,
                },
            };

        default:
            return {
                ...state,
                values: {
                    taiKhoan: '',
                    hoTen: '',
                    email: '',
                    soDt: '',
                    maNhom: '',
                    maLoaiNguoiDung: options[0].value,
                    matKhau: '',
                },
                errors: {
                    taiKhoan: '',
                    hoTen: '',
                    email: '',
                    soDt: '',
                    maNhom: '',
                    maLoaiNguoiDung: '',
                    matKhau: '',
                },
            };
    }
};

export default ValidationReducer;
