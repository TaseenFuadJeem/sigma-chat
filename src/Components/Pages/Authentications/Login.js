import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import pattern from '../../Assets/login-pattern.png';
import logo from '../../Assets/logo-black.png';

const Login = () => {

    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const onSubmit = async data => {
        console.log(data);
    };

    return (
        <section class="bg-white">
            <div class="lg:grid lg:min-h-screen lg:grid-cols-12">
                <aside
                    class="relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6"
                >
                    <img
                        alt="Pattern"
                        src={pattern}
                        class="absolute inset-0 object-cover w-full h-full"
                    />
                </aside>

                <main
                    class="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 xl:col-span-6"
                >
                    <div class="max-w-xl lg:max-w-3xl">
                        <a class="block text-blue-600" href="/">
                            <span class="sr-only">Home</span>
                            <img src={logo} className="w-40" alt="" />
                        </a>

                        <h1
                            class="my-3 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl"
                        >
                            Welcome Back to Sigmaa
                        </h1>

                        <form onSubmit={handleSubmit(onSubmit)}>

                            <div className=''>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-gray-500">Email</span>
                                    </label>
                                    <input type="email" placeholder="Enter your email" className="input input-bordered text-black" {...register("email", {
                                        required: {
                                            value: true,
                                            message: "Email is required"
                                        },
                                        pattern: {
                                            value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                            message: "Provide a valid email"
                                        }
                                    })} />
                                    <label className="label">
                                        {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                        {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                    </label>
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-gray-500">Password</span>
                                    </label>
                                    <input type="password" placeholder="Enter your password" className="input input-bordered text-black" {...register("password", {
                                        required: {
                                            value: true,
                                            message: "Password is required"
                                        },
                                        minLength: {
                                            value: 6,
                                            message: "Minimum 6 characters required"
                                        }
                                    })} />
                                    <label className="label">
                                        {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                        {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                    </label>
                                </div>
                            </div>

                            <div class="col-span-6 sm:flex sm:items-center sm:gap-4">
                                <input type="submit" value="Log in" className='btn btn-outline btn-primary hover:text-white' />

                                <p class="mt-4 text-sm text-gray-500 sm:mt-0">
                                    Don't have an account?
                                    <Link to="/create-a-new-account" class="btn btn-link p-0 text-gray-500 capitalize mx-1">Create Account</Link>.
                                </p>
                            </div>
                        </form>

                        <Link to="/reset-your-password" className='mb-3 btn btn-link p-0 text-gray-500 capitalize'>Forgot your password?</Link>

                    </div>
                </main>
            </div>
        </section>
    );
};

export default Login;