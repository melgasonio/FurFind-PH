import { Link } from 'react-router-dom';
import { useSignupForm } from '../hooks/user/signup_form/useSignupForm';
import { useUserContext } from '../hooks/user/useUserContext';

const Signup = () => {
    const { handleChange, handleSubmit } = useSignupForm();
    const { user } = useUserContext();

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor='firstName'>First Name</label>
            <input 
                id='firstName'
                name='firstName'
                type='firstName'
                required
                value={user.firstName} 
                onChange={handleChange}
            />

            <label htmlFor='lastName'>Last Name</label>
            <input 
                id='lastName'
                name='lastName'
                type='lastName'
                required
                value={user.lastName} 
                onChange={handleChange}
            />


            <label htmlFor='email'>Email</label>
            <input 
                id='email'
                name='email'
                type='email'
                required
                value={user.email} 
                onChange={handleChange}
            />

            <label htmlFor='password'>Password</label>
            <input 
                id='password'
                name='password'
                type='password'
                required
                value={user.password}
                onChange={handleChange}
            />

            <button type='submit'>
                Sign Up
            </button>
            <p>Already have an account? <Link to={'/login'}>Login</Link> instead.</p>
        </form>
    );
}

export default Signup;
