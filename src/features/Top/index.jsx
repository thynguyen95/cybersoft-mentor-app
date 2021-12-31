import React from 'react';
import { Link } from 'react-router-dom';
import checkLogin from './../../utilities/checkLogin';

const Top = () => {
    const isLogged = checkLogin();

    return (
        <main className='p-top'>
            <section className='p-top__box'>
                <div className='l-container'>
                    <h1 className='c-title2'>Chào mừng bạn đến CyberSoft 🎉</h1>

                    {isLogged ? (
                        <ul className='c-list2'>
                            <li className='c-list2__item'>
                                <Link
                                    className='c-list2__txt'
                                    to='/laydanhsachnguoidung'
                                >
                                    Danh sách người dùng
                                </Link>
                            </li>

                            <li className='c-list2__item'>
                                <Link
                                    className='c-list2__txt'
                                    to='/themnguoidung'
                                >
                                    Thêm Người Dùng
                                </Link>
                            </li>
                        </ul>
                    ) : (
                        <p className='p-top__txt'>
                            Vui lòng <Link to='/dangnhap'>đăng nhập</Link>
                        </p>
                    )}
                </div>
            </section>
        </main>
    );
};

export default Top;
