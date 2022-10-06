import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import pattern from '../../Assets/login-pattern.png';
import logo from '../../Assets/logo-black.png';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { FcGoogle } from 'react-icons/fc';
import Swal from 'sweetalert2';
import Loading from '../Other-Components/Loading';

const Registration = () => {

    const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth);

    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);

    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const navigate = useNavigate();

    useEffect(() => {

        if (user || googleUser) {
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Account created successful',
                showConfirmButton: false,
                timer: 2000
            })
            console.log(googleUser)
            console.log(user)
            navigate('/conversations')
        }

    }, [user, googleUser, navigate])

    useEffect(() => {

        if (googleError || error || updateError) {
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: "Something went wrong. Can't process. Please try again",
                showConfirmButton: true,
            })
            reset();
        }

    }, [error, googleError, updateError, reset])

    const onSubmit = async data => {
        if (data?.password === data?.confirmpassword) {

            await createUserWithEmailAndPassword(data.email, data.password);
            await updateProfile({ displayName: data.name });
            reset();

        } else {

            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Your password did not matched. Try again.',
                showConfirmButton: true,
            })
            reset();

        }
    };

    return (
        <>
            {

                loading || googleLoading || updating ?

                    <Loading />

                    :

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
                                class="flex items-center justify-center p-8 lg:col-span-7 xl:col-span-6"
                            >
                                <div class="max-w-xl lg:max-w-3xl">
                                    <a class="block text-blue-600" href="/">
                                        <span class="sr-only">Home</span>
                                        <img src={logo} className="w-40" alt="" />
                                    </a>

                                    <h1
                                        class="my-3 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl"
                                    >
                                        Welcome to Sigmaa
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


                                        <div class="flex justify-center">
                                            <input type="submit" value="Create new Account" className='w-full mx-auto btn btn-outline btn-primary hover:text-white capitalize' />
                                        </div>
                                    </form>
                                    <div className="divider">OR</div>
                                    <div className='flex justify-center'>
                                        <button onClick={() => signInWithGoogle()} className="capitalize w-full  mx-auto btn text-black hover:text-black btn-outline" >
                                            <FcGoogle className='text-2xl mr-2' /> Continue with google
                                        </button>
                                    </div>

                                    <p class="mt-4 text-center text-sm text-gray-500 sm:mt-0">
                                        Already have an account?
                                        <Link to="/login" class="btn btn-link p-0 text-gray-500 capitalize mx-1">Log in</Link>.
                                    </p>
                                </div>
                            </main>
                        </div>
                    </section>

            }
        </>
    );
};

export default Registration;