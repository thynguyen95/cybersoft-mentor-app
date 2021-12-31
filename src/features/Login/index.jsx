import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { login } from '../../services/common.service';
import iconUser from '../../assets/images/icon-user.svg';
import iconLock from '../../assets/images/icon-lock.svg';
import Logo from '../../logo.svg';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            values: {
                taiKhoan: '',
                matKhau: '',
            },
            errors: {
                taiKhoan: '',
                matKhau: '',
            },
        };
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        const { values, errors } = this.state;
        let formObj = {};

        formObj = {
            ...values,
            [name]: value,
        };

        this.setState({ values: formObj }, () => {
            if (!Object.keys(errors).includes(name)) return;
            let formErrorsObj = {};

            const errorMsg = this.validateField(name, value);
            formErrorsObj = { ...errors, [name]: errorMsg };

            this.setState({ errors: formErrorsObj });
        });
    };

    validateField = (name, value) => {
        let errorMsg = null;
        switch (name) {
            case 'taiKhoan':
                if (!value) errorMsg = 'Vui lòng nhập tài khoản !';
                break;

            case 'matKhau':
                if (!value) errorMsg = 'Vui lòng nhập mật khẩu !';
                break;

            default:
                break;
        }
        return errorMsg;
    };

    FormValidation = () => {
        const isValueEmpty = Object.values(this.state.values).every(
            (x) => x !== null
        );
        const isErrorEmpty = Object.values(this.state.errors).every(
            (x) => x === null
        );
        return isValueEmpty && isErrorEmpty;
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.login(this.state.values, this.props);
    };

    render() {
        return (
            <main className='p-login'>
                <div className='p-login__box'>
                    <div className='p-login__logo'>
                        <Link to='/'>
                            <img src={Logo} alt='' />
                        </Link>
                    </div>
                    <h2 className='c-title1'>Đăng Nhập</h2>
                    <form className='c-form login' onSubmit={this.handleSubmit}>
                        {this.props.messError && (
                            <span className='error'>
                                {this.props.messError}
                            </span>
                        )}

                        <div className='c-form__group'>
                            <div className='c-form__box'>
                                <label
                                    htmlFor='taiKhoan'
                                    className='c-form__icon'
                                >
                                    <img src={iconUser} alt='' />
                                </label>

                                <input
                                    type='text'
                                    name='taiKhoan'
                                    placeholder='Vui lòng nhập tài khoản'
                                    value={this.state.values.taiKhoan}
                                    onChange={(e) => this.handleChange(e)}
                                />
                            </div>
                            {this.state.errors.taiKhoan && (
                                <span className='error'>
                                    {this.state.errors.taiKhoan}
                                </span>
                            )}
                        </div>
                        <div className='c-form__group'>
                            <div className='c-form__box'>
                                <label htmlFor='hoTen' className='c-form__icon'>
                                    <img src={iconLock} alt='' />
                                </label>
                                <input
                                    type='password'
                                    name='matKhau'
                                    placeholder='Vui lòng nhập mật khẩu'
                                    value={this.state.values.matKhau}
                                    onChange={this.handleChange}
                                />
                            </div>
                            {this.state.errors.matKhau && (
                                <span className='error'>
                                    {this.state.errors.matKhau}
                                </span>
                            )}
                        </div>
                        <div className='c-form__group'>
                            <button
                                className={`c-form__btn ${
                                    !this.FormValidation() ? 'disable' : ''
                                } `}
                                type='submit'
                            >
                                Login
                            </button>
                        </div>
                    </form>
                </div>
            </main>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        login: (state, props) => {
            dispatch(login(state)).then((e) => {
                if (e.payload?.statusCode === 200) {
                    props.history.push('/laydanhsachnguoidung');
                }
            });
        },
    };
};
const mapStateToProps = (state) => {
    return {
        messError: state.login.message,
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
