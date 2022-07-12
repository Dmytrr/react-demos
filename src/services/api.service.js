class ApiService {

    _url = 'https://jsonplaceholder.typicode.com'

    getPosts(){
        return fetch(`${this._url}/posts`).then(value => value.json())
    }

    getComments(){
        return fetch(`${this._url}/comments`).then(value => value.json())
    }

}

export default ApiService;