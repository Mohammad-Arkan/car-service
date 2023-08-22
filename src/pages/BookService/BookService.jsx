// import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
// import { AuthContext } from "../../Provider/AuthProvider";

const BookService = () => {
    const service = useLoaderData()
    const {title, price, img, _id, } = service
    // const {user} = useContext(AuthContext)
    const handleBookService =(e)=> {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const date = form.date.value;
        const phone = form.phone.value;
        const amount = form.amount.value;
        const message = form.message.value
     const booking = {
        img,
        service_id: _id,
        name,
        date,
        phone,
        amount,
        message,
        title
        
     }
        console.log(booking)

     fetch('http://localhost:5000/bookings', {
        method:'POST',
        headers:{
            'content-type':"application/json",
        },
        body:JSON.stringify(booking)
     })
     .then(res => res.json())
     .then(data => {
        console.log(data)
        if(data.insertedId){
            alert('service booking successful')
        }
     })
    }
    return (
        <div>
        <h2 className="text-center text-3xl pb-5">Booking Service: {title}</h2>
 <form onSubmit={handleBookService} className="p-20 bg-gray-300">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 ">  
     <div className="form-control">
      <label className="label">
        <span className="label-text">Full Name</span>
      </label>
      <input type="text" name="name" placeholder="Full Name" className="input input-bordered" />
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Date</span>
      </label>
      <input type="date" name="date" placeholder="date" className="input input-bordered" />
     
    </div>
     <div className="form-control">
      <label className="label">
        <span className="label-text">Your Phone</span>
      </label>
      <input type="text" name="phone" placeholder="Your Phone" className="input input-bordered" />
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Amount</span>
      </label>
      <input type="text" name="amount" placeholder="Amount" defaultValue={'$'+ price} className="input input-bordered" />
    </div>
    </div>

      <div className="form-control">
      <label className="label">
        <span className="label-text">Comments</span>
      </label>
      <textarea name="message" id="" cols="30" rows="10" placeholder="Your Message"></textarea>
     
    </div>
    <div className="form-control mt-6">
      {/* <button className="btn btn-primary">Login</button> */}
      <input type="submit" className="btn btn-primary btn-block"  value="Order Confirm" />
    </div>

 </form>
</div>
    );
};

export default BookService;