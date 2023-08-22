import { AuthContext } from '../../Provider/AuthProvider';
import login from '../../assets/images/login/login.svg'
import { Link, useNavigate } from 'react-router-dom';
import {useContext} from 'react'


const Login = () => {
    const {logIn} = useContext(AuthContext)
    const navigate = useNavigate()
    const handleLogin =(e)=> {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log( email, password)

logIn(email, password)
.then((result)=>{
    const loggedUser = result.user;
    console.log(loggedUser)
    form.reset()
    navigate('/')
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
            <form onSubmit={handleLogin}>
            <h1 className="text-4xl font-bold text-center mb-5">Login</h1>            
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
                <input type="submit" className='btn btn-primary' value="Sign In" />
              </div>
            </form>
            <p className='text-center font-semibold'>Are you new to car service? <Link to="/register" className='text-orange-500'>Sing Up</Link></p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Login;