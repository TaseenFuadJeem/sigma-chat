import { signOut } from 'firebase/auth';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import auth from '../../../firebase.init';
import logo from '../../Assets/logo-white.png';

const Navbar = () => {

    const navigate = useNavigate();

    const logout = () => {
        signOut(auth);
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Logout Successful',
            showConfirmButton: false,
            timer: 2000
        })
        navigate('/login')
    };

    return (
        <nav className="navbar bg-transparent backdrop-blur-3xl shadow-md text-white fixed top-0 z-50">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">

                        {/* nav content */}

                    </ul>
                </div>
                <Link to="" className="">
                    <img src={logo} className="w-40" alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">

                    {/* nav content for mobile  */}

                </ul>
            </div>
            <div className="navbar-end">
                <button onClick={() => logout()} className="btn">Get started</button>
            </div>
        </nav>
    );
};

export default Navbar;