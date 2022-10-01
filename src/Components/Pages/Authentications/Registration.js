import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import pattern from '../../Assets/login-pattern.png';
import logo from '../../Assets/logo-black.png';

const Registration = () => {

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
                    class="flex items-center justify-center px-8 py-8 sm:px-9 lg:col-span-7 xl:col-span-6"
                >
                    <div class="max-w-xl lg:max-w-3xl">
                        <a class="block text-blue-600" href="/">
                            <span class="sr-only">Home</span>
                            <img src={logo} className="w-40" alt="" />
                        </a>

                        <h1
                            class="my-3 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl"
                        >
                            Welcome to Sigma
                        </h1>

                        <form onSubmit={handleSubmit(onSubmit)}>

                            <div className='grid lg:grid-cols-2 lg:gap-2'>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-gray-500">Name</span>
                                    </label>
                                    <input type="text" placeholder="your name" className="input input-bordered text-black" {...register("name", {
                                        required: {
                                            value: true,
                                            message: "Name is required"
                                        }
                                    })} />
                                    <label className="label">
                                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                                    </label>
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-gray-500">Email</span>
                                    </label>
                                    <input type="email" placeholder="email" className="input input-bordered text-black" {...register("email", {
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
                                    <input type="password" placeholder="password" className="input input-bordered text-black" {...register("password", {
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

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-gray-500">Confirm Password</span>
                                    </label>
                                    <input type="password" placeholder="Please re-write your password" className="input input-bordered text-black" {...register("confirmpassword", {
                                        required: {
                                            value: true,
                                            message: "Password confirmation is required"
                                        },
                                        minLength: {
                                            value: 6,
                                            message: "Minimum 6 characters required"
                                        }
                                    })} />
                                    <label className="label">
                                        {errors.confirmpassword?.type === 'required' && <span className="label-text-alt text-red-500">{errors.confirmpassword.message}</span>}
                                        {errors.confirmpassword?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.confirmpassword.message}</span>}
                                    </label>
                                </div>
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-gray-500">Profile Photo</span>
                                </label>
                                <input type="file" {...register("img", {
                                    required: {
                                        value: true,
                                        message: "Image is required"
                                    }
                                })} />
                                <label className="label">
                                    {errors.img?.type === 'required' && <span className="label-text-alt text-red-500">{errors.img.message}</span>}
                                </label>
                            </div>

                            <div class=" my-3">
                                <label for="MarketingAccept" class="flex gap-4">
                                    <input
                                        type="checkbox"
                                        id="MarketingAccept"
                                        name="marketing_accept"
                                        class="w-5 h-5 bg-white border-gray-200 rounded-md shadow-sm"
                                    />

                                    <span class="text-sm text-gray-700">
                                        I want to receive emails about events, product updates and
                                        company announcements.
                                    </span>
                                </label>
                            </div>

                            <div class="">
                                <p class="text-sm text-gray-500">
                                    By creating an account, you agree to our
                                    <a href="#" class="btn btn-link p-0 text-gray-500 capitalize mx-1">
                                        terms and conditions
                                    </a>
                                    and
                                    <a href="#" class="btn btn-link p-0 text-gray-500 capitalize mx-1">privacy policy</a>.
                                </p>
                            </div>

                            <div class="col-span-6 sm:flex sm:items-center sm:gap-4">
                                <input type="submit" value="Create new Account" className='btn btn-outline btn-primary hover:text-white' />

                                <p class="mt-4 text-sm text-gray-500 sm:mt-0">
                                    Already have an account?
                                    <Link to="/login" class="btn btn-link p-0 text-gray-500 capitalize mx-1">Log in</Link>.
                                </p>
                            </div>
                        </form>
                    </div>
                </main>
            </div>
        </section>
    );
};

export default Registration;