import React, { useEffect, useState } from "react";
import axios from "axios";
import Table from "../components/Table";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setUsers(response.data);
        setLoading(false);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="min-h-screen bg-purple-900 p-4 flex flex-col justify-center items-center">
      <h1 className="text-4xl pb-10 font-bold font-honk mb-4 text-white text-center">
        Users Dashboard
      </h1>
      {loading ? (
        <div className="flex flex-col justify-center items-center">
          <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-32 w-32 mb-4"></div>
          <p className="text-3xl font-extrabold text-gray-600">Loading...</p>
        </div>
      ) : (
        <div className="overflow-x-auto w-full">
          <Table data={users} />
        </div>
      )}
    </div>
  );
};

export default UserList;
