import { AuthContext } from '../../Provider/AuthProvider';
import login from '../../assets/images/login/login.svg'
import { Link } from "react-router-dom";
import {useContext, useState} from 'react'

const SingUp = () => {
    const {createUser} = useContext(AuthContext)
    const [success, setSuccess] = useState('')
    const handleSignup =(e)=> {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password)

createUser(email, password)
.then((result)=> {
    const loggedUser = result.user;
    console.log(loggedUser)
    setSuccess('User login Successful')
    form.reset()   
})
.catch((error)=> {
    console.log(error)
})
    }
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">           
          </div>
          <div className="lg:flex gap-20">
            <div className='w-1/2'>
                <img src={login} alt="" />
            </div>
            <div className='w-1/2 space-y-5'>
            <form onSubmit={handleSignup}>
            <h1 className="text-4xl font-bold text-center mb-5">Sign Up</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" name='name' placeholder="Your name" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="text" name='email' placeholder="Your email" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input type="text" name='password' placeholder="Your password" className="input input-bordered" />
          
              </div>
              <div className="form-control mt-6">
                <input type="submit" className='btn btn-primary' value="Sign Up" />
              </div>
            </form>
            
            <p className='text-center font-semibold'>Already have an account? <Link to="/login" className='text-orange-500'>Login</Link></p>
            <p className='text-success'>{success}</p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default SingUp;