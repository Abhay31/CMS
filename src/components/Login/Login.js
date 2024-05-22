import React, { useState, useRef } from "react";
import { FaRegEnvelope } from "react-icons/fa6";
import { IoMdLock } from "react-icons/io";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { FaArrowCircleRight } from "react-icons/fa";
import './Login.css'

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [iconClicked, setIconClicked] = useState(false);
    const passwordRef = useRef(null);

    const handleMouseDown = () => {
        setIconClicked(true);
        if (!showPassword) {
            setShowPassword(true);
        }
    };

    const handleMouseUp = () => {
        setIconClicked(false);
        if (showPassword) {
            setShowPassword(false);
        }
    };

    const handleBlur = () => {
        if (!iconClicked && showPassword) {
            setShowPassword(false);
        }
    };
    return (
        <>
            <div className="container-fluid vh-100 d-flex justify-content-center align-items-center">
                <div className="container rounded-3 c1 p-4 shadow-lg" style={{ maxWidth: '400px' }}>
                    <form>
                        <div className="mb-3 text-start">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <div className="input-group">
                                <span className="input-group-text"><FaRegEnvelope /></span>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Email" required />
                            </div>
                        </div>
                        <div className="mb-3 text-start">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <div className="input-group">
                                <span className="input-group-text"><IoMdLock /></span>
                                <input
                                    ref={passwordRef}
                                    type={showPassword ? 'text' : 'password'}
                                    className="form-control"
                                    id="exampleInputPassword1"
                                    onBlur={handleBlur}
                                    placeholder="Enter Password"
                                />
                                <span className="input-group-text" type="button"
                                    onMouseDown={handleMouseDown}
                                    onMouseUp={handleMouseUp}
                                    onMouseLeave={handleMouseUp}>{showPassword ? <FiEyeOff /> : <FiEye />}
                                </span>
                            </div>
                        </div>
                        <div className="mb-3 text-start form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1" required />
                            <label className="form-check-label" htmlFor="exampleCheck1">I Agree to the Terms and Conditions</label>
                        </div>
                        <button type="submit" className="btn btn-primary px-4 mb-3">
                            Login <FaArrowCircleRight className="fa-arrow-circle-right" />
                        </button>
                        <div className="mb-3">
                            <label className="form-check-label text-gray ss" htmlFor="exampleCheck1">Not Registered? <a href="/signup">Create an Account</a></label>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Login;