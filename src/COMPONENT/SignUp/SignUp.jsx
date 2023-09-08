import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../ContextProviders/AuthProviders';
import './SignUp.css'

const SignUp = () => {
    const {createUser} = useContext(UserContext);
    const navigate = useNavigate();
    const [error, setError] = useState('');
    const handleFromData = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirmpassword = form.confirmPassword.value;
        console.log(email, password, confirmpassword)

        if(password !== confirmpassword){
            setError("Passwords do not match");
        }
        if(password.length<6){
            setError('Password must be take at least 8 characters');
        }

        createUser(email, password)
        .then(result => {
            const userCredential = result.user;
            console.log(userCredential);
            alert('created a account succesfully')
            navigate('/login')
        })
        .catch(err => {
            console.log(err)
            setError(err.message)
        })
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col md:flex-row-reverse">
                <div className="text-center md:text-left">
                    <h1 id='resize-font' className="text-5xl font-bold">Sign up now!</h1>
                    <p id='sugges' className='my-6 font-bold'>Create an account to get more benefit and explore the website...</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleFromData} className="card-body respo">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name='email' type="text" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name='password' type="password" placeholder="password" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confirm password</span>
                            </label>
                            <input name='confirmPassword' type="password" placeholder="confirm password" className="input input-bordered" />
                            <label className="label">
                                <Link to="/login" className="label-text-alt link link-hover">Already have an account</Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Sign up</button>
                        </div>
                        <p className='text-red-500'>{error}</p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;