import React from 'react';
import './SignUp.css';
import { useContext } from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../ContextProviders/AuthProviders';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEyeSlash, faEye } from '@fortawesome/free-solid-svg-icons'

const SignUp = () => {
    const { createUser, verifyEmail } = useContext(UserContext);
    const navigate = useNavigate();
    const [error, setError] = useState('');

    const handleFromData = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirmpassword = form.confirmPassword.value;
        console.log(email, password, confirmpassword)
        setError('')
        if (password !== confirmpassword) {
            setError("Passwords do not match");
            return;
        }
        if (password.length < 6) {
            setError('Password must be take at least 6 characters');
            return;
        }

        createUser(email, password)
            .then(result => {
                const userCredential = result.user;
                console.log(userCredential);
                navigate('/login')
                verifyEmail()
                    .then(() => {
                        alert("We've sent a verification email. Please check your email and verify your account. Then login with you email and password.");
                    })
                    .catch(err => {
                        console.log(err)
                        setError(err.message)
                    })
            })

            .catch(err => {
                console.log(err)
                setError(err.message)
            })
    }


    const [confirmPasswordVisible, setComfirmPasswordVisible] = useState(false);
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [password, setPassword] = useState('');
    const [confirmPass, setConfirmPass] = useState('');

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const toggleConfirmPasswordVisibility = () => {
        setComfirmPasswordVisible(!confirmPasswordVisible);
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
                            {/* <input name='password' type="password" placeholder="password" className="input input-bordered" /> */}
                            <div className="relative">
                                <input type={passwordVisible ? "text" : "password"}
                                    name='password' placeholder="password"
                                    className="input input-bordered w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-blue-500" value={password}
                                    onChange={(e) => setPassword(e.target.value)} />
                                <i
                                    className={`toggle-password absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer ${passwordVisible ? 'text-blue-500' : 'text-gray-500'
                                        }`}
                                    onClick={togglePasswordVisibility}
                                >
                                    {passwordVisible ? (
                                        <FontAwesomeIcon icon={faEyeSlash} />
                                    ) : (
                                        <FontAwesomeIcon icon={faEye} />
                                    )}
                                </i>
                            </div>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confirm password</span>
                            </label>
                            {/* <input name='confirmPassword' type="password" placeholder="confirm password" className="input input-bordered" /> */}
                            <div className="relative">
                                <input type={confirmPasswordVisible ? "text" : "password"}
                                    name='confirmPassword' placeholder="confirm password"
                                    className="input input-bordered w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-blue-500" value={confirmPass}
                                    onChange={(e) => setConfirmPass(e.target.value)} />
                                <i
                                    className={`toggle-password absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer ${confirmPasswordVisible ? 'text-blue-500' : 'text-gray-500'
                                        }`}
                                    onClick={toggleConfirmPasswordVisibility}
                                >
                                    {confirmPasswordVisible ? (
                                        <FontAwesomeIcon icon={faEyeSlash} />
                                    ) : (
                                        <FontAwesomeIcon icon={faEye} />
                                    )}
                                </i>
                            </div>
                            <label className="label">
                                <Link to="/login" className="label-text-alt link link-hover">Already have an account?</Link>
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











