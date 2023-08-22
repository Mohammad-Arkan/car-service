import { useLoaderData } from "react-router-dom";


const CheckOut = () => {
    const service = useLoaderData()
    const {title} = service
    return (
        <div>
            <h2>this is checkout page: {title}</h2>
     <form  className="p-20 bg-gray-300">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 ">  
         <div className="form-control">
          <label className="label">
            <span className="label-text">First Name</span>
          </label>
          <input type="text" placeholder="First Name" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Last Name</span>
          </label>
          <input type="text" placeholder="Last Name" className="input input-bordered" />
         
        </div>
         <div className="form-control">
          <label className="label">
            <span className="label-text">Your Phone</span>
          </label>
          <input type="text" placeholder="Your Phone" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Your Email</span>
          </label>
          <input type="text" placeholder="Your Email" className="input input-bordered" />
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

export default CheckOut;