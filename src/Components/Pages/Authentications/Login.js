import React, { useEffect } from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { FcGoogle } from 'react-icons/fc';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import auth from '../../../firebase.init';
import pattern from '../../Assets/login-pattern.png';
import logo from '../../Assets/logo-black.png';
import AnimatedRoute from '../Other-Components/AnimatedRoute';
import Loading from '../Other-Components/Loading';

const Login = () => {

    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);

    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);

    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    useEffect(() => {

        if (googleError?.message === "Firebase: Error (auth/popup-closed-by-user).") {
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'You closed the popup',
                showConfirmButton: false,
                timer: 2000
            })
        };

        if (error?.message === "Firebase: Error (auth/wrong-password).") {
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'You entered a wrong password',
                showConfirmButton: false,
                timer: 2000
            })
        };

        if (error?.message === "Firebase: Error (auth/invalid-email).") {
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Invalid Email',
                showConfirmButton: false,
                timer: 2000
            })
        };

        if (error?.message === "Firebase: Error (auth/user-not-found).") {
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'No user found. Please check your E-mail',
                showConfirmButton: false,
                timer: 2000
            })
        };

    }, [googleError?.message, error?.message]);

    const navigate = useNavigate();

    if (user || googleUser) {
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Login Successful',
            showConfirmButton: false,
            timer: 2000
        })
        console.log(user, googleUser);
        navigate('/conversations')
    }

    const onSubmit = async data => {
        await signInWithEmailAndPassword(data.email, data.password);
        reset();
    };

    return (
        <>
            {

                loading || googleLoading ?

                    <Loading />

                    :

                    <AnimatedRoute>
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
                                                        <span className="label-text-alt">
                                                            <Link to="/reset-your-password" className='link text-gray-500 capitalize'>Forgot your password?</Link>
                                                        </span>
                                                    </label>
                                                </div>
                                            </div>

                                            <input type="submit" value="Log in" className='mt-3 btn btn-outline w-full btn-primary hover:text-white' />
                                        </form>

                                        <div className="divider text-black">OR</div>

                                        <button onClick={() => signInWithGoogle()} className="capitalize w-full  mx-auto btn text-black hover:text-black btn-outline" >
                                            <FcGoogle className='text-2xl mr-2' /> Continue with google
                                        </button>

                                        <p class="mt-4 text-sm text-gray-500 sm:mt-0">
                                            Don't have an account?
                                            <Link to="/create-a-new-account" class="btn btn-link p-0 text-gray-500 capitalize mx-1">Create Account</Link>.
                                        </p>

                                    </div>
                                </main>
                            </div>
                        </section>
                    </AnimatedRoute>

            }
        </>
    );
};

export default Login;