import axios from "axios";

const API_URL  = "https://checkingdb.herokuapp.com/api";

export const getUsers = () => {
    return axios.get(`${API_URL}/users`).then(({data}) => data.users);

};

export const getLists = () => {
    return axios.get(`${API_URL}/lists`).then(({data}) => data.lists);

};

export const postUser = async (object, firstName, lastName, phone, email ) => {
    return axios
      .post(`${API_URL}/users`, { object, firstName, lastName, phone, email })
      .then(({ data }) => data.users);
  };


