import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffeeData,coffees, setCoffees }) => {
  const {
    _id,
    coffeeName,
    quantity,
    supplier,
    taste,
    category,
    details,
    image,
  } = coffeeData;

  const handleDelete = (_id) => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });
    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          fetch(`http://localhost:5000/coffees/${_id}`, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => {
                if(data.deletedCount>0){
                    const remaining= coffees.filter(cofe=>cofe._id!==_id)
                    setCoffees(remaining);
                    swalWithBootstrapButtons.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success",
                      });
                }
            });
          
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire({
            title: "Cancelled",
            text: "Your imaginary file is safe :)",
            icon: "error",
          });
        }
      });
  };
  return (
    <div>
      <div className="flex p-5 border bg-slate-100 rounded-md">
        <img className="w-1/2" src={image} alt="" />
        <div className="flex items-center gap-2">
          <div className="flex flex-col gap-3">
            <p className="text-xl font-semibold">Name: {coffeeName}</p>
            <p className="text-xl font-semibold">Origin: {supplier}</p>
            <p className="text-xl font-semibold">Taste: {taste}</p>
          </div>
          <div className="flex flex-col gap-3">
            <button className="btn">view</button>
            <Link to={`/coffees/${_id}`}><button className="btn">edit</button></Link>
            <button onClick={() => handleDelete(_id)} className="btn">
              delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
