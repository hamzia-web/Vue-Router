import axios from "axios";

export  class UserService {

    static serverUrl = `http://localhost:9000`;

    static getAllUsers(){
        //console.table(this.users)
        let dataUrl = `https://jsonplaceholder.typicode.com/users`
        return axios.get(dataUrl);
    }

    static getUser(userId){
        let dataUrl = `https://jsonplaceholder.typicode.com/users/${userId}`
        return axios.get(dataUrl);
    }

    // Below methods are meant for fetching data from db.json file
    static createUser(contact){
        let dataUrl = `${this.serverUrl}/users`;
        return axios.post(dataUrl, contact)
    }

    static getUsers(){
        let dataUrl = `${this.serverUrl}/users`;
        return axios.get(dataUrl)
    }
}
