import axios from "axios";

const API_URL  = "https://checkingdb.herokuapp.com/api";

export const getUsers = () => {
    return axios.get(`${API_URL}/users`).then(({data}) => data.users);

};


