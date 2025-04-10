import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useLoginForm } from '../hooks/user/login_form/useLoginForm';
import { useUserContext } from '../hooks/user/useUserContext';
import BodyContainer from '../components/BodyContainer';
import Footer from '../components/Footer';
import NormalButton from '../components/buttons/NormalButton';

import eyeIcon from "../assets/login/eye-icon.png";
import eyeClosed from "../assets/login/eye-closed.png";

const Login = () => {
    const { handleChange, handleLogin, form } = useLoginForm();
    const [isPassword, setIsPassword] = useState(true);

    return (
        <BodyContainer>
            <div className='bg-coral-700 px-[var(--size-xsm)] pt-[72px] pb-[120px] flex flex-col gap-[8px] h-100vh'>
                <form className="bg-white-200 flex flex-col gap-[var(--size-xsm)] px-[var(--size-xsm)] py-[var(--size-sm)] rounded-[2.5px]" onSubmit={handleLogin}>
                    <h3 className='text-center text-black-700 font-semibold'>Login</h3>
                    <div className="flex flex-col text-black-500 font-size-[12px] mb-[24px]">
                        <label className='text-black-600' htmlFor='email'>Email</label>
                        <input
                            id='email'
                            name='email'
                            type='email'
                            required
                            value={form.email}
                            onChange={handleChange}
                            className="cursor-text border-1 border-black-300 rounded-[5px] py-[4px] px-[8px]"
                            placeholder='youremail@mail.com'
                        />
                        <div className='cursor-pointer flex flex-row justify-between items-center'>
                            <label className='text-black-600' htmlFor='password'>Password</label>
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
                            value={form.password}
                            onChange={handleChange}
                            className="cursor-text border-1 border-black-300 rounded-[5px] py-[4px] px-[8px]"
                        />
                    </div>
                    <NormalButton 
                        innerHTML={"Login"}
                        type="submit"
                        className="flex-1"
                        
                    />
                    <div className='text-center'>
                        <p>Forgot your password? Click <a className='text-coral-600' href="">here</a>.</p>
                        <p>Don't have an account? <Link className='text-coral-600' to={'/signup'}>Sign up</Link> instead.</p>
                    </div>
                </form>
            </div>
            <Footer />
        </BodyContainer>
    );
}

export default Login;
