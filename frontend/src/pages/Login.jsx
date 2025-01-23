import { Link } from 'react-router-dom';
import { useLoginForm } from '../hooks/user/login_form/useLoginForm';
import { useUserContext } from '../hooks/user/useUserContext';

const Login = () => {
    const { handleChange, handleSubmit } = useLoginForm();
    const { user } = useUserContext();

    return (
        <form onSubmit={handleSubmit}>
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
                Login
            </button>
            <p>Don't have an account? <Link to={'/signup'}>Sign up</Link> now.</p>
        </form>
    );
}

export default Login;
