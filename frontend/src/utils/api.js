import {config} from "./utils";
class Api {
    constructor(config) {
        this._url = config.url;
        this._headers = config.headers;
    }

    _getResponse(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    }

    getInitialCards() {
        return fetch(`${this._url}/cards`, {
            headers: this._headers
        })
            .then(this._getResponse)
    }

    getUserInfo() {
        return fetch(`${this._url}/users/me`, {
            headers: this._headers
        })
            .then(this._getResponse)
    }

    setUserInfo(data, jwt) {
        return fetch(`${this._url}/users/me`, {
            method: 'PATCH',
          headers: {
            authorization: `Bearer ${jwt}`,
            'Content-Type': 'application/json'
          },
            body: JSON.stringify({
                name: data.name,
                about: data.about
            })
        })
            .then(this._getResponse)
    }

    setCardServer(data, jwt) {
        return fetch(`${this._url}/cards`, {
            method: 'POST',
          headers: {
            authorization: `Bearer ${jwt}`,
            'Content-Type': 'application/json'
          },
            body: JSON.stringify({
                name: data.name,
                link: data.link
            })
        })
            .then(this._getResponse)
    }

  changeLikeCardStatus(cardId, isLiked, jwt) {
        console.log(jwt)
        return fetch(`${this._url}/cards/${cardId}/likes`, {
            method: isLiked ? 'PUT' : 'DELETE',
             headers: {
            authorization: `Bearer ${jwt}`,
            'Content-Type': 'application/json'
          }
        })
            .then(this._getResponse)
    }

    deleteCard(cardId, jwt) {
        return fetch(`${this._url}/cards/${cardId}`, {
            method: 'DELETE',
          headers: {
            authorization: `Bearer ${jwt}`,
            'Content-Type': 'application/json'
          }
        })
            .then(this._getResponse)
    }


    changeAvatar(data, jwt) {
        return fetch(`${this._url}/users/me/avatar`, {
            method: 'PATCH',
          headers: {
            authorization: `Bearer ${jwt}`,
            'Content-Type': 'application/json'
          },
            body: JSON.stringify({
                avatar: data.avatar,
            })
        })
            .then(this._getResponse)
    }
}

const api = new Api(config);
export default api;
