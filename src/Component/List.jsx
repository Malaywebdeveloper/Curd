import React, { useEffect, useState } from "react";
import { deleteUser, getuser } from "../Api/Api";
import { Link } from "react-router-dom";
const List = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const res = await getuser();
    setData(res.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const removeItem = async (id) => {
    await deleteUser(id);
    fetchData();
  };
  return (
    <>
     <div className="head">
      <table>
       
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Delete</th>
              <th>Update</th>
            </tr>
          </thead>
       

        <tbody>
          {data.map((x) => {
            const { Name, age, email, phone, id } = x;
            return (
              <>
                <tr key={id}>
                  <td>{Name}</td>
                  <td>{age}</td>
                  <td>{email}</td>
                  <td>{phone}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => removeItem(id)}
                    >
                      delete
                    </button>
                  </td>
                  <td>
                    <Link to={`/Update/${id}`}>
                      <button className="btn btn-primary">update</button>
                    </Link>
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
      </div>
    </>
  );
};

export default List;
