import axios from "axios";
const url = " http://localhost:3000/user";

export const getuser = async (id) => {
  id=id || ""
  return await axios.get(`${url}/${id}`);
};

export const addUser = async (text) => {
  return await axios.post(url,text );
};

export const deleteUser = async (id) => {
  return await axios.delete(`${url}/${id}` );
};

export const updateUser = async (id,text) => {
  return await axios.put(`${url}/${id}`,text );
};

