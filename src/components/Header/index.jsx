import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import checkLogin from './../../utilities/checkLogin';
import logo from '../../logo.svg';
import iconLogout from '../../assets/images/icon-logout.svg';

function Header() {
    let user;

    const checkAuth = checkLogin();
    if (checkAuth) {
        user = JSON.parse(localStorage.getItem('user'));
    }

    const history = useHistory();
    const logout = () => {
        localStorage.removeItem('user');
        localStorage.removeItem('tokenAccess');
        history.push('/dangnhap');
    };

    return (
        <header className='c-header'>
            <div className='c-header__inner'>
                <div className='c-header__logo'>
                    <NavLink className='' to='/'>
                        <img src={logo} alt='' />
                    </NavLink>
                </div>

                <div className='c-header__action'>
                    <div className='c-header__login'>{user.hoTen}</div>
                    <div className='c-header__logout' onClick={logout}>
                        <img src={iconLogout} alt='' />
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
