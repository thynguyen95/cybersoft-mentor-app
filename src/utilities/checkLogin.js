export default function checkLogin() {
    const user = JSON.parse(localStorage.getItem('user'));

    const tokenAccess = localStorage.getItem('tokenAccess');

    return user && tokenAccess;
}
