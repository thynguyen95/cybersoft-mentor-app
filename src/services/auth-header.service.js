import { token } from '../constant/index';

export default function authHeader() {
    const user = JSON.parse(localStorage.getItem('user'));

    const tokenAccess = localStorage.getItem('tokenAccess');

    return {
        'content-type': 'application/json',
        TokenCyberSoft: token,
        ...(user &&
            tokenAccess && {
                Authorization: `Bearer ${tokenAccess}`,
            }),
    };
}
