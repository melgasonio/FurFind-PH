import { Link } from 'react-router-dom';
import { useSignupForm } from '../hooks/user/signup_form/useSignupForm';
import { useUserContext } from '../hooks/user/useUserContext';
import { useState } from 'react';

import NormalButton from '../components/buttons/NormalButton';
import Footer from '../components/Footer';
import BodyContainer from '../components/BodyContainer';

import eyeIcon from "../assets/login/eye-icon.png";
import eyeClosed from "../assets/login/eye-closed.png";


const Signup = () => {
    const { handleChange, handleSubmit } = useSignupForm();
    const { user } = useUserContext();
    const [isPassword, setIsPassword] = useState(true);

    return (
        <BodyContainer className='h-screen flex flex-col'>
            <div className='bg-coral-700 px-[var(--size-xsm)] pt-[72px] pb-[120px] flex-grow flex flex-col justify-center gap-[8px] h-100vh'>
                <form className="bg-white-200 flex flex-col gap-[var(--size-xsm)] px-[var(--size-xsm)] py-[var(--size-sm)] rounded-[2.5px]" onSubmit={handleSubmit}>
                    <h3 className='text-center text-black-700 font-semibold'>Sign Up for FurFind PH</h3>
                    <div className="flex flex-col text-black-500 font-size-[12px] gap-[8px]">
                        <div className="flex flex-col gap-[4px]">
                            <label className='text-black-600' htmlFor='firstName'>First Name*</label>
                            <input
                                id='firstName'
                                name='firstName'
                                type='firstName'
                                required
                                value={user.firstName}
                                onChange={handleChange}
                                className="cursor-text border-1 border-black-300 rounded-[5px] py-[4px] px-[8px]"
                            />
                        </div>
                        <div className="flex flex-col gap-[4px]">
                            <label className='text-black-600' htmlFor='lastName'>Last Name</label>
                            <input
                                id='lastName'
                                name='lastName'
                                type='lastName'
                                required
                                value={user.lastName}
                                onChange={handleChange}
                                className="cursor-text border-1 border-black-300 rounded-[5px] py-[4px] px-[8px]"
                            />
                        </div>
                        <div className="flex flex-col gap-[4px]">
                            <label className='text-black-600' htmlFor='email'>Email*</label>
                            <input
                                id='email'
                                name='email'
                                type='email'
                                required
                                value={user.email}
                                onChange={handleChange}
                                className="cursor-text border-1 border-black-300 rounded-[5px] py-[4px] px-[8px]"
                            />
                        </div>
                        <div className="flex flex-col gap-[4px]">
                            <div className='cursor-pointer flex flex-row items-center justify-between'>
                                <label className='text-black-600' htmlFor='password'>Password*</label>
                                <img
                                    src={isPassword ? eyeIcon : eyeClosed}
                                    className={isPassword ? "h-[12px]" : "h-[16px]"}
                                    onClick={() => setIsPassword(!isPassword)}
                                />
                            </div>
                            <input
                                id='password'
                                name='password'
                                type={isPassword ? "password" : "text"}
                                required
                                value={user.password}
                                onChange={handleChange}
                                className="cursor-text border-1 border-black-300 rounded-[5px] py-[4px] px-[8px]"
                            />
                        </div>
                    </div>
                    <div className='flex flex-row items-start mb-[24px]'>
                        <div className='items-center'>
                            <input
                                id='privacy_checkbox'
                                name='privacy_checkbox'
                                type='checkbox'
                                className='cursor-pointer mr-[4px] accent-coral-300 '
                            />
                        </div>
                        <p>I have read and agree to the <Link to="" className='text-coral-700 hover:text-coral-400'>Terms of Service</Link> and <Link to="" className='text-coral-700 hover:text-coral-400'>Community Guidelines</Link>.</p>
                    </div>
                    <NormalButton
                        innerHTML={"Sign Up"}
                        type="submit"
                        className="flex-1"
                    />
                    <p className='text-center'>Already have an account? <Link className='text-coral-700 hover:text-coral-400' to={'/login'}>Login</Link> instead.</p>
                </form>
            </div>
            <Footer />
        </BodyContainer>
    );
}

export default Signup;
