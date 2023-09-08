import React, { useState } from 'react';
import { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { UserContext } from '../ContextProviders/AuthProviders';
import './Login.css'

const Login = () => {
    const [err, setErr] = useState('');
    const navigate = useNavigate();
    const {loginUser} = useContext(UserContext);
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    console.log(location)
    const handleFromData = event => {
        event.preventDefault();
        setErr('');
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        loginUser(email, password)
        .then(result => {
            const userCredential = result.user;
            console.log(userCredential);
            // alert('Logged in successfully')
            navigate(from, {replace:true})
        })
        .catch(error => {
            console.log(error)
            setErr(error.message)
        })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col md:flex-row-reverse">
                <div className="text-center md:text-left">
                    <h1 id='resize-font' className="text-5xl font-bold">Login now!</h1>
                    <p id='sugges' className='py-6 font-bold'>Login with your email and password to get more access. Your data is secure with us.</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleFromData} className="card-body respo ">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <p className='text-red-500'>{err}</p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;