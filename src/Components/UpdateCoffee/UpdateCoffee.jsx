import React from "react";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const { _id, name, quantity, supplier, taste, price, details, photo } =
    useLoaderData();
  const handleUpdateCoffee = (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    // console.log(formData.entries());
    const UpdateCoffee = Object.fromEntries(formData.entries());
    console.log(UpdateCoffee);

    fetch(`http://localhost:3000/coffees/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(UpdateCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          Swal.fire({
            title: "Success!",
            text: "New Coffee Update Successfully!",
            icon: "success",
            confirmButtonText: "OK",
          });
          // form.reset(); // ফর্ম খালি করে দেওয়া হচ্ছে
        }
      });
  };
  return (
    <div>
      <div className="p-24 bg-[#f4f3f0] mt-20 rounded-2xl">
        <div className="p-12 text-center space-y-4">
          <h1 className="text-6xl">Add Update Coffee</h1>
        </div>
        <form onSubmit={handleUpdateCoffee}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
              <label className="label">Name</label>
              <input
                type="text"
                name="name"
                defaultValue={name}
                className="input w-full"
                placeholder="Coffee Name"
              />
            </fieldset>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
              <label className="label">Quantity</label>
              <input
                type="text"
                name="quantity"
                defaultValue={quantity}
                className="input w-full"
                placeholder="Quantity coffee chef"
              />
            </fieldset>

            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
              <label className="label">Supplier</label>
              <input
                type="text"
                name="supplier"
                defaultValue={supplier}
                className="input w-full"
                placeholder="Enter coffee supplier "
              />
            </fieldset>

            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
              <label className="label">Taste</label>
              <input
                type="text"
                name="taste"
                defaultValue={taste}
                className="input w-full"
                placeholder="Enter coffee taste "
              />
            </fieldset>

            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
              <label className="label">Price</label>
              <input
                type="text"
                name="price"
                defaultValue={price}
                className="input w-full"
                placeholder="Enter coffee Price"
              />
            </fieldset>

            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
              <label className="label">Details</label>
              <input
                type="text"
                name="details"
                defaultValue={details}
                className="input w-full"
                placeholder="Enter coffee details"
              />
            </fieldset>
          </div>

          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4 my-6">
            <label className="label">Photo</label>
            <input
              type="text"
              name="photo"
              defaultValue={photo}
              className="input w-full"
              placeholder="Enter photo URL"
            />
          </fieldset>

          <input type="submit" className="btn w-full" value="Update Coffee" />
        </form>
      </div>
    </div>
  );
};

export default UpdateCoffee;
