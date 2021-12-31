import { Route, Switch, withRouter } from 'react-router-dom';
import Header from './components/Header/index';
import ListUsers from './features/Users/Page/ListUsers/index';
import AddUser from './features/Users/Page/AddUser/index';
import Login from './features/Login/index';
import checkLogin from './utilities/checkLogin';
import PrivateRoute from './PrivateRoute';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Top from './features/Top/index';

function App() {
    const isLogged = checkLogin();

    return (
        <div className='App'>
            {isLogged && <Header />}

            <Switch>
                <PrivateRoute
                    authenticated={isLogged}
                    path='/laydanhsachnguoidung'
                    render={(props) => <ListUsers {...props} />}
                />

                <PrivateRoute
                    authenticated={isLogged}
                    path='/themnguoidung'
                    render={(props) => <AddUser {...props} />}
                />

                <Route path='/' component={Top} exact />
                <Route path='/dangnhap' component={Login} exact />
            </Switch>

            <ToastContainer
                position='top-right'
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            {/* Same as */}
            <ToastContainer />
        </div>
    );
}

export default withRouter(App);
