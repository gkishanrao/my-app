import axios from 'axios';

const USER_API_BASE_URL= "http://localhost:8081/catalog/getCataLog";

class UserService{
    getUserDetails(){
        return axios.get(USER_API_BASE_URL);
    }
    

}
export default new UserService();