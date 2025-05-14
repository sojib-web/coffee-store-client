import React from "react";
import { Eye, Pencil, Trash2 } from "lucide-react";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee }) => {
  const { _id, name, chef, price, photo } = coffee;

  const handleDelete = (_id) => {
    console.log(_id);
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
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };

  return (
    <div className="flex items-center justify-between bg-[#F5F4F1] rounded-xl p-4 gap-4">
      {/* Image */}
      <img
        src={photo}
        alt={name}
        className="w-32 h-32 object-contain rounded-lg"
      />

      {/* Info */}
      <div className="flex-1 space-y-1">
        <h2>
          <span className="font-semibold">Name:</span>{" "}
          <span className="text-gray-700">{name}</span>
        </h2>
        <h2>
          <span className="font-semibold">Chef:</span>{" "}
          <span className="text-gray-700">{chef}</span>
        </h2>
        <h2>
          <span className="font-semibold">Price:</span>{" "}
          <span className="text-gray-700">{price} Taka</span>
        </h2>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col gap-2">
        <button className="bg-[#D2B48C] p-2 rounded">
          <Eye className="text-white w-5 h-5" />
        </button>
        <button className="bg-[#3C393B] p-2 rounded">
          <Pencil className="text-white w-5 h-5" />
        </button>
        <button
          onClick={() => handleDelete(_id)}
          className="bg-[#EA4744] p-2 rounded cursor-pointer"
        >
          <Trash2 className="text-white w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default CoffeeCard;
