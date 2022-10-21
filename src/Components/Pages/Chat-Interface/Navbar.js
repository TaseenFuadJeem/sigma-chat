import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import auth from '../../../firebase.init';
import logo from '../../Assets/logo-white.png';
import { BiLogOut, BiDownArrow } from 'react-icons/bi';
import { IoMdSettings } from 'react-icons/io';

const Navbar = () => {

    const [user] = useAuthState(auth);
    console.log(user?.photoURL)

    const navigate = useNavigate();

    const handleLogout = () => {

        Swal.fire({
            title: `${user.displayName}, are you sure for logout?`,
            showCancelButton: true,
            icon: 'warning',
            confirmButtonText: 'Logout',
            denyButtonText: 'Cancel',
        }).then((result) => {
            if (result.isConfirmed) {
                signOut(auth);
                Swal.fire("Logout Successful", " ", "success");
                navigate("/login");
            };
        })

    }

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



                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost m-1">
                        <div className='flex items-center'>
                            <div className="avatar online">
                                <div className="w-9 rounded-full">
                                    <img src={user?.photoURL} alt="dp" />
                                </div>
                            </div>
                            <p className='ml-2 normal-case text-white font-semibold'>{user?.displayName}</p>
                            <BiDownArrow className='text-lg ml-1' />
                        </div>
                    </label>
                    <ul tabIndex={0} className="dropdown-content p-2 menu shadow bg-base-100 rounded-box w-52">
                        <button onClick={() => handleLogout()} className='text-black text-center btn btn-sm btn-link no-underline capitalize'><BiLogOut className='text-lg mr-1' />Log Out</button>
                        <button className='text-black text-center btn btn-sm btn-link no-underline capitalize'><IoMdSettings className='text-lg mr-1' />Settings</button>
                    </ul>
                </div>

            </div>
        </nav>
    );
};

export default Navbar;