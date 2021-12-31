import React, { useEffect, useReducer } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { addUser } from '../../../../services/common.service';
import ValidationReducer from './../../../../context/ValidationReducer';
import checkLogin from './../../../../utilities/checkLogin';
import { toast } from 'react-toastify';
import { options } from './../../../../constant/index';

function AddUser() {
    const initValue = {
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

    const history = useHistory();

    useEffect(() => {
        const check = checkLogin();

        if (!check) {
            history.push('/dangnhap');
        }
    }, []);

    const [state, dispatchValidation] = useReducer(
        ValidationReducer,
        initValue
    );

    const FormValidation = () => {
        const isValueEmpty = Object.values(state.values).every((x) => x !== '');
        const isErrorEmpty = Object.values(state.errors).every((x) => x === '');

        return isValueEmpty && isErrorEmpty;
    };

    const dispatch = useDispatch();

    const handleChange = (e) => {
        const value = e.target.value;

        dispatchValidation({
            type: e.target.name,
            payload: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addUser(state.values)).then((e) => {
            if (e.payload.statusCode === 200) {
                toast.success(e.payload.message);
                dispatchValidation({
                    type: 'Reset',
                    payload: initValue,
                });
            }
        });
    };

    return (
        <main className='p-add'>
            <section className='c-mv'>
                <h1 className='c-mv__ttl'>Thêm Người Dùng</h1>
            </section>

            <div className='p-add__wrap'>
                <div className='l-container'>
                    <div className='c-btn2'>
                        <Link
                            className='c-btn2__txt'
                            to='/laydanhsachnguoidung'
                        >
                            Danh sách người dùng
                        </Link>
                    </div>

                    <form className='c-form' onSubmit={handleSubmit}>
                        <div className='c-form__group'>
                            <label htmlFor='taiKhoan' className='c-form__name'>
                                Tài Khoản
                            </label>
                            <input
                                type='text'
                                name='taiKhoan'
                                placeholder='admin'
                                value={state.values.taiKhoan}
                                onChange={handleChange}
                            />
                            {state.errors.taiKhoan.length > 0 ? (
                                <span className='error'>
                                    {state.errors.taiKhoan}
                                </span>
                            ) : (
                                ''
                            )}
                        </div>
                        <div className='c-form__group'>
                            <label htmlFor='hoTen' className='c-form__name'>
                                Họ Tên
                            </label>
                            <input
                                type='text'
                                name='hoTen'
                                placeholder='Nguyễn Văn A'
                                value={state.values.hoTen}
                                onChange={handleChange}
                            />
                            {state.errors.hoTen.length > 0 ? (
                                <span className='error'>
                                    {state.errors.hoTen}
                                </span>
                            ) : (
                                ''
                            )}
                        </div>
                        <div className='c-form__group'>
                            <label htmlFor='email' className='c-form__name'>
                                Email
                            </label>
                            <input
                                type='email'
                                name='email'
                                placeholder='example@gmail.com'
                                value={state.values.email}
                                onChange={handleChange}
                            />
                            {state.errors.email.length > 0 ? (
                                <span className='error'>
                                    {state.errors.email}
                                </span>
                            ) : (
                                ''
                            )}
                        </div>
                        <div className='c-form__group'>
                            <label htmlFor='soDt' className='c-form__name'>
                                Số Điện Thoại
                            </label>
                            <input
                                type='tel'
                                name='soDt'
                                placeholder='0901234567'
                                value={state.values.soDt}
                                onChange={handleChange}
                            />
                            {state.errors.soDt.length > 0 ? (
                                <span className='error'>
                                    {state.errors.soDt}
                                </span>
                            ) : (
                                ''
                            )}
                        </div>
                        <div className='c-form__group'>
                            <label htmlFor='maNhom' className='c-form__name'>
                                Mã Nhóm
                            </label>
                            <input
                                type='text'
                                name='maNhom'
                                placeholder='GP01'
                                value={state.values.maNhom}
                                onChange={handleChange}
                            />
                            {state.errors.maNhom.length > 0 ? (
                                <span className='error'>
                                    {state.errors.maNhom}
                                </span>
                            ) : (
                                ''
                            )}
                        </div>
                        <div className='c-form__group'>
                            <label
                                htmlFor='maLoaiNguoiDung'
                                className='c-form__name'
                            >
                                Mã Loại Người Dùng
                            </label>
                            <select
                                name='maLoaiNguoiDung'
                                value={state.values.maLoaiNguoiDung}
                                onChange={handleChange}
                            >
                                {options.map(({ value, label }, index) => (
                                    <option value={value} key={index}>
                                        {label}
                                    </option>
                                ))}
                            </select>
                            {state.errors.maLoaiNguoiDung.length > 0 ? (
                                <span className='error'>
                                    {state.errors.maLoaiNguoiDung}
                                </span>
                            ) : (
                                ''
                            )}
                        </div>
                        <div className='c-form__group'>
                            <label htmlFor='matKhau' className='c-form__name'>
                                Mật khẩu
                            </label>
                            <input
                                type='password'
                                name='matKhau'
                                placeholder='Vui lòng nhập mật khẩu'
                                value={state.values.matKhau}
                                onChange={handleChange}
                            />
                            {state.errors.matKhau.length > 0 ? (
                                <span className='error'>
                                    {state.errors.matKhau}
                                </span>
                            ) : (
                                ''
                            )}
                        </div>
                        <div className='c-form__group'>
                            <button
                                className={`c-form__btn ${
                                    !FormValidation() ? 'disable' : ''
                                } `}
                                type='submit'
                            >
                                Thêm Người Dùng
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    );
}

export default AddUser;
