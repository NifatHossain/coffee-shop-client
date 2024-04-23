import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const coffee = useLoaderData();
  const {
    _id,
    coffeeName,
    quantity,
    supplier,
    taste,
    category,
    details,
    image,
  } = coffee;

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const updatedCoffeeName = form.updatedCoffeeName.value;
    const updatedQuantity = form.updatedQuantity.value;
    const updatedSupplier = form.updatedSupplier.value;
    const updatedTaste = form.updatedTaste.value;
    const updatedCategory = form.updatedCategory.value;
    const updatedDetails = form.updatedDetails.value;
    const updatedImage = form.updatedImage.value;

    const updatedCoffee = {
      updatedCoffeeName,
      updatedQuantity,
      updatedSupplier,
      updatedTaste,
      updatedCategory,
      updatedDetails,
      updatedImage,
    };
    fetch(`http://localhost:5000/coffees/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedCoffee),
    })
      .then((res) => res.json())
      .then((data) =>{
        console.log(data)
        if(data.modifiedCount>0){
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Your work has been saved",
                showConfirmButton: false,
                timer: 1500
              });
        }
      });
  };

  return (
    <div className="bg-slate-100 p-10 rounded-md">
      <h2 className="text-3xl font-semibold text-center mb-4">Update Coffee</h2>
      <div className="w-3/4 mx-auto">
        <form onSubmit={handleUpdate}>
          <div className="flex flex-col gap-2">
            <div className="flex gap-2">
              <input
                type="text"
                name="updatedCoffeeName"
                id=""
                defaultValue={coffeeName}
                placeholder="coffee name"
                className="px-4 py-2 w-full border-2 rounded-md "
              />
              <input
                type="text"
                name="updatedQuantity"
                id=""
                defaultValue={quantity}
                placeholder="Avilable Quantity"
                className="px-4 py-2 w-full border-2 rounded-md "
              />
            </div>
            <div className="flex gap-2">
              <input
                type="text"
                name="updatedSupplier"
                id=""
                defaultValue={supplier}
                placeholder="Supplier name"
                className="px-4 py-2 w-full border-2 rounded-md "
              />
              <input
                type="text"
                name="updatedTaste"
                id=""
                defaultValue={taste}
                placeholder="Taste"
                className="px-4 py-2 w-full border-2 rounded-md "
              />
            </div>
            <div className="flex gap-2">
              <input
                type="text"
                name="updatedCategory"
                id=""
                defaultValue={category}
                placeholder="Category"
                className="px-4 py-2 w-full border-2 rounded-md "
              />
              <input
                type="text"
                name="updatedDetails"
                id=""
                defaultValue={details}
                placeholder="Details"
                className="px-4 py-2 w-full border-2 rounded-md "
              />
            </div>
            <input
              type="text"
              name="updatedImage"
              id=""
              defaultValue={image}
              placeholder="Image URL"
              className="px-4 py-2 w-full border-2 rounded-md "
            />
            <input
              type="submit"
              value="Update coffee"
              className="btn bg-slate-400"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateCoffee;
