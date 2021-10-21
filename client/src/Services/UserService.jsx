import axios from "axios";
 
// local routing for books api database
const USER_URL = 'http://localhost:8080/users/'
 
class UsersService{
    getUser = (name) => {
        return axios.get(USER_URL + name);
    };
    getAllUsers = () => {
        return axios.get(USER_URL);
    };
    postUsers = (object) => {
        return axios.post(USER_URL, object);
    };
    patchUsers = (object) => {
        return axios.patch(USER_URL, object);
    };
    deleteUsers = (username) =>{
        return axios.delete(USER_URL + username);
    };
}
 
export default new UsersService();