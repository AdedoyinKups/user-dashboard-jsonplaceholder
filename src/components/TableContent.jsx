import React from "react";

const TableContent = ({ data }) => (
  <table className="w-full border-collapse border rounded-lg overflow-hidden shadow-sm" aria-label="User data table">
    <thead>
      <tr className="bg-indigo-500 text-white">
        <th className="p-2 text-center">Name</th>
        <th className="p-2 text-center">Email</th>
        <th className="p-2 text-center">Company</th>
        <th className="p-2 text-center">Phone</th>
      </tr>
    </thead>
    <tbody>
      {data.map((user) => (
        <tr key={user.id} className="border-t hover:bg-gray-100">
          <td className="p-2 text-center">{user.name}</td>
          <td className="p-2 text-center">{user.email}</td>
          <td className="p-2 text-center">{user.company.name}</td>
          <td className="p-2 text-center">{user.phone}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default TableContent;