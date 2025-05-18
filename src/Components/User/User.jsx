import { Eye, Pencil, Trash2 } from "lucide-react";
import React, { useState } from "react";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";

const User = () => {
  const initialUsers = useLoaderData();
  const [users, setUsers] = useState(initialUsers);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/users/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("after delete", data);
            if (data.deletedCount) {
              const remainingUsers = users.filter((user) => user._id !== id);
              setUsers(remainingUsers);
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };

  return (
    <div className="overflow-x-auto mt-10 px-5">
      <h2 className="text-3xl font-bold mb-4">All Users: {users.length}</h2>
      <table className="table w-full">
        <thead>
          <tr>
            <th>No</th>
            <th>Avatar</th>
            <th>Name & Address</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Details-Edit-Deleted </th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user._id}>
              <th>{index + 1}</th>
              <td>
                <div className="avatar">
                  <div className="mask mask-squircle h-12 w-12">
                    <img
                      src={user.photo || "https://via.placeholder.com/48"}
                      alt={user.name}
                    />
                  </div>
                </div>
              </td>
              <td>
                <div className="font-bold">{user.name}</div>
                <div className="text-sm opacity-50">{user.address}</div>
              </td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <th>
                <div className="flex items-center space-x-3">
                  <button className="bg-[#D2B48C] p-2 rounded   ">
                    <Eye className="text-white w-5 h-5" />
                  </button>
                  <button className="bg-[#3C393B] p-2 rounded cursor-pointer">
                    <Pencil className="text-white w-5 h-5" />
                  </button>
                  <button
                    onClick={() => handleDelete(user._id)}
                    className="bg-[#EA4744] p-2 rounded cursor-pointer"
                  >
                    <Trash2 className="text-white w-5 h-5" />
                  </button>
                </div>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default User;
