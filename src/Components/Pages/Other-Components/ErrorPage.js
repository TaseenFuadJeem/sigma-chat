import React from 'react';
import { Link } from 'react-router-dom';
import error from '../../Assets/404 error lost in space-rafiki.svg';

const ErrorPage = () => {
    return (
        <div>
            <div className="flex items-center flex-col justify-center lg:flex-row py-28 px-6 md:px-24 md:py-20 gap-16 lg:gap-28">
                <div className="w-full lg:w-1/2">
                    <img src={error} alt="" />
                </div>
                <div className="w-full lg:w-1/2 text-left">
                    <h1 className="py-4 text-3xl lg:text-5xl font-extrabold text-neutral capitalize lg:leading-[65px]">Looks like you've found the doorway to the great nothing!</h1>
                    <p className="py-4 text-base text-neutral">The content you’re looking for doesn’t exist. Either it was removed, or you mistyped the link.</p>
                    <p className="py-2 text-base text-neutral">Sorry about that! Please visit our homepage to get where you need to go.</p>
                    <Link to="/conversations" className="w-full lg:w-auto my-4 btn btn-primary capitalize focus:ring-opacity-50 text-white">Go back to Homepage</Link>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;