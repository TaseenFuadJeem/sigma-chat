import React from 'react';
import Navbar from './Navbar';
import bg from '../../Assets/blob-scene-haikei.svg';
import { Link } from 'react-router-dom';

const Chat = () => {
    return (
        <section className='bg-no-repeat bg-cover bg-fixed pt-[70px]' style={{ backgroundImage: `url(${bg})` }}>

            <Navbar />

            <div className="drawer drawer-mobile text-black bg-transparent backdrop-blur-3xl">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    {/* page contents */}

                    {/* page contents */}
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-80 lg:text-white text-black bg-white lg:bg-transparent lg:backdrop-blur-3xl">
                        {/* Sidebar content */}
                        <li><Link to="">Sidebar Item 1</Link></li>
                        <li><Link to="">Sidebar Item 2</Link></li>
                        {/* Sidebar content */}
                    </ul>

                </div>
            </div>

        </section>
    );
};

export default Chat;