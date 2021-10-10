
const  jwt = localStorage.getItem('jwt')
export const config = {
    url: 'https://api.mesto.glazkovpavel.nomoredomains.club',
    headers: {
        authorization: `Bearer ${jwt}`,
        'Content-Type': 'application/json'
    }
};
