
const AddCoffee = () => {
    const handleSubmit=(event)=>{
        event.preventDefault();
        const form =event.target;
        const coffeeName= form.coffeeName.value;
        const quantity= form.quantity.value;
        const supplier= form.supplier.value;
        const taste= form.taste.value;
        const category= form.category.value;
        const details= form.details.value;
        const image= form.image.value;
        const coffeeData= {coffeeName,quantity,supplier,taste,category,details,image}
        console.log(coffeeData)
        fetch('http://localhost:5000/coffees',{
            method:'POST',
            headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(coffeeData)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
        })
        // form.reset();
        
    }
    return (
        <div className="bg-slate-100 p-10 rounded-md">
            <h2 className="text-3xl font-semibold text-center mb-4">Add a Coffee</h2>
            <div className="w-3/4 mx-auto">
                <form onSubmit={handleSubmit}>
                    <div className="flex flex-col gap-2">
                    <div className="flex gap-2">
                        <input type="text" name="coffeeName" id="" placeholder="coffee name" className="px-4 py-2 w-full border-2 rounded-md " />
                        <input type="text" name="quantity" id="" placeholder="Avilable Quantity" className="px-4 py-2 w-full border-2 rounded-md " />
                    </div>
                    <div className="flex gap-2">
                        <input type="text" name="supplier" id="" placeholder="Supplier name" className="px-4 py-2 w-full border-2 rounded-md " />
                        <input type="text" name="taste" id="" placeholder="Taste" className="px-4 py-2 w-full border-2 rounded-md " />
                    </div>
                    <div className="flex gap-2">
                        <input type="text" name="category" id="" placeholder="Category" className="px-4 py-2 w-full border-2 rounded-md " />
                        <input type="text" name="details" id="" placeholder="Details" className="px-4 py-2 w-full border-2 rounded-md " />
                    </div>
                    <input type="text" name="image" id="" placeholder="Image URL" className="px-4 py-2 w-full border-2 rounded-md " />
                    <input type="submit" value='submit' className="btn bg-slate-400" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddCoffee;